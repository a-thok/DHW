import $ from 'jquery';
import angular from 'angular';

// 依赖模块
import formComponents from '../directives/formComponents.js';
import pagination from '../directives/pagination.js'

// 控制器
import MainCtrl from './controllers/MainCtrl.js';
import ZplbCtrl from './controllers/ZplbCtrl.js';
import FbzpCtrl from './controllers/FbzpCtrl.js';
import JlbjCtrl from './controllers/JlbjCtrl.js'; // 卢铭怀 引入控制器函数

let app = angular.module('userCenter', ['ui.router', 'formComponents', 'ui.bootstrap.pagination']);
app
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('zplb', {
        url: '/zplb',
        templateUrl: '/partials/rczp/partial-zplb.html',
        controller: 'ZplbCtrl as zplbVm'
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
        controller: 'JlbjCtrl as jlbjVm' // 卢铭怀 添加路由子控制器
      })
      .state('jlyl', {
        url: '/jlyl',
        templateUrl: '/partials/rczp/partial-jlyl.html',
      })
      .state('ytjl', {
        url: '/ytjl',
        templateUrl: '/partials/rczp/partial-ytjl.html',
      })
      .state('zwsc', {
        url: '/zwsc',
        templateUrl: '/partials/rczp/partial-zwsc.html',
      });
  }])
  .controller('MainCtrl', [MainCtrl])
  .controller('zplb', [ZplbCtrl])
  .controller('FbzpCtrl', ['$http', FbzpCtrl])
  .controller('JlbjCtrl', ['$scope', '$http', '$location', JlbjCtrl]); // 卢铭怀 定义控制器

export default app;