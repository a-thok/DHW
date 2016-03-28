const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    usercenter: [path.join(__dirname, './src/usercenter/css/usercenter.css')],
    'uc.home': [path.join(__dirname, './src/usercenter/js/home/home.js')],
    'uc.rczp': [path.join(__dirname, './src/usercenter/js/rczp/rczp.js')],
    'uc.cysj': [path.join(__dirname, './src/usercenter/js/cysj/cysj.js')],
    'uc.srdz': [path.join(__dirname, './src/usercenter/js/srdz/srdz.js')],
    'uc.zb': [path.join(__dirname, './src/usercenter/js//zb/zb.js')],
    'uc.zc': [path.join(__dirname, './src/usercenter/js/zc/zc.js')],
    'uc.zckj': [path.join(__dirname, './src/usercenter/js/zckj/zckj.js')],
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css']
  },
  externals: [
    {
      jquery: 'window.jQuery',
      angular: 'window.angular',
      'web-uploader': 'window.WebUploader'
    }
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url?limit=10000&name=font/[name].[ext]?[hash:7]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['url?limit=10000&name=img/uc/[name].[ext]?[hash:7]', 'image-webpack?{progressive:true, optimizationLevel: 7, pngquant: {quality: "65-90", speed: 4}}']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  postcss() {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-opacity'),
      require('postcss-cssnext')({
        sourcemap: true
      })
    ];
  }
};
