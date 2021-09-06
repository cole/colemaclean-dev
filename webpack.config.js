/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
  target: 'webworker',
  context: path.resolve(__dirname),
  output: {
    filename: 'worker.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
      {
        test: /\.(njk|nunjucks)$/,
        loader: 'simple-nunjucks-loader',
        options: {
          searchPaths: [path.join(__dirname, 'src', 'templates')],
          assetsPaths: [path.join(__dirname, 'assets')],
        },
      },
      {
        test: /\.css$/i,
        type: 'asset/source',
      },
      {
        test: /\.svg$/i,
        type: 'asset/inline',
        generator: {
          dataUrl: (content) => svgToMiniDataURI(content.toString()),
        },
      },
      {
        test: /\.(png|jpe?g|gif|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
