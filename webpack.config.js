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
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: "./build",
  },
  plugins: [new HtmlWebpackPlugin()],
};
