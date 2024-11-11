import path from "path";

export default {
  mode: "development",
  entry: {
    sidebar: "./src/js/sidebar.js",
    setTimeout: "./src/js/setTimeout.js",
    formatPhone: "./src/js/formatPhone.js",
    countTextArea: "./src/js/countTextArea.js",
    sweetAlert: "./src/js/sweetAlert.js",
    spinner: "./src/js/spinner.js",
    inputs: "./src/js/inputs.js",
    swiper: "./src/js/swiper.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("public/js"),
  },
};
