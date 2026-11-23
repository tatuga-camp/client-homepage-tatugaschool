import { test } from "node:test";
import assert from "node:assert/strict";
import {
  FALLBACK_TOTALS,
  parsePayingSchoolsFile,
  pickHeroSchools,
  resolveUsageNumbers,
  type PaidPlan,
} from "./payingSchools";

const school = (name: string, plan: PaidPlan) => ({
  name,
  logo: `https://cdn.example.com/${name}.png`,
  blurHash: null,
  plan,
  city: "Nakhon Ratchasima",
  country: "Thailand",
});

const file = (schools: unknown[], counts: unknown = {}) => ({
  version: 1,
  generatedAt: "2026-10-04T00:00:00.000Z",
  counts,
  schools,
});

test("rejects payloads that are not version 1 with a schools array", () => {
  assert.equal(parsePayingSchoolsFile(null), null);
  assert.equal(parsePayingSchoolsFile("nope"), null);
  assert.equal(parsePayingSchoolsFile({ version: 2, schools: [] }), null);
  assert.equal(parsePayingSchoolsFile({ version: 1, schools: {} }), null);
});

test("drops schools with no name or a non-paid plan", () => {
  const parsed = parsePayingSchoolsFile(
    file([
      school("A", "BASIC"),
      { ...school("B", "BASIC"), plan: "FREE" },
      { ...school("C", "PREMIUM"), name: "   " },
      "garbage",
    ]),
  );
  assert.deepEqual(
    parsed?.schools.map((s) => s.name),
    ["A"],
  );
});

test("blanks non-https logos and normalises empty strings to null", () => {
  const parsed = parsePayingSchoolsFile(
    file([{ ...school("A", "BASIC"), logo: "http://x/a.png", city: "" }]),
  );
  assert.equal(parsed?.schools[0].logo, "");
  assert.equal(parsed?.schools[0].city, null);
});

test("counts fall back to 0 when missing or invalid", () => {
  const parsed = parsePayingSchoolsFile(
    file([], { ENTERPRISE: 3, PREMIUM: "7", BASIC: -1 }),
  );
  assert.deepEqual(parsed?.counts, { ENTERPRISE: 3, PREMIUM: 0, BASIC: 0 });
});

test("pickHeroSchools interleaves plans and respects the limit", () => {
  const parsed = parsePayingSchoolsFile(
    file([
      school("B1", "BASIC"),
      school("B2", "BASIC"),
      school("B3", "BASIC"),
      school("P1", "PREMIUM"),
      school("E1", "ENTERPRISE"),
    ]),
  )!;
  const firstItem = () => 0; // deterministic shuffle
  const hero = pickHeroSchools(parsed, 4, firstItem);
  assert.deepEqual(
    hero.schools.map((s) => s.plan),
    ["ENTERPRISE", "PREMIUM", "BASIC", "BASIC"],
  );
});

test("pickHeroSchools returns everything when there are fewer schools than the limit", () => {
  const parsed = parsePayingSchoolsFile(file([school("B1", "BASIC")]))!;
  assert.equal(pickHeroSchools(parsed, 12).schools.length, 1);
});

const TOTALS = { schools: 5300, users: 6400, students: 121500 };

test("totals are null when the file has none (published by an older scheduler)", () => {
  assert.equal(parsePayingSchoolsFile(file([]))?.totals, null);
});

test("totals are read as whole numbers", () => {
  const parsed = parsePayingSchoolsFile({
    ...file([]),
    totals: { schools: 5300.9, users: 6400, students: 121500 },
  });
  assert.deepEqual(parsed?.totals, TOTALS);
});

test("one missing, zero or malformed total discards all three", () => {
  const withTotals = (totals: unknown) =>
    parsePayingSchoolsFile({ ...file([]), totals })?.totals;
  assert.equal(withTotals({ schools: 5300, users: 6400 }), null);
  assert.equal(withTotals({ ...TOTALS, students: 0 }), null);
  assert.equal(withTotals({ ...TOTALS, users: "6400" }), null);
  assert.equal(withTotals({ ...TOTALS, schools: -1 }), null);
  assert.equal(withTotals("nope"), null);
  assert.equal(withTotals(null), null);
});

test("pickHeroSchools carries the totals and the publish time through", () => {
  const parsed = parsePayingSchoolsFile({ ...file([]), totals: TOTALS })!;
  const hero = pickHeroSchools(parsed, 4);
  assert.deepEqual(hero.totals, TOTALS);
  assert.equal(hero.generatedAt, "2026-10-04T00:00:00.000Z");
});

test("resolveUsageNumbers serves the published totals with their date", () => {
  const parsed = parsePayingSchoolsFile({ ...file([]), totals: TOTALS })!;
  assert.deepEqual(resolveUsageNumbers(pickHeroSchools(parsed, 4)), {
    totals: TOTALS,
    updatedAt: "2026-10-04T00:00:00.000Z",
  });
});

test("resolveUsageNumbers falls back to the last hand-set figures, undated", () => {
  const fallback = { totals: FALLBACK_TOTALS, updatedAt: null };
  // No file at all (local dev, or the CDN fetch failed on a cold server).
  assert.deepEqual(resolveUsageNumbers(null), fallback);
  // A file from a scheduler that does not publish totals yet.
  const older = parsePayingSchoolsFile(file([school("B1", "BASIC")]))!;
  assert.deepEqual(resolveUsageNumbers(pickHeroSchools(older, 4)), fallback);
});

test("resolveUsageNumbers drops a publish time that is not a date", () => {
  const parsed = parsePayingSchoolsFile({
    ...file([]),
    generatedAt: "yesterday-ish",
    totals: TOTALS,
  })!;
  assert.deepEqual(resolveUsageNumbers(pickHeroSchools(parsed, 4)), {
    totals: TOTALS,
    updatedAt: null,
  });
});
