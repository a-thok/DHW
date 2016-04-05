const webpack = require('webpack');
const config = require('./webpack.base.js');

config.output.publicPath = '//cdn.dreamhiway.com/static/';

config.devtool = 'source-map';

config.plugins = (config.plugins || []).concat([
  // new webpack.optimize.CommonsChunkPlugin('js/common.js'),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
]);

module.exports = config;
