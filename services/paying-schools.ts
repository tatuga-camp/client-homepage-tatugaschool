/**
 * Reads the paying-schools JSON that the scheduler publishes to the CDN
 * (Cloudflare R2 public bucket) every few hours. Visitors never reach the API
 * or the database: the homepage only reads this static file, and keeps it in
 * memory between requests.
 *
 * Server-only — call it from getServerSideProps / getStaticProps. Import it by
 * its deep path, not through the `services/index.ts` barrel.
 *
 * Env: PAYING_SCHOOLS_URL — full public URL of the JSON file, e.g.
 * https://<R2 public domain>/public/paying-schools.json. When unset (local
 * dev) the hero renders without school badges.
 */
import { memoize, withTimeout } from "../lib/memo";
import {
  parsePayingSchoolsFile,
  pickHeroSchools,
  type HeroSchools,
} from "../utils/payingSchools";

const CACHE_TTL_MS = 10 * 60 * 1000;
const FETCH_TIMEOUT_MS = 2500;
export const HERO_SCHOOL_LIMIT = 20;

export async function getHeroSchools(): Promise<HeroSchools | null> {
  const url = process.env.PAYING_SCHOOLS_URL;
  if (!url) return null;

  try {
    const file = await memoize("paying-schools", CACHE_TTL_MS, async () => {
      const response = await withTimeout(
        fetch(url, { headers: { accept: "application/json" } }),
        FETCH_TIMEOUT_MS,
        "paying-schools fetch",
      );
      if (!response.ok) {
        throw new Error(`paying-schools fetch failed: ${response.status}`);
      }
      const parsed = parsePayingSchoolsFile(await response.json());
      if (!parsed) throw new Error("paying-schools payload is malformed");
      return parsed;
    });
    // Pick per request so the mix of badges varies between visits.
    return pickHeroSchools(file, HERO_SCHOOL_LIMIT);
  } catch (error) {
    console.error("getHeroSchools:", error);
    return null;
  }
}
