const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
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
    path: path.resolve(__dirname, "dist"),
    filename: "app.[fullhash].js",
  },
  plugins: [new HtmlWebpackPlugin()],
};