var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require("./webpack.dev.js");

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  historyApiFallback: false,
  stats: {
    chunks: false,
    colors: true
  },
  // noInfo: true,
  publicPath: config.output.publicPath,
  proxy: {
    // 转发api数据
    "*": {
      target: "http://192.168.2.17:8085",
      secure: false,
      bypass: function (req, res, proxyOptions) {
        if (req.headers.accept.indexOf('html') !== -1) {
          if (req.path !== '/login') {
            return req.path;
          }
        }
      }
    }
  },
});
server.listen(8080);
