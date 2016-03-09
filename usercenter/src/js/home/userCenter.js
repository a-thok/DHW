 import $ from 'jquery';
 import angular from 'angular';

// // 依赖模块
// // import pagination from '../directives/pagination.js';
 import listComponents  from '../directives/listComponents.js'
// // import modalComponents from '../directives/modalComponents.js'   //表单信息提示弹框 庄
 import formComponents from '../directives/formComponents.js';
 // 指令

import showAllModules from '../directives/userCenter/showAllModules.js';
// //import navSlide from '../directives/userCenter/navSlide.js';
import sideBar from '../directives/userCenter/sideBar.js';
// //import switchType from '../directives/userCenter/switchType.js';

//  控制器
 import MainCtrl from './controllers/MainCtrl.js';
 //控制器--账号信息
 import ZhxxCtrl from './controllers/ZhxxCtrl.js';
 import EducationCtrl from './controllers/ZhxxControllers/EducationCtrl.js';
 import WorkCtrl from './controllers/ZhxxControllers/WorkCtrl.js'
// // import PersonCtrl from './controllers/ZhxxControllers/PersonCtrl.js';
// // import CompanyCtrl from './controllers/ZhxxControllers/CompanyCtrl.js';
// // import EducationCtrl from './controllers/ZhxxControllers/EducationCtrl.js';


 let app = angular.module('userCenter',['ngAnimate', 'ui.router','listComponents','formComponents']);
app
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
         // 从cookie获取当前个人中心类型（企业或个人）
      // let logintype;
      // let cookies = document.cookie.split('; ');
      // cookies.forEach((cookie) => {
      //   if (cookie.indexOf('logintype') !== -1) {
      //     logintype = cookie.indexOf('1') !== -1 ? 1 : 2;
      //   }
      // });
    // 根据个人中心类型，判断默认加载哪个路由
    // $urlRouterProvider.otherwise(logintype === 1 ? '/jlbj' : '/fbzp');
    
    $urlRouterProvider.otherwise('/zhxx' , '/zhxx/person');
    $stateProvider
      .state('zhxx',{
        url: '/zhxx',
        templateUrl: '/partials/home/partial-zhxx.html',
        controller: 'ZhxxCtrl as zhxxVm'
      })
      .state('zhxx.person',{
        url: '/person',
        templateUrl: '/partials/home/partial-zhxx-person.html'
      })
      .state('zhxx.company',{
        url: '/company',
        templateUrl: '/partials/home/partial-zhxx-company.html'
      })
      .state('zhxx.photo',{
        url: '/photo',
        templateUrl: '/partials/home/partial-zhxx-photo.html'
      })
      .state('zhxx.education',{
        url: '/education',
        templateUrl: '/partials/home/partial-zhxx-education.html',
        controller: 'EducationCtrl as educationVm'
      })
      .state('zhxx.experience',{
        url: '/experience',
        templateUrl: '/partials/home/partial-zhxx-experience.html',
        controller: 'WorkCtrl as workVm'
      })
  }])
  .directive('showAllModules', showAllModules)
  .directive('sideBar', sideBar)
  
  
  .controller('MainCtrl',['$location',MainCtrl])
  //企业版基本信息
  .controller('ZhxxCtrl',ZhxxCtrl)
  .controller('EducationCtrl',['$http',EducationCtrl])
  .controller("WorkCtrl",WorkCtrl)
    
     
