import $ from 'jquery';
import angular from 'angular';

//依赖模块
import pagination from '../directives/pagination.js';
import listComponents  from '../directives/listComponents.js';

// 指令
import sideBar from '../directives/userCenter/sideBar.js';

//控制器
import MainCtrl from './controllers/MainCtrl.js';
//已发布项目查询列表
import HasfbCtrl from './controllers/HasfbCtrl.js';
//关注列表
import GzlistCtrl from './controllers/GzlistCtrl.js';
//支持列表
import TzlistCtrl from './controllers/TzlistCtrl.js';
//个人关注列表
import PgzlistCtrl from './controllers/PgzlistCtrl.js';
//个人支持列表
import PzclistCtrl from './controllers/PzclistCtrl.js';
//
import FbdetailCtrl from './controllers/FbdetailCtrl.js';

import FbCtrl from './controllers/FbCtrl.js';
import BaseCtrl from './controllers/BaseCtrl.js';
import DetailCtrl from './controllers/DetailCtrl.js';
import PayBackCtrl from './controllers/PayBackCtrl.js';
import ProjectCtrl from './controllers/ProjectCtrl.js';
import PreviewCtrl from './controllers/PreviewCtrl.js';




let app = angular.module('userCenter',['ngAnimate','ui.router','listComponents','ui.bootstrap.pagination']);

app
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/fb/basic');
    $stateProvider
           .state('ProjectLaunch',{
             url: '/fb',
             templateUrl:'/partials/zc/partial-fb.html',
             controller: 'FbCtrl as fbVm'
           })
           .state('ProjectLaunch.basic',{
             url: '/basic',
             templateUrl: '/partials/zc/partial-fb-basic.html',
             controller: 'BaseCtrl as baseVm'
           })
           .state('ProjectLaunch.project',{
             url: '/project',
             templateUrl: '/partials/zc/partial-fb-project.html',
             controller: 'ProjectCtrl as projectVm'
           })
           .state('ProjectLaunch.detail',{
             url: '/detail',
             templateUrl: '/partials/zc/partial-fb-detail.html',
             controller: 'DetailCtrl as detailVm'
           })
           .state('ProjectLaunch.payback',{
             url: '/payback',
             templateUrl: '/partials/zc/partial-fb-payback.html',
             controller: 'PayBackCtrl as paybackVm'
           })
           .state('ProjectLaunch.preview', {
             url: '/preview',
             templateUrl: '/partials/zc/partial-fb-preview.html',
             controller: 'PreviewCtrl as previewVm',
            })
            .state('hasfb',{
             url: '/hasfb',
             templateUrl:'/partials/zc/partial-hasfb.html',
             controller: 'HasfbCtrl as hasfbVm'
           })
            .state('gzlist',{
             url: '/gzlist',
             templateUrl:'/partials/zc/partial-gzlist.html',
             controller: 'GzlistCtrl as gzlistVm'
           })
            .state('tzlist',{
             url: '/tzlist',
             templateUrl:'/partials/zc/partial-tzlist.html',
             controller: 'TzlistCtrl as tzlistVm'
           })
            .state('pgzlist',{
             url: '/pgzlist',
             templateUrl:'/partials/zc/partial-pgzlist.html',
             controller: 'PgzlistCtrl as pgzlistVm'
           })
            .state('pzclist',{
             url: '/pzclist',
             templateUrl:'/partials/zc/partial-pzclist.html',
             controller: 'PzclistCtrl as pzclistVm'
           })
           
             .state('fbdetail',{
             url: '/fbdetail',
             templateUrl:'/partials/zc/partial-fbdetail.html',
             controller: 'FbdetailCtrl as fbdetailVm'
           })
           
  }])
  .directive('sideBar', sideBar)
  .controller('MainCtrl',[MainCtrl]) //主控制器
  .controller('HasfbCtrl',[HasfbCtrl])  //已发布项目列表控制器
  .controller('GzlistCtrl',[GzlistCtrl]) //关注列表控制器
  .controller('TzlistCtrl',[TzlistCtrl]) //支持列表控制器
  .controller('PgzlistCtrl',[PgzlistCtrl]) //个人关注列表控制器
  .controller('PzclistCtrl',[PzclistCtrl]) //个人支持列表控制器
  .controller('FbdetailCtrl',[FbdetailCtrl]) 
  .controller('FbCtrl',['$scope','$http','$state','$location',FbCtrl])
  .controller('BaseCtrl',['$scope','$http',BaseCtrl])
  .controller('ProjectCtrl',['$scope','$http',ProjectCtrl])
  .controller('DetailCtrl',['$scope','$http',DetailCtrl])
  .controller('PayBackCtrl',['$scope','$http',PayBackCtrl])
  .controller('PreviewCtrl',['$scope','$http','$location',PreviewCtrl])
export default app;