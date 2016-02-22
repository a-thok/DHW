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

let app = angular.module('userCenter',['ngAnimate','ui.router','listComponents','ui.bootstrap.pagination']);

app
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/fb');
    $stateProvider
           .state('fb',{
             url: '/fb',
             templateUrl:'/partials/zc/partial-fb.html'
             
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
export default app;