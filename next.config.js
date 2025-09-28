const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/dist/esm/icons/{{member}}",
    },
  },
  images: {
    unoptimized: false,
    domains: ["images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
      {
        source: "/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
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

module.exports = withBundleAnalyzer(nextConfig);
