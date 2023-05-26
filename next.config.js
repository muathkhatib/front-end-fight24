/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    assetPrefix: ".",
    images: {
      // domains: ["images.ctfassets.net"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.ctfassets.net",
          port: "",
          pathname: "/**",
        },
      ],
    },
  },
};

module.exports = nextConfig;
