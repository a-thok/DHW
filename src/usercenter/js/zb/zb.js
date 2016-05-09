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

import GyzCtrl from './controllers/GyzCtrl.js';
import YjdCtrl from './controllers/YjdCtrl.js';
// 公司账号 -- 已接单
import CyjdCtrl from './controllers/CyjdCtrl.js';
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
    })
    // 查看雇佣者
    .state('gyz', {
      url: '/gyz/:id',
      templateUrl: '/partials/zb/partial-gyz.html',
      controller: 'GyzCtrl as gyzVm'
    })
    .state('yjd', {
      url: '/yjd',
      templateUrl: '/partials/zb/partial-yjd.html',
      controller: 'YjdCtrl as yjdVm'
    })
    .state('cyjd', {
      url: '/cyjd',
      templateUrl: '/partials/zb/partial-cyjd.html',
      controller: 'CyjdCtrl as cyjdVm'
    });
  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  .controller('MainCtrl', [MainCtrl])
  .controller('YjdCtrl', [YjdCtrl])
  // 公司账号 已接单
  .controller('CyjdCtrl', [CyjdCtrl])
  .controller('FbCtrl', ['$http', FbCtrl]) // 发布项目控制器
  .controller('ScCtrl', [ScCtrl]) // 收藏控制器
  .controller('YfbCtrl', ['$http', YfbCtrl])
  .controller('GyzCtrl', ['$http', '$stateParams', GyzCtrl]);
export default app;
