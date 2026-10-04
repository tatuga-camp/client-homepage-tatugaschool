import { test } from "node:test";
import assert from "node:assert/strict";
import {
  parseLangCookie,
  resolveClientLanguage,
  serializeLangCookie,
} from "./languagePreference";

test("parseLangCookie reads lang among other cookies", () => {
  assert.equal(parseLangCookie("a=1; lang=th; b=2"), "th");
  assert.equal(parseLangCookie("lang=en"), "en");
});

test("parseLangCookie ignores missing, unsupported and look-alike cookies", () => {
  assert.equal(parseLangCookie(""), null);
  assert.equal(parseLangCookie("lang=fr"), null);
  assert.equal(parseLangCookie("xlang=th"), null);
});

test("serializeLangCookie matches the cookie the server sets", () => {
  assert.equal(
    serializeLangCookie("th"),
    "lang=th; Path=/; Max-Age=31536000; SameSite=Lax",
  );
});

test("a choice saved by the old switcher (localStorage only) wins over the server's cookie", () => {
  // The reported bug: user picked Thai, localStorage says th, the server's
  // cookie still says en, and a reload showed English.
  assert.deepEqual(
    resolveClientLanguage({
      cookie: "lang=en",
      legacyStored: "th",
      navigatorLanguage: "en-US",
    }),
    { language: "th", fromLegacy: true },
  );
});

test("the lang cookie wins over the browser language", () => {
  // The server may pick th from the visitor's country; the client must not
  // flip back to the browser's en-US when the language query refetches.
  assert.deepEqual(
    resolveClientLanguage({
      cookie: "lang=th",
      legacyStored: null,
      navigatorLanguage: "en-US",
    }),
    { language: "th", fromLegacy: false },
  );
});

test("falls back to the browser language when there is no cookie", () => {
  assert.deepEqual(
    resolveClientLanguage({
      cookie: "",
      legacyStored: null,
      navigatorLanguage: "th-TH",
    }),
    { language: "th", fromLegacy: false },
  );
  assert.deepEqual(
    resolveClientLanguage({
      cookie: "",
      legacyStored: "fr",
      navigatorLanguage: "en-GB",
    }),
    { language: "en", fromLegacy: false },
  );
});
