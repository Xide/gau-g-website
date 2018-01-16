var webpack = require('webpack');
var path = require('path');
var DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');
var PROD = process.env.NODE_ENV === 'production';


var config = {
  devServer: {
    port: 3000,
    compress: true,
    contentBase: BUILD_DIR,
  },

  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: (PROD && 'bundle.min.js') || 'bundle.js'
  },
  plugins: [
    new DynamicCdnWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/
      }
    ]
  }
};

module.exports = config;
