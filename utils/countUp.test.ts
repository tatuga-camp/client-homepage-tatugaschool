import { test } from "node:test";
import assert from "node:assert/strict";
import { countUpValue } from "./countUp";

test("starts at zero and lands exactly on the target", () => {
  assert.equal(countUpValue(119229, 0), 0);
  assert.equal(countUpValue(119229, 1), 119229);
});

test("a null progress means the count is settled on the target", () => {
  assert.equal(countUpValue(6138, null), 6138);
});

test("only ever climbs, in whole numbers, and never passes the target", () => {
  let previous = 0;
  for (let step = 0; step <= 200; step++) {
    const value = countUpValue(5196, step / 200);
    assert.ok(Number.isInteger(value), `step ${step} is a whole number`);
    assert.ok(value >= previous, `step ${step} does not go backwards`);
    assert.ok(value <= 5196, `step ${step} stays at or under the target`);
    previous = value;
  }
});

test("eases out: most of the climb happens in the first half", () => {
  assert.ok(countUpValue(1000, 0.5) > 800);
});

test("progress outside 0..1 is clamped", () => {
  assert.equal(countUpValue(1000, -0.5), 0);
  assert.equal(countUpValue(1000, 3), 1000);
  assert.equal(countUpValue(1000, Number.NaN), 1000);
});

test("a target that is not a positive number shows as zero", () => {
  assert.equal(countUpValue(0, 0.5), 0);
  assert.equal(countUpValue(-20, 0.5), 0);
  assert.equal(countUpValue(Number.NaN, null), 0);
});
