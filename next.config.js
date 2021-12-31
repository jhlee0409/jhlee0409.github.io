const debug = process.env.NODE_ENV !== "production";
const name = "jhlee0409.github.io";

const withImages = require("next-images");
module.exports = withImages({
  reactStrictMode: true,
  esModule: true,
  assetPrefix: !debug ? `/${name}/` : "",
});
