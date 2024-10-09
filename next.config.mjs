// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/upload/:slug",
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:slug`,
      },
    ];
  },
};

module.exports = withVanillaExtract(nextConfig);
