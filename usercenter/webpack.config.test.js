var config = require('./webpack.config.production.js');

config.output.publicPath = 'http://192.168.2.10:82/static/';

module.exports = config