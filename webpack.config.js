/* global module process */

let devToolType = process.env.NODE_ENV === 'dev' ? 'cheap-eval-source-map' : '';

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
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  devtool: devToolType
};
