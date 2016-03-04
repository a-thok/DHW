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
import FbCtrl from './controllers/FbCtrl.js';
import YfbCtrl from './controllers/YfbCtrl.js';
import FuwsCtrl from './controllers/FuwsCtrl.js';
import YgzCtrl from './controllers/YgzCtrl.js';
import PygzCtrl from './controllers/PygzCtrl.js';

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
    $urlRouterProvider.otherwise(logintype === 1 ? '/cygz' : '/pfb');
     //$urlRouterProvider.otherwise('/pfb');
    $stateProvider
      .state('pfb', {
        url: '/pfb',
        templateUrl: '/partials/srdz/partial-pfb.html',
        controller: 'FbCtrl as fbVm'
      })
      .state('pyfb', {
        url: '/pyfb',
        templateUrl: '/partials/srdz/partial-pyfb.html',
        controller: 'YfbCtrl as yfbVm'
      })
      .state('pfws', {
        url: '/pfws',
        templateUrl: '/partials/srdz/partial-pfws.html',
        controller: 'FuwsCtrl as fusVm'
      })
      .state('pygz', {
        url: '/pygz',
        templateUrl: '/partials/srdz/partial-pygz.html',
        controller: 'YgzCtrl as ygzVm'
      })
      .state('cygz', {
        url: '/cygz',
        templateUrl: '/partials/srdz/partial-ygz.html',
        controller: 'PygzCtrl as pygzVm'
      })
      
    
  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  .controller('MainCtrl', [ MainCtrl])
  .controller('FbCtrl', ['$http', FbCtrl])
  .controller('YfbCtrl', [ YfbCtrl])
  .controller('FuwsCtrl', ['$http', FuwsCtrl])
  .controller('YgzCtrl', ['$http', YgzCtrl])
  .controller('PygzCtrl', ['$http', PygzCtrl])