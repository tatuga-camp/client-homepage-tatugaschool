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

export type PayingSchoolsFile = {
  version: 1;
  generatedAt: string;
  counts: PlanCounts;
  schools: PayingSchool[];
};

/** What the homepage hero renders. */
export type HeroSchools = {
  counts: PlanCounts;
  schools: PayingSchool[];
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
    schools,
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

  return { counts: file.counts, schools: picked };
}
