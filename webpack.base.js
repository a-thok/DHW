const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    usercenter: [path.join(__dirname, './src/usercenter/css/usercenter.css')],
    'uc.account': [path.join(__dirname, './src/usercenter/js/account/account.js')],
    'uc.rczp': [path.join(__dirname, './src/usercenter/js/rczp/rczp.js')],
    'uc.cysj': [path.join(__dirname, './src/usercenter/js/cysj/cysj.js')],
    'uc.srdz': [path.join(__dirname, './src/usercenter/js/srdz/srdz.js')],
    'uc.zb': [path.join(__dirname, './src/usercenter/js//zb/zb.js')],
    'uc.zc': [path.join(__dirname, './src/usercenter/js/zc/zc.js')],
    'uc.zckj': [path.join(__dirname, './src/usercenter/js/zckj/zckj.js')],
    'uc.sbcs':[path.join(__dirname, './src/usercenter/js/sbcs/sbcs.js')],
    'home':[path.join(__dirname, './src/usercenter/js/home/home.js')], //个人中心首页
    'order':[path.join(__dirname, './src/usercenter/js/order/order.js')],  // 订单填写地址页面,不属于个人中心模块
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
