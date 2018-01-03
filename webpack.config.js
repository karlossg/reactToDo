const path = require('path');

module.exports = {
  entry: './src/containers/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }, { test: /\.css$/, use: ['style-loader', 'css-loader'] }]
  }
};
