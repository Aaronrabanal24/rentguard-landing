import type { GetServerSideProps } from "next";

const SITE_URL = "https://fairvia.com";
const routes = [
  { path: "/", priority: "1.0" },
  { path: "/why-fairvia", priority: "0.85" },
  { path: "/features", priority: "0.8" },
  { path: "/pricing", priority: "0.75" },
  { path: "/faq", priority: "0.7" },
  { path: "/contact", priority: "0.6" },
];

const Sitemap = () => null;

const createUrlSet = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => `  <url><loc>${SITE_URL}${route.path}</loc><priority>${route.priority}</priority></url>`)
  .join("\n")}
</urlset>`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = createUrlSet();

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, max-age=86400, immutable");
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
