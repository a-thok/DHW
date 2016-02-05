import $ from 'jquery';
import angular from 'angular';

// 依赖模块
import formComponents from '../directives/formComponents.js';
import pagination from '../directives/pagination.js';
import listComponents  from '../directives/listComponents.js'
import modalComponents from '../directives/modalComponents.js'   //表单信息提示弹框 庄

// 指令
import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';

// 控制器
import MainCtrl from './controllers/MainCtrl.js';
import ZplbCtrl from './controllers/ZplbCtrl.js';
import FbzpCtrl from './controllers/FbzpCtrl.js';
import ZplbPublishedCtrl from './controllers/ZplbPublishedCtrl.js';
import ZplbOfflineCtrl from './controllers/ZplbOfflineCtrl.js';
import JllbCtrl from './controllers/JllbCtrl.js';   //简历列表控制器 庄
// import YtjlCtrl from './controllers/YtjlCtrl.js'
// import JlbjCtrl from './controllers/JlbjCtrl.js'; // 卢铭怀 引入控制器函数


let app = angular.module('userCenter', ['ngAnimate', 'ui.router', 'formComponents', 'modalComponents', 'listComponents', 'ui.bootstrap.pagination']);
app
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    
    $urlRouterProvider.when('/zplb', '/zplb/published');
    $urlRouterProvider.when('/jllb', '/jllb/filter');
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
        templateUrl: '/partials/rczp/partial-jllb.html',
        controller : 'JllbCtrl as jllbVm'
      })
      .state('jllb.filter',{
        url : '/filter',
        templateUrl : '/partials/rczp/partial-jllb-filter.html'
      })
      .state('jllb.view',{
        url : '/view',
        templateUrl : '/partials/rczp/partial-jllb-view.html'
      })
      .state('jllb.communicate',{
        url : '/communicate',
        templateUrl : '/partials/rczp/partial-jllb-communicate.html'
      })
      .state('jllb.interview',{
        url : '/interview',
        templateUrl : '/partials/rczp/partial-jllb-interview.html'
      })
      .state('jllb.notsuitable',{
        url : '/notsuitable',
        templateUrl : '/partials/rczp/partial-jllb-notsuitable.html'
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
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .controller('MainCtrl', [MainCtrl])
  .controller('ZplbCtrl', [ZplbCtrl])
  .controller('ZplbPublishedCtrl', [ZplbPublishedCtrl])
  .controller('ZplbOfflineCtrl', [ZplbOfflineCtrl])
  .controller('FbzpCtrl', ['$http', FbzpCtrl])
  .controller('JllbCtrl',[JllbCtrl])     //定义简历列表控制器 庄
// .controller('YtjlCtrl',['$http',YtjlCtrl])
// .controller('JlbjCtrl', ['$scope', '$http', '$location', JlbjCtrl]); // 卢铭怀 定义控制器

export default app;