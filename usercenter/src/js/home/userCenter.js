 import $ from 'jquery';
 import angular from 'angular';

// // 依赖模块
// // import pagination from '../directives/pagination.js';
 import listComponents  from '../directives/listComponents.js'
 import modalComponents from '../directives/modalComponents.js'   //表单信息提示弹框 庄
 import formComponents from '../directives/formComponents.js';
 // 指令

import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';
import sideBar from '../directives/userCenter/sideBar.js';
// //import switchType from '../directives/userCenter/switchType.js';

//  控制器
 import MainCtrl from './controllers/MainCtrl.js';
 //控制器--账号信息
 import ZhxxCtrl from './controllers/ZhxxCtrl.js';
 import GsfwCtrl from './controllers/GsfwCtrl.js';
 import FwlbCtrl from './controllers/FwlbCtrl.js';
 import ServerDetailCtrl from './controllers/ServerDetailCtrl.js';
 import GsalCtrl from './controllers/GsalCtrl.js';
 import AllbCtrl from './controllers/AllbCtrl.js';
 import CasesDetailCtrl from './controllers/CasesDetailCtrl.js';
 import QyzzCtrl from './controllers/QyzzCtrl.js';
 import QyryCtrl from './controllers/QyryCtrl.js';
 import GzhjCtrl from './controllers/GzhjCtrl.js';
 import SyzttCtrl from './controllers/SyzttCtrl.js';
 import QyzyCtrl from './controllers/QyzyCtrl.js';
 import PzhxxCtrl from './controllers/PzhxxCtrl.js';
 import PzhpersonCtrl from './controllers/PzhpersonCtrl.js';
 import EducationCtrl from './controllers/ZhxxControllers/EducationCtrl.js';
 //import WorkCtrl from './controllers/ZhxxControllers/WorkCtrl.js'
 import PersonCtrl from './controllers/ZhxxControllers/PersonCtrl.js';
 import CompanyCtrl from './controllers/ZhxxControllers/CompanyCtrl.js';
 import YqljCtrl from './controllers/YqljCtrl.js';
