/**
 * Pure helpers for the paying-schools JSON the scheduler publishes to the
 * CDN (servers/scheduler, src/paying-schools). Kept free of fetch/Next imports
 * so they can be unit-tested with `node --test`.
 */

export const PAID_PLANS = ["ENTERPRISE", "PREMIUM", "BASIC"] as const;
export type PaidPlan = (typeof PAID_PLANS)[number];

export type PayingSchool = {
  name: string;
  logo: string;
  blurHash: string | null;
  plan: PaidPlan;
  city: string | null;
  country: string | null;
};

export type PlanCounts = Record<PaidPlan, number>;

/**
 * How many schools, teachers and students use Tatuga School, on every plan,
 * free included. `users` are accounts with a verified email.
 */
export type PlatformTotals = {
  schools: number;
  users: number;
  students: number;
};

export type PayingSchoolsFile = {
  version: 1;
  generatedAt: string;
  counts: PlanCounts;
  /** null when the file was published by a scheduler that has no totals yet. */
  totals: PlatformTotals | null;
  schools: PayingSchool[];
};

/** What the homepage renders from the file. */
export type HeroSchools = {
  counts: PlanCounts;
  schools: PayingSchool[];
  totals: PlatformTotals | null;
  generatedAt: string;
};

/**
 * The usage numbers shown before the scheduler published live totals. They
 * stand in whenever the file, or its totals, cannot be read.
 */
export const FALLBACK_TOTALS: PlatformTotals = {
  schools: 5196,
  users: 6138,
  students: 119229,
};

/** What the usage-numbers section renders. */
export type UsageNumbers = {
  totals: PlatformTotals;
  /** ISO time the totals were counted; null for the fallback figures. */
  updatedAt: string | null;
};

function isPaidPlan(value: unknown): value is PaidPlan {
  return (
    typeof value === "string" && (PAID_PLANS as readonly string[]).includes(value)
  );
}

function optionalString(value: unknown): string | null {
  return typeof value === "string" && value.trim() !== "" ? value.trim() : null;
}

function count(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) && value > 0
    ? Math.floor(value)
    : 0;
}

/**
 * All three totals or none: a zero or malformed figure is far likelier a
 * broken count than a platform with no students, and one stale number beside
 * two live ones would not add up.
 */
function parseTotals(input: unknown): PlatformTotals | null {
  if (typeof input !== "object" || input === null) return null;
  const raw = input as Record<string, unknown>;
  const totals: PlatformTotals = {
    schools: count(raw.schools),
    users: count(raw.users),
    students: count(raw.students),
  };
  return totals.schools > 0 && totals.users > 0 && totals.students > 0
    ? totals
    : null;
}

/**
 * Validates the CDN payload. Anything malformed is dropped rather than
 * trusted: the file is public and edited by a job, not by hand.
 */
export function parsePayingSchoolsFile(input: unknown): PayingSchoolsFile | null {
  if (typeof input !== "object" || input === null) return null;
  const raw = input as Record<string, unknown>;
  if (raw.version !== 1 || !Array.isArray(raw.schools)) return null;

  const rawCounts = (raw.counts ?? {}) as Record<string, unknown>;
  const counts: PlanCounts = {
    ENTERPRISE: count(rawCounts.ENTERPRISE),
    PREMIUM: count(rawCounts.PREMIUM),
    BASIC: count(rawCounts.BASIC),
  };

  const schools: PayingSchool[] = [];
  for (const item of raw.schools) {
    if (typeof item !== "object" || item === null) continue;
    const school = item as Record<string, unknown>;
    const name = optionalString(school.name);
    const logo = optionalString(school.logo);
    if (!name || !isPaidPlan(school.plan)) continue;
    schools.push({
      name,
      // Only https logos reach next/image; anything else gets the initial fallback.
      logo: logo && logo.startsWith("https://") ? logo : "",
      blurHash: optionalString(school.blurHash),
      plan: school.plan,
      city: optionalString(school.city),
      country: optionalString(school.country),
    });
  }

  return {
    version: 1,
    generatedAt: typeof raw.generatedAt === "string" ? raw.generatedAt : "",
    counts,
    totals: parseTotals(raw.totals),
    schools,
  };
}

/**
 * The figures for the usage-numbers section: the published totals with the
 * time they were counted, or the fallback figures with no date.
 */
export function resolveUsageNumbers(hero: HeroSchools | null): UsageNumbers {
  if (!hero?.totals) return { totals: FALLBACK_TOTALS, updatedAt: null };
  return {
    totals: hero.totals,
    updatedAt: Number.isNaN(Date.parse(hero.generatedAt))
      ? null
      : hero.generatedAt,
  };
}

function shuffle<T>(items: T[], random: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Picks up to `limit` schools for the hero, interleaving plans (Enterprise,
 * Premium, Basic, Enterprise, ...) so neighbouring badges differ. Each plan is
 * shuffled first, so the hero shows a different mix as the cache refreshes.
 */
export function pickHeroSchools(
  file: PayingSchoolsFile,
  limit: number,
  random: () => number = Math.random,
): HeroSchools {
  const queues = PAID_PLANS.map((plan) =>
    shuffle(
      file.schools.filter((school) => school.plan === plan),
      random,
    ),
  );

  const picked: PayingSchool[] = [];
  while (picked.length < limit && queues.some((queue) => queue.length > 0)) {
    for (const queue of queues) {
      const next = queue.shift();
      if (next && picked.length < limit) picked.push(next);
    }
  }

  return {
    counts: file.counts,
    schools: picked,
    totals: file.totals,
    generatedAt: file.generatedAt,
  };
}
