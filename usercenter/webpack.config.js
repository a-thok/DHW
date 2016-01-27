var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    ucRczp: './src/js/rczpEntry.js'
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  externals: [
    {
      'jquery': 'window.jQuery',
      'angular': 'window.angular'
    }
  ],
  module: {
    //加载器配置
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!cssnext')
      },
      {
        test: /\.js$/,
        loader: 'babel?presets=es2015',
        exclude: '/node_modules/'
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url?limit=10000&name=font/[name].[ext]?[hash]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file?name=img/[name].[ext]?[hash]'
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('js/common.js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/usercenter.css')
  ],
  cssnext: {
    compress: true,
    sourcemap: true,
    features: {
      // rem: false,
      // pseudoElements: false,
      // colorRgba: false
    }
  }
};