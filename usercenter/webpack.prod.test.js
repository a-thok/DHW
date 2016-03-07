var config = require('./webpack.prod.js')

config.output.publicPath = 'http://192.168.2.10:82/static/';

module.exports = config
