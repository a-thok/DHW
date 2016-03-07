var webpack = require('webpack')
var config = require('./webpack.base.js')

config.output.publicPath = '/'

config.devtool = 'source-map'

config.plugins = (config.plugins || []).concat([
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.NoErrorsPlugin()
])

module.exports = config
