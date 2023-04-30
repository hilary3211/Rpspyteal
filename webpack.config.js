const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "production",
  entry: "./src/utils/rpsgame.js",
  module: {
    rules: [
      {
        test: /\.teal$/,
        type: "asset/source",
      },
    ],
  },

   output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.[hash].js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
