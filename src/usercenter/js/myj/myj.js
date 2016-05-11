import angular from 'angular';

// 依赖模块
import '../directives/formComponents.js';
import '../directives/pagination.js';
import '../directives/listComponents.js';
import '../directives/modalComponents.js';
// 指令
import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';
import sideBar from '../directives/userCenter/sideBar.js';
import switchType from '../directives/userCenter/switchType.js';

import MainCtrl from './controllers/MainCtrl.js'
import FbCtrl from './controllers/FbCtrl.js'
import DetailCtrl from './controllers/DetailCtrl.js'
import ScCtrl from './controllers/ScCtrl.js'
import YfbCtrl from './controllers/YfbCtrl.js'
import YfbAllCtrl from './controllers/yfb/YfbAllCtrl.js'
import YfbBtgCtrl from './controllers/yfb/YfbBtgCtrl.js'
import YfbDshCtrl from './controllers/yfb/YfbDshCtrl.js'
import YfbTgCtrl from './controllers/yfb/YfbTgCtrl.js'



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
    $urlRouterProvider.otherwise(logintype === 1 ? '/buyer.all' : '/fb');
    $stateProvider
      .state('fb', {
        url: '/fb',
        templateUrl: '/partials/myj/partial-fb.html',
        controller: 'FbCtrl as fbVm'
      })
      .state('detail', {
        url: '/detail/:id',
        templateUrl: '/partials/myj/partial-detail.html',
        controller: 'DetailCtrl as detailVm'
      })
      .state('sc', {
        url: '/sc',
        templateUrl: '/partials/myj/partial-sc.html',
        controller: 'ScCtrl as scVm'
      })
      .state('yfb', {
        url: '/yfb',
        templateUrl: '/partials/myj/partial-yfb.html',
        controller: 'YfbCtrl as yfbVm'
      })
      .state('yfb.all', {
        url: '/all',
        templateUrl: '/partials/myj/yfb/partial-yfb-all.html',
        controller: 'YfbAllCtrl as yfbAllVm'
      })
      .state('yfb.dsh', {
        url: '/dsh',
        templateUrl: '/partials/myj/yfb/partial-yfb-dsh.html',
        controller: 'YfbDshCtrl as yfbDshVm'
      })
      .state('yfb.btg', {
        url: '/btg',
        templateUrl: '/partials/myj/yfb/partial-yfb-btg.html',
        controller: 'YfbBtgCtrl as yfbBtgVm'
      })
      .state('yfb.tg', {
        url: '/tg',
        templateUrl: '/partials/myj/yfb/partial-yfb-tg.html',
        controller: 'YfbTgCtrl as yfbTgVm'
      })

  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  
  .controller('MainCtrl', ['$location', MainCtrl])
  .controller('FbCtrl', ['$http', FbCtrl])
  .controller('ScCtrl', ['$http', ScCtrl])
  .controller('DetailCtrl', ['$http', '$stateParams', DetailCtrl])
  .controller('YfbCtrl', [YfbCtrl])
  .controller('YfbAllCtrl', [YfbAllCtrl])
  .controller('YfbBtgCtrl', [YfbBtgCtrl])
  .controller('YfbDshCtrl', [YfbDshCtrl])
  .controller('YfbTgCtrl', [YfbTgCtrl])

export default app;
