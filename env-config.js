const debug = process.env.NODE_ENV !== "production";
const name = "jhlee0409.github.io";

module.exports = {
  "process.env.BACKEND_URL": !debug ? `/${name}` : "",
};
