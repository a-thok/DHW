const path = require('path');
const webpack = require('webpack');
const postcssImporter = require('postcss-import');
const postcssOpacity = require('postcss-opacity');
const postcssCssnext = require('postcss-cssnext');

const PRODUCTION = process.env.NODE_ENV === 'production';  // 判断打包到内网还是外网
console.log(process.env.NODE_ENV);
const dhw_production = {
  imgurl: 'http://upload.dreamhiway.com/img/',
  imguploadurl: 'http://upload.dreamhiway.com/uploadimg',
  imgcuturl: 'http://upload.dreamhiway.com/imagecut.ashx',
  mainurl: '//www.dreamhiway.com/',
  staticurl: 'http://cdn.dreamhiway.com',
  urlmain: '//www.dreamhiway.com/',
  urlcdn: '/n.dreamhiway.com/',
  urlzc: '//zc.dreamhiway.com/',
  urlkj: '//kj.dreamhiway.com/',
  urlhr: '//hr.dreamhiway.com/',
  urlzckj: '//zckj.dreamhiway.com/',
  urlzb: '//zb.dreamhiway.com/',
  urldiy: '//diy.dreamhiway.com/',
  urlsrdz: '//srdz.dreamhiway.com/',
  urlcqbh: '/bh.dreamhiway.com/',
  urlzxsj: '//zxsj.dreamhiway.com/',
  urlgsss: '//gsss.dreamhiway.com/',
  urlfj: 'http://upload.dreamhiway.com/file/',
  urlimg: 'http://upload.dreamhiway.com/img/',
  urlfjupload: 'http://upload.dreamhiway.com/uploadfj'
};
const dhw_test = {
  imgurl: 'http://192.168.2.10:82/img/',
  imguploadurl: 'http://192.168.2.10:82/uploadimg',
  imgcuturl: 'http://192.168.2.10:82/imagecut.ashx',
  mainurl: '//localhost:8085/',
  staticurl: 'http://192.168.2.10:81',
  urlmain: '//localhost:8085/',
  urlcdn: '//192.168.2.10:81/',
  urlzc: '//localhost:8088/',
  urlkj: '//localhost:8087/',
  urlhr: '//localhost:8086/',
  urlzckj: '//localhost:8091/',
  urlzb: '//localhost:8090/',
  urldiy: '//localhost:8092/',
  urlsrdz: '//localhost:8093/',
  urlcqbh: '//localhost:8094/',
  urlzxsj: '//localhost:8095/',
  urlgsss: '//localhost:8096/',
  urlfj: 'http://192.168.2.10:82/file/',
  urlimg: 'http://192.168.2.10:82/img/',
  urlfjupload: 'http://192.168.2.10:82/uploadfj'
};

module.exports = {
  entry: {
    angular: ['angular/angular.js', 'angular-animate', 'angular-ui-router'],
    usercenter: [path.join(__dirname, './src/usercenter/css/usercenter.css')],
    'uc.account': [path.join(__dirname, './src/usercenter/js/account/account.js')],
    'uc.rczp': [path.join(__dirname, './src/usercenter/js/rczp/rczp.js')],
    'uc.cysj': [path.join(__dirname, './src/usercenter/js/cysj/cysj.js')],
    'uc.srdz': [path.join(__dirname, './src/usercenter/js/srdz/srdz.js')],
    'uc.zb': [path.join(__dirname, './src/usercenter/js//zb/zb.js')],
    'uc.zc': [path.join(__dirname, './src/usercenter/js/zc/zc.js')],
    'uc.zckj': [path.join(__dirname, './src/usercenter/js/zckj/zckj.js')],
    'uc.sbcs': [path.join(__dirname, './src/usercenter/js/sbcs/sbcs.js')],
    'uc.myj': [path.join(__dirname, './src/usercenter/js/myj/myj.js')],
    home: [path.join(__dirname, './src/usercenter/js/home/home.js')], // 个人中心首页
    order: [path.join(__dirname, './src/usercenter/js/order/order.js')],  // 订单填写地址页面,不属于个人中心模块
    myj: [path.join(__dirname, './src/myj/js/main.js')]
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
      'web-uploader': 'window.WebUploader',
      'b-map': 'window.BMap'
    }
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url?sourceMap',
        query: {
          limit: 8192,
          name: 'font/[name].[ext]?[hash:7]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?sourceMap',
        query: {
          limit: 10000,
          name: 'img/uc/[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      dhw: PRODUCTION ? JSON.stringify(dhw_production) : JSON.stringify(dhw_test)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/common.js',
      chunks: ['home', 'uc.account', 'uc.rczp', 'uc.cysj', 'uc.srdz', 'uc.zb', 'uc.zc', 'uc.zckj', 'uc.sbcs', 'uc.myj'],
      minChunks: 3
    })
  ],
  postcss(webpack) {
    return [
      postcssImporter({
        addDependencyTo: webpack
      }),
      postcssOpacity,
      postcssCssnext()
    ];
  }
};
