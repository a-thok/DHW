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

// 控制器
import MainCtrl from './controllers/MainCtrl.js';
import FbzpCtrl from './controllers/FbzpCtrl.js';
// 招聘列表
import ZplbCtrl from './controllers/ZplbCtrl.js';
import ZplbPublishedCtrl from './controllers/ZplbControllers/ZplbPublishedCtrl.js';
import ZplbOfflineCtrl from './controllers/ZplbControllers/ZplbOfflineCtrl.js';
import EditCtrl from './controllers/EditControllers/EditCtrl.js';
// 简历列表
import JllbCtrl from './controllers/JllbCtrl.js';
import DdsxCtrl from './controllers/JllbControllers/DdsxCtrl.js';
import YckCtrl from './controllers/JllbControllers/YckCtrl.js';
import DgtjlCtrl from './controllers/JllbControllers/DgtjlCtrl.js';
import YtgmsCtrl from './controllers/JllbControllers/YtgmsCtrl.js';
import BhsCtrl from './controllers/JllbControllers/BhsCtrl.js';
import TdpreviewdetailCtrl from './controllers/TdpreviewdetailCtrl.js';
// 职位收藏
import ZwscCtrl from './controllers/ZwscControllers/ZwscCtrl.js';
// 职位评价
import ReplayCtrl from './controllers/ReplayCtrl.js';
import PreplayCtrl from './controllers/PreplayCtrl.js';
// 已投简历
import YtjlCtrl from './controllers/YtjlCtrl.js';
// 简历编辑与简历预览
import JlbjCtrl from './controllers/JlbjCtrl.js';
import JlylCtrl from './controllers/JlylCtrl.js';




let app = angular.module('userCenter', ['ngAnimate', 'ui.router', 'formComponents', 'modalComponents', 'listComponents', 'ui.bootstrap.pagination']);
app
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // 从cookie获取当前个人中心类型（企业或个人）
    let logintype;
    let cookies = document.cookie.split('; ');
    cookies.forEach((cookie) => {
      if (cookie.indexOf('logintype') !== -1) {
        logintype = cookie.indexOf('1') !== -1 ? 1 : 2;
      }
    });
    // 根据个人中心类型，判断默认加载哪个路由
    $urlRouterProvider.otherwise(logintype === 1 ? '/jlbj' : '/fbzp');
    $urlRouterProvider.when('/zplb', '/zplb/published');
    $urlRouterProvider.when('/jllb', '/jllb/filter');
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
        controller: 'JllbCtrl as jllbVm'
      })
      .state('jllb.filter', {
        url: '/filter',
        templateUrl: '/partials/rczp/partial-jllb-filter.html',
        controller: 'DdsxCtrl as ddsxVm'
      })
      .state('jllb.view', {
        url: '/view',
        templateUrl: '/partials/rczp/partial-jllb-view.html',
        controller: 'YckCtrl as yckVm'
      })
      .state('jllb.communicate', {
        url: '/communicate',
        templateUrl: '/partials/rczp/partial-jllb-communicate.html',
        controller: 'DgtjlCtrl as dgtjlVm'
      })
      .state('jllb.interview', {
        url: '/interview',
        templateUrl: '/partials/rczp/partial-jllb-interview.html',
        controller: 'YtgmsCtrl as ytgmsVm'
      })
      .state('jllb.notsuitable', {
        url: '/notsuitable',
        templateUrl: '/partials/rczp/partial-jllb-notsuitable.html',
        controller: 'BhsCtrl as bhsVm'
      })
      .state('jlbj', {
        url: '/jlbj',
        templateUrl: '/partials/rczp/partial-jlbj.html',
        controller: 'JlbjCtrl as jlbjVm'
      })
      .state('jlyl', {
        url: '/jlyl',
        templateUrl: '/partials/rczp/partial-jlyl.html',
        controller: 'JlylCtrl as JlylVm'
      })
      .state('replay', {
        url: '/replay',
        templateUrl: '/partials/rczp/partial-replay.html',
        controller: 'ReplayCtrl as replayVm'
      })
      .state('preplay', {
        url: '/preplay',
        templateUrl: '/partials/rczp/partial-preplay.html',
        controller: 'PreplayCtrl as preplayVm'
      })
      .state('ytjl', {
        url: '/ytjl',
        templateUrl: '/partials/rczp/partial-ytjl.html',
        controller: 'YtjlCtrl as ytjlVm'
      })
      .state('zwsc', {
        url: '/zwsc',
        templateUrl: '/partials/rczp/partial-zwsc.html',
        controller: 'ZwscCtrl as ZwscVm'
      })
      .state('edit', {
        url: '/edit/:id',
        templateUrl: '/partials/rczp/partial-edit.html',
        controller: 'EditCtrl as editVm'
      })
      .state('td-preview-detail', {
        url: '/td-preview-detail',
        templateUrl: '/partials/rczp/partial-preview-detail.html',
        controller: 'TdpreviewdetailCtrl as tdpreviewdetailVm'
      });
  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  .controller('MainCtrl', ['$location', MainCtrl])
  // 招聘列表
  .controller('ZplbCtrl', [ZplbCtrl])
  .controller('ZplbPublishedCtrl', [ZplbPublishedCtrl])
  .controller('ZplbOfflineCtrl', [ZplbOfflineCtrl])
  .controller('EditCtrl', ['$http', '$stateParams', '$location', EditCtrl])
  .controller('FbzpCtrl', ['$http', FbzpCtrl])
  // 简历列表
  .controller('JllbCtrl', [JllbCtrl])
  .controller('DdsxCtrl', [DdsxCtrl])
  .controller('YckCtrl', [YckCtrl])
  .controller('DgtjlCtrl', [DgtjlCtrl])
  .controller('YtgmsCtrl', [YtgmsCtrl])
  .controller('BhsCtrl', [BhsCtrl])
  .controller('ReplayCtrl', ['$scope', ReplayCtrl])
  .controller('PreplayCtrl', ['$scope', PreplayCtrl])
  .controller('ZwscCtrl', ['$http', ZwscCtrl])
  // 已投简历
  .controller('YtjlCtrl', ['$http', YtjlCtrl])
  .controller('TdpreviewdetailCtrl', ['$http', '$scope', '$location', TdpreviewdetailCtrl])
  // 简历列表-简历预览
  .controller('JlbjCtrl', ['$scope', '$http', '$location', JlbjCtrl])
  .controller('JlylCtrl', ['$scope', '$http', '$location', JlylCtrl]);

export default app;
