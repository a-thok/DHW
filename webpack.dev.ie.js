const webpack = require('webpack');
const config = require('./webpack.base.js');

config.output.publicPath = '/';

config.devtool = 'source-map';

config.module.loaders.unshift({
  test: /\.css$/,
  loader: 'style!css?sourceMap!postcss'
});

config.plugins = (config.plugins || []).concat([
  new webpack.NoErrorsPlugin()
]);

module.exports = config;
