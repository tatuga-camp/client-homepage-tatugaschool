export type Lang = "th" | "en";

export type DetectInput = {
  cookie: string | null;
  acceptLanguage: string | null;
  country: string | null;
};

const SUPPORTED: ReadonlySet<Lang> = new Set(["th", "en"]);

export function detectLanguage(input: DetectInput): Lang {
  if (input.cookie && SUPPORTED.has(input.cookie as Lang)) {
    return input.cookie as Lang;
  }
  if (input.acceptLanguage) {
    const primary = input.acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";
    if (primary.startsWith("th")) return "th";
  }
  if (input.country && input.country.toUpperCase() === "TH") {
    return "th";
  }
  return "en";
}
