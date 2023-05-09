/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en-US", "de"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
