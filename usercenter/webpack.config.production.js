var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    'uc.rczp': [__dirname + '/src/js/rczp.js'],
    'uc.zc' : [__dirname + '/src/js/zc.js']
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'js/[name].js',
    publicPath: '//cdn.dreamhiway.com/static/'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  externals: [
    {
      'jquery': 'window.jQuery',
      'angular': 'window.angular',
      'web-uploader': 'window.WebUploader'
    }
  ],
  module: {
    //加载器配置
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/'
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url?limit=10000&name=font/[name].[ext]?[hash]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=8192&name=img/uc/[name].[ext]?[hash]'
      }
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('js/common.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin('css/usercenter.css')
  ],
  postcss: function(webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-opacity'),
      require('postcss-cssnext')()
    ]
  }
};