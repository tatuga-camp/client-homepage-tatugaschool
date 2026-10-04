/**
 * The visitor's language lives in ONE place: the `lang` cookie. The server
 * reads it to render the page (pages/_app.tsx, pages/_document.tsx) and
 * echoes it back on every response; the browser reads and writes the same
 * cookie, so a reload always renders the language the visitor picked.
 *
 * Before 2026-10, the language switcher saved the choice only in
 * localStorage, which the server never sees — so a reload rendered the
 * server's guess instead. A choice still sitting in localStorage is treated
 * as the visitor's explicit pick and moved into the cookie once.
 */
import type { Lang } from "./seo/detectLanguage";

const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // one year, same as the server

function asLang(value: string | null | undefined): Lang | null {
  return value === "en" || value === "th" ? value : null;
}

/** Reads `lang` from a cookie string (`document.cookie` or a Cookie header). */
export function parseLangCookie(cookie: string): Lang | null {
  const match = cookie.match(/(?:^|;\s*)lang=([^;]+)/);
  return match ? asLang(decodeURIComponent(match[1])) : null;
}

/** The `lang` cookie, with the same attributes the server sets. */
export function serializeLangCookie(lang: Lang): string {
  return `lang=${lang}; Path=/; Max-Age=${LANG_COOKIE_MAX_AGE}; SameSite=Lax`;
}

/**
 * The language the browser should show: an explicit choice left in
 * localStorage by the old switcher, then the `lang` cookie, then the
 * browser's own language.
 */
export function resolveClientLanguage(input: {
  cookie: string;
  legacyStored: string | null;
  navigatorLanguage: string;
}): { language: Lang; fromLegacy: boolean } {
  const legacy = asLang(input.legacyStored);
  if (legacy) return { language: legacy, fromLegacy: true };

  const fromCookie = parseLangCookie(input.cookie);
  if (fromCookie) return { language: fromCookie, fromLegacy: false };

  const browser = input.navigatorLanguage.toLowerCase();
  return { language: browser.startsWith("th") ? "th" : "en", fromLegacy: false };
}
