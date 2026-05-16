import { test } from "node:test";
import assert from "node:assert/strict";
import { detectLanguage } from "./detectLanguage";

test("cookie wins over everything", () => {
  assert.equal(
    detectLanguage({ cookie: "en", acceptLanguage: "th-TH", country: "TH" }),
    "en",
  );
  assert.equal(
    detectLanguage({ cookie: "th", acceptLanguage: "en-US", country: "US" }),
    "th",
  );
});

test("invalid cookie is ignored", () => {
  assert.equal(
    detectLanguage({ cookie: "fr", acceptLanguage: "th-TH", country: "TH" }),
    "th",
  );
});

test("Accept-Language th-* returns th", () => {
  assert.equal(
    detectLanguage({ cookie: null, acceptLanguage: "th-TH,en;q=0.9", country: "US" }),
    "th",
  );
  assert.equal(
    detectLanguage({ cookie: null, acceptLanguage: "th", country: "US" }),
    "th",
  );
});

test("x-country TH returns th when Accept-Language not Thai", () => {
  assert.equal(
    detectLanguage({ cookie: null, acceptLanguage: "en-US", country: "TH" }),
    "th",
  );
});

test("falls back to en when nothing matches", () => {
  assert.equal(
    detectLanguage({ cookie: null, acceptLanguage: "en-US,en;q=0.9", country: "US" }),
    "en",
  );
  assert.equal(
    detectLanguage({ cookie: null, acceptLanguage: null, country: null }),
    "en",
  );
});
