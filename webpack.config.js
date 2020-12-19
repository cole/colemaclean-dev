/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  target: 'webworker',
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
    ],
  },
};
