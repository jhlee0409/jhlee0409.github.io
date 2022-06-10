const { VanillaExtractPlugin } = require("@vanilla-extract/webpack-plugin");

module.exports = {
  target: "node",
  plugins: [new VanillaExtractPlugin()],
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
    },
  },
};
