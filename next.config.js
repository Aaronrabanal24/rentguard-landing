/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: false,
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      { source: "/market", destination: "/why-fairvia", permanent: true },
      { source: "/positioning", destination: "/why-fairvia", permanent: true },
      { source: "/momentum", destination: "/why-fairvia", permanent: true },
      { source: "/workflows", destination: "/features", permanent: true },
      { source: "/benefits", destination: "/features", permanent: true },
      { source: "/legal", destination: "/features", permanent: true },
      { source: "/conversion", destination: "/get-started", permanent: true },
    ];
  },
};

module.exports = nextConfig;
