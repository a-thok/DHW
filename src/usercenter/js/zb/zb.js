import angular from 'angular';

// 依赖模块
import '../directives/pagination.js';
import '../directives/listComponents.js';
import '../directives/formComponents';
import '../directives/modalComponents.js';
// 指令
import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';
import sideBar from '../directives/userCenter/sideBar.js';
import switchType from '../directives/userCenter/switchType.js';

// 控制器
import MainCtrl from './controllers/MainCtrl.js';
import FbCtrl from './controllers/FbCtrl.js';
import ScCtrl from './controllers/ScCtrl.js';
import YfbCtrl from './controllers/YfbCtrl.js';
let app = angular.module('userCenter', ['ngAnimate', 'ui.router', 'listComponents', 'formComponents', 'modalComponents', 'ui.bootstrap.pagination']);

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
    $urlRouterProvider.otherwise(logintype === 1 ? '/sc' : '/fb');

    // $urlRouterProvider.otherwise('/fb');
    $stateProvider
    .state('fb', {
      url: '/fb',
      templateUrl: '/partials/zb/partial-fb.html',
      controller: 'FbCtrl as fbVm'
    })
    .state('sc', {
      url: '/sc',
      templateUrl: '/partials/zb/partial-sc.html',
      controller: 'ScCtrl as scVm'
    })
    .state('yfb', {
      url: '/yfb',
      templateUrl: '/partials/zb/partial-yfb.html',
      controller: 'YfbCtrl as yfbVm'
    });
  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  .controller('MainCtrl', [MainCtrl])
  .controller('FbCtrl', ['$http', FbCtrl]) // 发布项目控制器
  .controller('ScCtrl', [ScCtrl]) // 收藏控制器
  .controller('YfbCtrl', ['$http', YfbCtrl]);
export default app;
