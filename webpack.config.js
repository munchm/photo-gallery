const path = require('path');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

const SRC_DIR = path.join(__dirname, '/client/src');
const PUBLIC_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
  // plugins: [
  //   new GoogleFontsPlugin({
  //     fonts: [
  //       { family: 'Roboto', variants: ['400', '700italic'] },
  //     ],
  //   }),
  // ],
};