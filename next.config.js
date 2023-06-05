/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  experimental: {
    appDir: true,
    assetPrefix: ".",
  },
};

module.exports = nextConfig;
