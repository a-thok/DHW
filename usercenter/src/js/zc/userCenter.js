import $ from 'jquery';
import angular from 'angular';

//依赖模块
import pagination from '../directives/pagination.js';
import listComponents  from '../directives/listComponents.js';

// 指令
import sideBar from '../directives/userCenter/sideBar.js';

//控制器
import MainCtrl from './controllers/MainCtrl.js';
import FbCtrl from './controllers/FbCtrl.js'

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
             templateUrl: '/partials/zc/partial-fb-basic.html'
           })
           .state('ProjectLaunch.project',{
             url: '/project',
             templateUrl: '/partials/zc/partial-fb-project.html'
           })
           .state('ProjectLaunch.detail',{
             url: '/detail',
             templateUrl: '/partials/zc/partial-fb-detail.html'
           })
           .state('ProjectLaunch.payback',{
             url: '/payback',
             templateUrl: '/partials/zc/partial-fb-payback.html'
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
export default app;