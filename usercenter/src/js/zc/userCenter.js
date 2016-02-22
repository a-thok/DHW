import $ from 'jquery';
import angular from 'angular';

//依赖模块
import pagination from '../directives/pagination.js';
import listComponents  from '../directives/listComponents.js';
import formComponents from '../directives/formComponents';
// 指令
import sideBar from '../directives/userCenter/sideBar.js';

//控制器
import MainCtrl from './controllers/MainCtrl.js';
import FbCtrl from './controllers/FbCtrl.js';
import BaseCtrl from './controllers/BaseCtrl.js';
import DetailCtrl from './controllers/DetailCtrl.js';
import PayBackCtrl from './controllers/PayBackCtrl.js';
import ProjectCtrl from './controllers/ProjectCtrl.js';
import PreviewCtrl from './controllers/PreviewCtrl.js';



let app = angular.module('userCenter',['ngAnimate','ui.router','listComponents','formComponents','ui.bootstrap.pagination']);

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
             templateUrl:'/partials/zc/partial-hasfb.html'
             
           })
            .state('gzlist',{
             url: '/gzlist',
             templateUrl:'/partials/zc/partial-gzlist.html'
             
           })
            .state('tzlist',{
             url: '/tzlist',
             templateUrl:'/partials/zc/partial-tzlist.html'
             
           })
            .state('pgzlist',{
             url: '/pgzlist',
             templateUrl:'/partials/zc/partial-pgzlist.html'
             
           })
            .state('pzclist',{
             url: '/pzclist',
             templateUrl:'/partials/zc/partial-pzclist.html'
             
           })
  }])
  .directive('sideBar', sideBar)
  .controller('MainCtrl',[MainCtrl]) //主控制器
  .controller('FbCtrl',['$scope','$http','$state','$location',FbCtrl])
  .controller('BaseCtrl',['$scope','$http',BaseCtrl])
  .controller('ProjectCtrl',['$scope','$http',ProjectCtrl])
  .controller('DetailCtrl',['$scope','$http',DetailCtrl])
  .controller('PayBackCtrl',['$scope','$http',PayBackCtrl])
  .controller('PreviewCtrl',['$scope','$http','$location',PreviewCtrl])
export default app;