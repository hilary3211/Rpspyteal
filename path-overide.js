const path = require('path');

module.exports = {
  entry: './src/utils/rpsgame.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
       test: /\.teal/,
       type: 'asset/source',
      }
    ]
  },
};
