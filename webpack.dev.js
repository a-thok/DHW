const webpack = require('webpack');
const config = require('./webpack.base.js');

// const polyfill = 'eventsource-polyfill';
const hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true';
Object.keys(config.entry).forEach((name, i) => {
  // const extras = i === 0 ? [polyfill, hotClient] : [hotClient];
  const extras = [hotClient];
  config.entry[name] = extras.concat(config.entry[name]);
});

config.output.publicPath = '/';

config.devtool = 'eval-source-map';

config.plugins = (config.plugins || []).concat([
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
