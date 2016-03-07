var webpack = require('webpack')
var config = require('./webpack.base.js')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

config.output.publicPath = '//cdn.dreamhiway.com/static/'

config.module.loaders[0].loader = ExtractTextPlugin.extract('style', 'css!postcss')

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin('js/common.js'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new ExtractTextPlugin('css/usercenter.css'),
  new webpack.NoErrorsPlugin()
])

module.exports = config
