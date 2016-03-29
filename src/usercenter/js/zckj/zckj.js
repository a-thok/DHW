import angular from 'angular';
// 依赖模块
import '../directives/pagination.js';
import '../directives/listComponents.js';
import '../directives/formComponents';
// 指令
import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';
import sideBar from '../directives/userCenter/sideBar.js';
import switchType from '../directives/userCenter/switchType.js';

// 控制器
import MainCtrl from './controllers/MainCtrl.js';
import ListCtrl from './controllers/ListCtrl.js';
import ApplyCtrl from './controllers/ApplyCtrl.js';
let app = angular.module('userCenter', ['ngAnimate', 'ui.router', 'listComponents', 'formComponents', 'ui.bootstrap.pagination']);
app
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/list');
    $stateProvider
      .state('list', {
        url: '/list',
        templateUrl: '/partials/zckj/partials-list.html',
        controller: 'ListCtrl as listVm'
      })
      .state('apply', {
        url: '/apply',
        templateUrl: '/partials/zckj/partials-apply.html',
        controller: 'ApplyCtrl as applyVm'
      });
  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  .controller('MainCtrl', MainCtrl)
  .controller('ListCtrl', ListCtrl)
  .controller('ApplyCtrl', ['$http', '$location', ApplyCtrl]);
export default app;

