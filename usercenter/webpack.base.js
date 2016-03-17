/* global __dirname */
var webpack = require('webpack')

module.exports = {
  entry: {
    // angular: ['angular/angular.js', 'angular-ui-router', 'angular-animate'],
    'uc.rczp': [__dirname + '/src/js/rczp.js'],
    'uc.zc' : [__dirname + '/src/js/zc.js'],
    'uc.srdz':[__dirname + '/src/js/srdz.js'],
    'uc.cysj':[__dirname + '/src/js/cysj.js'],
    'uc.zb':[__dirname + '/src/js/zb.js'],
    'uc.home':[__dirname + '/src/js/home.js'],
  
  },
  output: {
    path: __dirname + '/dist/',
    filename: 'js/[name].js',
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
        loader: 'style!css?sourceMap!postcss'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/'
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        loader: 'url?sourceMap?limit=10000&name=font/[name].[ext]?[hash:7]'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=10000&name=img/uc/[name].[ext]?[hash:7]'
      },
      // {
      //   test: require.resolve('angular'),
      //   loader: 'expose?angular'
      // },
    ]
  },
  plugins: [],
  postcss: function(webpack) {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-opacity'),
      require('postcss-cssnext')({
        sourcemap: true
      })
    ]
  }
}
