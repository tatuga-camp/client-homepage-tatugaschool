import { GetServerSideProps } from "next";
import { getAllAnnouncements } from "../services/announcement";

const SITE = "https://tatugaschool.com";
const STATIC_PATHS = [
  "",
  "/news",
  "/price",
  "/support/contact-us",
  "/support/privacy-policy",
];

type UrlEntry = { loc: string; lastmod: string; priority: string };

function generateSiteMap(entries: UrlEntry[]) {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function SiteMap() {}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const today = new Date().toISOString().slice(0, 10);

  const staticEntries: UrlEntry[] = STATIC_PATHS.map((p) => ({
    loc: `${SITE}${p}`,
    lastmod: today,
    priority: p === "" ? "1.0" : "0.7",
  }));

  let newsEntries: UrlEntry[] = [];
  try {
    const announcements = await getAllAnnouncements();
    newsEntries = announcements.map((a) => ({
      loc: `${SITE}/news/${a.slug}`,
      lastmod: a.publishedAt.slice(0, 10),
      priority: "0.6",
    }));
  } catch {
    newsEntries = [];
  }

  context.res.setHeader("Content-Type", "text/xml");
  context.res.write(generateSiteMap([...staticEntries, ...newsEntries]));
  context.res.end();
  return { props: {} };
};

export default SiteMap;
