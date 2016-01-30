import $ from 'jquery';
import angular from 'angular';

// 依赖模块
import formComponents from '../directives/formComponents.js';
import pagination from '../directives/pagination.js'

// 控制器
import MainController from './controllers/MainController.js';
import FbzwController from './controllers/FbzwController.js';

let app = angular.module('userCenter', ['ui.router', 'formComponents', 'ui.bootstrap.pagination']);
app
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('jlbj', {
        url: '/jlbj',
        templateUrl: '/routes/rczp/rczp-jlbj.html'
      })
      .state('jlyl', {
        url: '/jlyl',
        templateUrl: '/routes/rczp/rczp-jlyl.html'
      })
      .state('jltd', {
        url: '/jltd',
        templateUrl: '/routes/rczp/rczp-jltd.html'
      })
      .state('zwsc', {
        url: '/zwsc',
        templateUrl: '/routes/rczp/rczp-zwsc.html'
      })
      .state('fbzw', {
        url: '/fbzw',
        templateUrl: '/routes/rczp/rczp-fbzw.html',
        controller: 'FbzwController as fbzw'
      });
  }])
  .controller('MainController', [MainController])
  .controller('FbzwController', ['$http', FbzwController]);

export default app;