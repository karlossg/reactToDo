const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

var env = process.env.NODE_ENV || 'development';

var plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
  })
];

console.log('NODE_ENV:', env);

if (env === 'production') {
  plugins.push(
    new UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [plugins]
};