// // import EducationCtrl from './controllers/ZhxxControllers/EducationCtrl.js';


 let app = angular.module('userCenter',['ngAnimate', 'ui.router','listComponents','formComponents','modalComponents']);
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
        templateUrl: '/partials/home/partial-zhxx.html',    //公司账号信息主控制器
        controller: 'ZhxxCtrl as zhxxVm'
      })
      .state('zhxx.person',{
        url: '/person',
        templateUrl: '/partials/home/partial-zhxx-person.html' ,//公司账号--基本信息
        controller: 'PersonCtrl as personVm'
      })
      .state('zhxx.company',{
        url: '/company',
       templateUrl: '/partials/home/partial-zhxx-company.html',  //公司账号--公司信息
       controller: 'CompanyCtrl as companyVm'
      })
      .state('zhxx.photo',{
        url: '/photo',
       // templateUrl: '/partials/home/partial-zhxx-photo.html' //公司账号--上传头像
      })
      .state('zhxx.education',{
        url: '/education',
        templateUrl: '/partials/home/partial-zhxx-education.html',  //公司账号--教育经历
        controller: 'EducationCtrl as educationVm'
      })
      .state('zhxx.experience',{
        url: '/experience',
        templateUrl: '/partials/home/partial-zhxx-experience.html',  //公司站好--工作经历
        //controller: 'WorkCtrl as workVm'
      })
      .state('pzhxx',{
        url: '/pzhxx',
        templateUrl: '/partials/home/partial-pzhxx.html',  //个人账号
        controller: 'PzhxxCtrl as pzhxxVm'
      })
      .state('pzhxx.person',{
        url: '/person',
        templateUrl: '/partials/home/partial-pzhperson.html',  //个人账号--基本信息
        controller: 'PzhpersonCtrl as pzhpersonVm'
      })
      .state('pzhxx.photo',{
        url: '/photo',
        templateUrl: '/partials/home/partial-pzhxx-photo.html',  //个人账号--上传头像
       // controller: 'PzhxxCtrl as pzhxxVm'
      })
      .state('pzhxx.education',{
        url: '/education',
        templateUrl: '/partials/home/partial-pzhxx-education.html',  //个人账号--教育经历
        //controller: 'PzhxxCtrl as pzhxxVm'
      })
      .state('pzhxx.experience',{
        url: '/experience',
        templateUrl: '/partials/home/partial-pzhxx-experience.html',  //个人账号--工作经历
        //controller: 'PzhxxCtrl as pzhxxVm'
      })
      .state('gsfu',{
        url: '/gsfu',
        templateUrl: '/partials/home/partial-gsfu.html',   //公司服务
        controller: 'GsfwCtrl as gsfwVm'
      })
      .state('fwlb',{
        url: '/fwlb',
        templateUrl: '/partials/home/partial-fwlb.html',   //服务列表
        controller: 'FwlbCtrl as fwlbVm'
      })
      .state('serverDetail',{
        url: '/serverDetail/:id',
        templateUrl: '/partials/home/partial-serverDetail.html',   //服务列表详情页
        controller: 'ServerDetailCtrl as serverdetailVm'
      })
      .state('gsal',{
        url: '/gsal',
        templateUrl: '/partials/home/partial-gsal.html',   //公司案例
        controller: 'GsalCtrl as gsalVm'
      })
      .state('allb',{
        url: '/allb',
        templateUrl: '/partials/home/partial-allb.html',   //公司案例列表
        controller: 'AllbCtrl as allbVm'
      })
      .state('yqlj',{
        url: '/yqlj',
        templateUrl: '/partials/home/partial-yqlj.html',   //友情链接
        controller: 'YqljCtrl as yqljVm'
      })
      .state('casesDetail',{
        url:'/casesDetail/:id',
        templateUrl:'/partials/home/partial-casesDetail.html',  //公司案例列表详情页
        controller:'CasesDetailCtrl as casesdetailVm'
      })
      .state('qyzy',{
        url:'/qyzy',
        templateUrl:'/partials/home/partial-qyzy.html',  //企业资源
        controller:'QyzyCtrl as qyzyVm'
      })
      .state('qyzy.qyzz',{
        url:'/qyzz',
        templateUrl:'/partials/home/partial-qyzz.html',  //企业资质
        controller:'QyzzCtrl as qyzzVm'
      })
      .state('qyzy.qyry',{
        url:'/qyry',
        templateUrl:'/partials/home/partial-qyry.html',  //企业荣誉
        controller:'QyryCtrl as qyryVm'
      })
      .state('qyzy.gzhj',{
        url:'/gzhj',
        templateUrl:'/partials/home/partial-gzhj.html',  //工作环境
        controller:'GzhjCtrl as gzhjVm'
      })
      .state('qyzy.syztt',{
        url:'/syztt',
        templateUrl:'/partials/home/partial-syztt.html',  //首页主题图
        controller:'SyzttCtrl as syzttVm'
      })
  }])
  .directive('showAllModules', showAllModules)
  .directive('sideBar', sideBar)
  .directive('navSlide', navSlide)
  
  
  .controller('MainCtrl',['$location',MainCtrl])
  //企业版基本信息
  .controller('ZhxxCtrl',ZhxxCtrl)
  .controller('GsfwCtrl',['$http',GsfwCtrl])
  .controller('FwlbCtrl',FwlbCtrl)
  .controller('ServerDetailCtrl',['$http','$stateParams',ServerDetailCtrl])
  .controller('GsalCtrl',['$http',GsalCtrl])
  .controller('AllbCtrl',AllbCtrl)
  .controller('CasesDetailCtrl',['$http','$stateParams',CasesDetailCtrl])
  .controller('QyzzCtrl',QyzzCtrl)
  .controller('QyryCtrl',QyryCtrl)
  .controller('GzhjCtrl',GzhjCtrl)
  .controller('SyzttCtrl',SyzttCtrl)
  .controller('QyzyCtrl',QyzyCtrl)
  .controller('PzhxxCtrl',PzhxxCtrl)
  .controller('PzhpersonCtrl',PzhpersonCtrl)
  .controller('EducationCtrl',['$http',EducationCtrl])
 // .controller("WorkCtrl",WorkCtrl)
  .controller("PersonCtrl",['$http',PersonCtrl])
  .controller("CompanyCtrl",['$http',CompanyCtrl])
  .controller("YqljCtrl",['$http',YqljCtrl])
    
     
