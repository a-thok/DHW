import $ from 'jquery';
import angular from 'angular';

// 依赖模块
import formComponents from '../directives/formComponents.js';
import pagination from '../directives/pagination.js';
import listComponents  from '../directives/listComponents.js';
import modalComponents from '../directives/modalComponents.js';

// 指令
import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';
import sideBar from '../directives/userCenter/sideBar.js';
import switchType from '../directives/userCenter/switchType.js';

// 控制器
import MainCtrl from './controllers/MainCtrl.js';
import CfbCtrl from './controllers/CfbCtrl.js';
import CyfbCtrl from './controllers/CyfbCtrl.js';
import PfbCtrl from './controllers/PfbCtrl.js';
import PyfbCtrl from './controllers/PyfbCtrl.js';
import CyfbDetailCtrl from './controllers/CyfbDetailCtrl.js';
import PgzCtrl from './controllers/PgzCtrl.js';
import CgzCtrl from './controllers/CgzCtrl.js';

//投稿人列表
import CytglistCtrl from './controllers/TgzControllers/CytglistCtrl.js';
import CyfblistCtrl from './controllers/TgzControllers/CyfblistCtrl.js';
import CytgdetailCtrl from './controllers/TgzControllers/CytgdetailCtrl.js';
import CyfbdetailCtrl from './controllers/TgzControllers/CyfbdetailCtrl.js';

let app = angular.module('userCenter', ['ngAnimate', 'ui.router', 'formComponents', 'modalComponents', 'listComponents', 'ui.bootstrap.pagination']);

app
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    
     // 从cookie获取当前个人中心类型（企业或个人）
    let logintype;
    let cookies = document.cookie.split('; ');
    cookies.forEach((cookie) => {
      if (cookie.indexOf('logintype') !== -1) {
        logintype = cookie.indexOf('1') !== -1 ? 1 : 2;
      }
    });
    // 根据个人中心类型，判断默认加载哪个路由
    $urlRouterProvider.otherwise(logintype === 1 ? '/pfb' : '/cfb');
    //$urlRouterProvider.otherwise('/cfb');
    $stateProvider
      .state('cfb', {
        url: '/cfb',
        templateUrl: '/partials/cysj/partial-cfb.html',
        controller: 'CfbCtrl as cfbVm'
      })
      .state('cyfb', {
        url: '/cyfb',
        templateUrl: '/partials/cysj/partial-cyfb.html',
        controller: 'CyfbCtrl as cyfbVm'
      })
      .state('pfb', {
        url: '/pfb',
        templateUrl: '/partials/cysj/partial-pfb.html',
        controller: 'PfbCtrl as pfbVm'
      })
      .state('pyfb', {
        url: '/pyfb',
        templateUrl: '/partials/cysj/partial-pyfb.html',
        controller: 'PyfbCtrl as pyfbVm'
      })
      .state('detail',{
        url : '/detail/:id',
        templateUrl : '/partials/cysj/partial-cyfb-detail.html',
        controller : 'CyfbDetailCtrl as detailVm'
      })
      .state('pgz',{
        url : '/pgz',
        templateUrl : '/partials/cysj/partial-pgz.html',
        controller : 'PgzCtrl as pgzVm'
      })
      .state('cgz',{
        url : '/cgz',
        templateUrl : '/partials/cysj/partial-cgz.html',
        controller : 'CgzCtrl as cgzVm'
      })
      //投稿--个人
      .state('cytglist',{
        url : '/cytglist',
        templateUrl : '/partials/cysj/contributor/partial-Contributors.html',
        controller : 'CytglistCtrl as cytglistVm'
      })
      .state('cytgdetail',{
        url : '/cytgdetail/:id',
        templateUrl : '/partials/cysj/contributor/partial-cytgdetail.html',
        controller : 'CytgdetailCtrl as cytgdetailVm'
      })
      
      .state('cyfbdetail',{
        url : '/cyfbdetail/:id',
        templateUrl : '/partials/cysj/contributor/partial-cyfbdetail.html',
        controller : 'CyfbdetailCtrl as cyfbdetailVm'
      })
      //投稿--公司
      .state('cyfblist',{
        url : '/cyfblist',
        templateUrl : '/partials/cysj/contributor/partial-cyfblist.html',
        controller : 'CyfblistCtrl as cyfblistVm'
      })
  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  .controller('MainCtrl', [ MainCtrl])
  .controller('CfbCtrl', ['$http', CfbCtrl])
  .controller('CyfbCtrl', ['$http', CyfbCtrl])
  .controller('PfbCtrl', ['$http', PfbCtrl])
  .controller('PyfbCtrl', ['$http', PyfbCtrl])
  .controller('CyfbDetailCtrl', ['$http','$stateParams', CyfbDetailCtrl])
  .controller('PgzCtrl', ['$http', PgzCtrl])
  .controller('CgzCtrl', ['$http', CgzCtrl])
  //投稿
  .controller('CytglistCtrl',CytglistCtrl)
  .controller('CyfblistCtrl',CyfblistCtrl)
  .controller('CytgdetailCtrl',['$http','$stateParams', CytgdetailCtrl])
  .controller('CyfbdetailCtrl',['$http','$stateParams', CyfbdetailCtrl])