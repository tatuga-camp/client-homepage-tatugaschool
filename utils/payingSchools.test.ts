import { test } from "node:test";
import assert from "node:assert/strict";
import {
  parsePayingSchoolsFile,
  pickHeroSchools,
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
