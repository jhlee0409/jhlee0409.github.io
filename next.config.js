const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

// const debug = process.env.NODE_ENV !== "production";
// const name = "jhlee0409.github.io";

module.exports = withVanillaExtract({
  reactStrictMode: true,
  // assetPrefix: !debug ? `/${name}/` : "",
  experimental: { esmExternals: true },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    loader: "akamai",
    path: "/",
  },
  webpack(config) {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
});
