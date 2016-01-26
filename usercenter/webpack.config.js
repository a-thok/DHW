var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    usercenter: './src/js/entry.js'
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
      // {
      //   test: /\.(woff|eot|ttf)$/i,
      //   loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
      // },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file?name=img/[name].[ext]?[hash]'
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('js/common.js'),
    new ExtractTextPlugin('css/[name].css')
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