const webpack = require('webpack');
const config = require('./webpack.base.js');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

config.output.publicPath = '//cdn.dreamhiway.com/static/';

config.devtool = 'source-map';

config.module.loaders.unshift({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
});
config.module.loaders[2].loader = 'url';
config.module.loaders[3].loader = 'url';

config.plugins = (config.plugins || []).concat([
  new CleanPlugin('dist'),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('css/[name].css'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]);

module.exports = config;
