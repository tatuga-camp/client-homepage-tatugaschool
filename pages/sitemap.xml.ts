import { GetServerSideProps } from "next";

const SITE = "https://tatugaschool.com";
const PATHS = ["", "/price", "/support/contact-us", "/support/privacy-policy"];

function generateSiteMap(lastmod: string) {
  const urls = PATHS.map(
    (p) => `  <url>
    <loc>${SITE}${p}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${p === "" ? "1.0" : "0.7"}</priority>
  </url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

function SiteMap() {}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  context.res.setHeader("Content-Type", "text/xml");
  context.res.write(generateSiteMap(lastmod));
  context.res.end();
  return { props: {} };
};

export default SiteMap;
