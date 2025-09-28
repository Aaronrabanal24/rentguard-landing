/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false,
  },
  trailingSlash: false,
  images: {
    unoptimized: false,
    domains: [],
  },
};

module.exports = nextConfig;
