import type { GetServerSideProps } from "next";

const robots = `User-agent: *
Allow: /

Sitemap: https://fairvia.com/sitemap.xml
`;

const Robots = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "public, max-age=86400, immutable");
  res.write(robots);
  res.end();

  return { props: {} };
};

export default Robots;
