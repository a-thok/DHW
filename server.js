const webpack = require('webpack');
const IE8 = process.env.NODE_ENV === 'ie8';
const config = IE8 ? require('./webpack.dev.ie.js') : require('./webpack.dev.js');
const compiler = webpack(config);

const express = require('express');
const app = express();
app.use('/', express.static('./'));
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

if (!IE8) {
  const webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(webpackHotMiddleware(compiler));
}

const proxy = require('proxy-middleware'); 
const url = require('url');
app.use('/', proxy(url.parse('http://192.168.2.21:8085/')));

app.listen(app.get('port'), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Listening at http://localhost:${app.get('port')}`);
});
