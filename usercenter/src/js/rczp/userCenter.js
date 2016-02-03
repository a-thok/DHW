import $ from 'jquery';
import angular from 'angular';

// 依赖模块
import formComponents from '../directives/formComponents.js';
import pagination from '../directives/pagination.js';
import listComponents  from '../directives/listComponents.js'
import popComponents from '../directives/popComponents.js'   //表单信息提示弹框 庄

// 控制器
import MainCtrl from './controllers/MainCtrl.js';
import ZplbCtrl from './controllers/ZplbCtrl.js';
import FbzpCtrl from './controllers/FbzpCtrl.js';
import ZplbPublishedCtrl from './controllers/ZplbPublishedCtrl.js'
import ZplbOfflineCtrl from './controllers/ZplbOfflineCtrl.js'
// import YtjlCtrl from './controllers/YtjlCtrl.js'
// import JlbjCtrl from './controllers/JlbjCtrl.js'; // 卢铭怀 引入控制器函数

let app = angular.module('userCenter', ['ui.router', 'formComponents', 'listComponents','ui.bootstrap.pagination']);
app
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('zplb', {
        url: '/zplb',
        templateUrl: '/partials/rczp/partial-zplb.html',
        controller: 'ZplbCtrl as zplbVm'
      })
      .state('zplb.published', {
        url: '/published',
        templateUrl: '/partials/rczp/partial-zplb-published.html',
        controller: 'ZplbPublishedCtrl as ZplbPublishedVm'
      })
      .state('zplb.offline', {
        url: '/offline',
        templateUrl: '/partials/rczp/partial-zplb-offline.html',
        controller: 'ZplbOfflineCtrl as ZplbOfflineVm'
      })
      .state('fbzp', {
        url: '/fbzp',
        templateUrl: '/partials/rczp/partial-fbzp.html',
        controller: 'FbzpCtrl as fbzpVm'
      })
      .state('jllb', {
        url: '/jllb',
        templateUrl: '/partials/rczp/partial-jllb.html'
      })
      .state('jlbj', {
        url: '/jlbj',
        templateUrl: '/partials/rczp/partial-jlbj.html',
        // controller: 'JlbjCtrl as jlbjVm' // 卢铭怀 添加路由子控制器
      })
      .state('jlyl', {
        url: '/jlyl',
        templateUrl: '/partials/rczp/partial-jlyl.html',
      })
      .state('ytjl', {
        url: '/ytjl',
        templateUrl: '/partials/rczp/partial-ytjl.html',
        // controller:  'YtjlCtrl as ytjlVm'                  //已投简历的控制器
      })
      .state('zwsc', {
        url: '/zwsc',
        templateUrl: '/partials/rczp/partial-zwsc.html',
      });
  }])
  .controller('MainCtrl', [MainCtrl])
  .controller('ZplbCtrl', [ZplbCtrl])
  .controller('FbzpCtrl', ['$http', FbzpCtrl])
  // .controller('YtjlCtrl',['$http',YtjlCtrl])
  // .controller('JlbjCtrl', ['$scope', '$http', '$location', JlbjCtrl]); // 卢铭怀 定义控制器

export default app;