var webpack = require('webpack')
var config = require('./webpack.base.js')

config.output.publicPath = '/'

config.devtool = 'eval-source-map'

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
])

module.exports = config
