const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
module.exports = withVanillaExtract(
  withMDX({
    // Append the default value with md extensions
    reactStrictMode: true,
    experimental: { esmExternals: true },
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    webpack(config) {
      config.resolve.fallback = {
        fs: false,
      };
      return config;
    },
  })
);
