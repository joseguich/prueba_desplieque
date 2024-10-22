import path from "path";

export default {
  mode: "development",
  entry: {
    sidebar: "./src/js/sidebar.js",
    setTimeout: "./src/js/setTimeout.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("public/js"),
  },
};
