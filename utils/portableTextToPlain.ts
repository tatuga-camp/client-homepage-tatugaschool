import type { PortableTextBlock } from "@portabletext/types";

/**
 * Flattens Portable Text blocks into a single plain-text string and truncates
 * it to `maxLength` characters. Used to derive SEO meta descriptions and card
 * excerpts from rich-text announcement bodies.
 */
export function portableTextToPlain(
  blocks: PortableTextBlock[] | null | undefined,
  maxLength = 155,
): string {
  if (!blocks || blocks.length === 0) return "";

  const text = blocks
    .filter(
      (block) => block._type === "block" && Array.isArray(block.children),
    )
    .map((block) =>
      (block.children as { _type: string; text?: string }[])
        .filter(
          (child) => child._type === "span" && typeof child.text === "string",
        )
        .map((child) => child.text)
        .join(""),
    )
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 1).trimEnd() + "…";
}
