/* global module process */

let devToolType = process.env.NODE_ENV === 'dev' ? 'source-map' : '';
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'main.bundle.js',
    path: __dirname + '/dist/js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv()
  ],
  devtool: devToolType
};
