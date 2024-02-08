const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    silent: false,
  });
}

const CONCURRENCY = parseInt(process.env.WEB_CONCURRENCY, 10) || 1;
const WORKER_CONCURRENCY =
  parseInt(process.env.WORKER_CONCURRENCY, 10) || CONCURRENCY;

module.exports = {
  environment: process.env.NODE_ENV,
  root: path.resolve(__dirname, ".."),

  minify:
    process.env.MINIFY != null
      ? process.env.MINIFY === "true"
      : process.env.NODE_ENV === "production",

  production: process.env.NODE_ENV === "production",
  development: process.env.NODE_ENV === "development",
  test: process.env.NODE_ENV === "test",

  webpackDevServer: {
    url: "http://localhost",
    port: 3000,
    hot: true,
    inline: true,
    noInfo: true,
    host: process.env.WEBPACK_DEV_SERVER_HOST || null,
  },
};
