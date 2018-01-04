const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }, { test: /\.css$/, use: ['style-loader', 'css-loader'] }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  ]
};
