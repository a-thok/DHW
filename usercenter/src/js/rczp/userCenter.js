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
import ZplbPublishedCtrl from './controllers/ZplbControllers/ZplbPublishedCtrl.js';
import ZplbOfflineCtrl from './controllers/ZplbControllers/ZplbOfflineCtrl.js';
import JllbCtrl from './controllers/JllbCtrl.js';   //简历列表控制器 庄
import ZwscCtrl from './controllers/ZwscControllers/ZwscCtrl.js'
import DdsxCtrl from './controllers/JllbControllers/DdsxCtrl.js';
import YckCtrl from './controllers/JllbControllers/YckCtrl.js';  
import DgtjlCtrl from './controllers/JllbControllers/DgtjlCtrl.js';  
import YtgmsCtrl from './controllers/JllbControllers/YtgmsCtrl.js';  
import BhsCtrl from './controllers/JllbControllers/BhsCtrl.js';
import EditCtrl from './controllers/EditControllers/EditCtrl.js'  //引入发布简历详情编辑控制器 庄  
import YtjlCtrl from './controllers/YtjlCtrl.js'

import TdpreviewdetailCtrl from './controllers/TdpreviewdetailCtrl.js'
// import JlbjCtrl from './controllers/JlbjCtrl.js'; // 卢铭怀 引入控制器函数

import JlbjCtrl from './controllers/JlbjCtrl.js'; // 卢铭怀 引入控制器函数
import JlylCtrl from './controllers/JlylCtrl.js'    // 简历预览控制器 何




let app = angular.module('userCenter', ['ngAnimate', 'ui.router', 'formComponents', 'modalComponents', 'listComponents', 'ui.bootstrap.pagination']);
app
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/jlbj');
    
    $urlRouterProvider.when('/zplb', '/zplb/published')
    $urlRouterProvider.when('/jllb', '/jllb/filter')
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
        templateUrl : '/partials/rczp/partial-jllb-filter.html',
        controller : 'DdsxCtrl as ddsxVm'
      })
      .state('jllb.view',{
        url : '/view',
        templateUrl : '/partials/rczp/partial-jllb-view.html',
        controller : 'YckCtrl as yckVm'
      })
      .state('jllb.communicate',{
        url : '/communicate',
        templateUrl : '/partials/rczp/partial-jllb-communicate.html',
        controller : 'DgtjlCtrl as dgtjlVm'
      })
      .state('jllb.interview',{
        url : '/interview',
        templateUrl : '/partials/rczp/partial-jllb-interview.html',
        controller : 'YtgmsCtrl as ytgmsVm'
      })
      .state('jllb.notsuitable',{
        url : '/notsuitable',
        templateUrl : '/partials/rczp/partial-jllb-notsuitable.html',
        controller : 'BhsCtrl as bhsVm'
      })
      .state('jlbj', {
        url: '/jlbj',
        templateUrl: '/partials/rczp/partial-jlbj.html',
        controller: 'JlbjCtrl as jlbjVm' // 卢铭怀 添加路由子控制器
      })
      .state('jlyl', {
        url: '/jlyl',
        templateUrl: '/partials/rczp/partial-jlyl.html',
        controller : 'JlylCtrl as JlylVm'
      })
      .state('ytjl', {
        url: '/ytjl',
        templateUrl: '/partials/rczp/partial-ytjl.html',
        controller:  'YtjlCtrl as ytjlVm'                  //已投简历的控制器
      })
      .state('zwsc', {
        url: '/zwsc',
        templateUrl: '/partials/rczp/partial-zwsc.html',
        controller : 'ZwscCtrl as ZwscVm'
      })
      .state('edit',{                                  //测试路由
        url : '/edit/:id',
        templateUrl : '/partials/rczp/partial-edit.html',
        controller : 'EditCtrl as editVm'
      })
      .state('td-preview-detail',{
        url : '/td-preview-detail',
        templateUrl : '/partials/rczp/partial-preview-detail.html',
        controller : 'TdpreviewdetailCtrl as tdpreviewdetailVm'
      })                        
  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .controller('MainCtrl', ['$location', MainCtrl])
  .controller('ZplbCtrl', [ZplbCtrl])
  .controller('ZplbPublishedCtrl', [ZplbPublishedCtrl])
  .controller('ZplbOfflineCtrl', [ZplbOfflineCtrl])
  .controller('FbzpCtrl', ['$http', FbzpCtrl])
  .controller('JllbCtrl',[JllbCtrl])     //定义简历列表控制器 庄
  .controller('ZwscCtrl',[ZwscCtrl])
  .controller('DdsxCtrl',[DdsxCtrl])
  .controller('YckCtrl',[YckCtrl])
  .controller('DgtjlCtrl',[DgtjlCtrl])
  .controller('YtgmsCtrl',[YtgmsCtrl])
  .controller('BhsCtrl',[BhsCtrl])
  .controller('EditCtrl',['$http','$stateParams',EditCtrl])  //招聘列表编辑详情的控制器 庄
  .controller('YtjlCtrl',['$http',YtjlCtrl])
  .controller('TdpreviewdetailCtrl',['$http','$scope','$location',TdpreviewdetailCtrl])
// .controller('JlbjCtrl', ['$scope', '$http', '$location', JlbjCtrl]); // 卢铭怀 定义控制器

  .controller('JlbjCtrl', ['$scope', '$http', '$location', JlbjCtrl]) // 卢铭怀 定义控制器
  .controller('JlylCtrl', ['$scope', '$http', '$location', JlylCtrl]);  

export default app;