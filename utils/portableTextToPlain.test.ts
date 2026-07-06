import { test } from "node:test";
import assert from "node:assert/strict";
import { portableTextToPlain } from "./portableTextToPlain";

const block = (text: string) => ({
  _type: "block",
  children: [{ _type: "span", text }],
});

test("returns empty string for empty, null, or undefined input", () => {
  assert.equal(portableTextToPlain([]), "");
  assert.equal(portableTextToPlain(null), "");
  assert.equal(portableTextToPlain(undefined), "");
});

test("flattens block children into one plain-text string", () => {
  assert.equal(
    portableTextToPlain([block("Hello"), block("world")] as never),
    "Hello world",
  );
});

test("collapses runs of whitespace and newlines", () => {
  assert.equal(
    portableTextToPlain([block("Hello   \n  world")] as never),
    "Hello world",
  );
});

test("truncates to maxLength and appends an ellipsis", () => {
  const long = "a".repeat(200);
  const result = portableTextToPlain([block(long)] as never, 20);
  assert.ok(result.length <= 20, "truncated result must not exceed maxLength");
  assert.ok(result.endsWith("…"));
});

test("truncation does not leave a space before the ellipsis", () => {
  // With maxLength 10, the slice boundary lands on a space.
  const result = portableTextToPlain([block("abcdefgh ij")] as never, 10);
  assert.ok(!result.includes(" …"), "no space should precede the ellipsis");
  assert.ok(result.endsWith("…"));
  assert.ok(result.length <= 10);
});

test("joins multiple spans within one block without a separator", () => {
  const multiSpanBlock = {
    _type: "block",
    children: [
      { _type: "span", text: "Hel" },
      { _type: "span", text: "lo" },
    ],
  };
  assert.equal(portableTextToPlain([multiSpanBlock] as never), "Hello");
});

test("does not truncate text shorter than maxLength", () => {
  assert.equal(portableTextToPlain([block("short")] as never, 20), "short");
});

test("ignores non-block content such as images", () => {
  assert.equal(
    portableTextToPlain([{ _type: "image" }, block("text")] as never),
    "text",
  );
});
