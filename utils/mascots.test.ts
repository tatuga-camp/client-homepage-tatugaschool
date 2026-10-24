import { test } from "node:test";
import assert from "node:assert/strict";
import {
  MASCOTS,
  MAX_IDLE_PLAYING,
  mascotVideoFormat,
  pickIdleMascot,
} from "./mascots";

const CHROME_MAC =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";
const SAFARI_MAC =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15";
const FIREFOX =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:131.0) Gecko/20100101 Firefox/131.0";

test("all 20 avatar mascots are listed in picker order", () => {
  assert.deepEqual(
    MASCOTS.map((mascot) => mascot.id),
    Array.from({ length: 20 }, (_, index) => index + 1),
  );
  for (const mascot of MASCOTS) assert.ok(mascot.clips.length > 0);
});

test("clip URLs are encoded and share a basename across formats", () => {
  const [clip] = MASCOTS[0].clips;
  assert.equal(
    clip.webm,
    "https://storage.tatugaschool.com/AVATAR/animation/mascot_1/Does%20a%20happy%20dance.webm",
  );
  assert.equal(clip.hevc, clip.webm.replace(/\.webm$/, ".mov"));
});

test("Chromium and Firefox get WebM even when HEVC is playable", () => {
  assert.equal(mascotVideoFormat(CHROME_MAC, true), "webm");
  assert.equal(mascotVideoFormat(FIREFOX, false), "webm");
});

test("Safari gets HEVC, or the still picture without it", () => {
  assert.equal(mascotVideoFormat(SAFARI_MAC, true), "hevc");
  assert.equal(mascotVideoFormat(SAFARI_MAC, false), null);
});

test("idle picks only free mascots and stops at the idle cap", () => {
  assert.equal(pickIdleMascot([1, 2, 3], [1], () => 0), 2);
  assert.equal(pickIdleMascot([1, 2, 3], [1], () => 0.99), 3);
  assert.equal(pickIdleMascot([1], [1]), null);
  const full = Array.from({ length: MAX_IDLE_PLAYING }, (_, i) => i + 10);
  assert.equal(pickIdleMascot([1, 2, 3], full), null);
});
