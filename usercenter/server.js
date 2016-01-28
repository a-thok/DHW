var webpack = require('webpack');
var webpackDevMiddleware = require("webpack-dev-middleware");
var WebpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");

config.entry.ucRczp.unshift("webpack-dev-server/client?http://localhost:8080");  // 将执行替换的js内联进去
config.entry.ucRczp.unshift("webpack/hot/dev-server");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  hot: true,
  inline: true,
  historyApiFallback: false,
  stats: {
    colors: true
  },
  noinfo: true,
  proxy: {
    // 转发api数据
    "*": {
      target: "http://192.168.2.145:8085",
      secure: false,
      bypass: function (req, res, proxyOptions) {
        if (req.headers.accept.indexOf('html') !== -1) {
          if (req.path.indexOf('login') === -1) {
            return req.path;
          }
        }
      }
    }
  },
});
server.listen(8080);