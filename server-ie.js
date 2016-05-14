const webpack = require('webpack');
const config = require('./webpack.dev.js');
const compiler = webpack(config);

const express = require('express');
const path = require('path');
const app = express();
app.use('/', express.static(path.join(__dirname)));
app.set('port', (process.env.PORT || 8080));

const webpackDevMiddleware = require('webpack-dev-middleware');
app.use(webpackDevMiddleware(compiler, {
  stats: {
    colors: true,
    chunks: false
  },
  noInfo: true,
  publicPath: config.output.publicPath
}));

const webpackHotMiddleware = require('webpack-hot-middleware');
app.use(webpackHotMiddleware(compiler));

const proxy = require('proxy-middleware');
const url = require('url');
app.use('/', proxy(url.parse('http://192.168.2.21:8085/')));

app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${app.get('port')}`);
});
