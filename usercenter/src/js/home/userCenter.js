 import $ from 'jquery';
 import angular from 'angular';

// // 依赖模块
 import listComponents  from '../directives/listComponents.js'
 import modalComponents from '../directives/modalComponents.js'   //表单信息提示弹框 庄
 import formComponents from '../directives/formComponents.js';
 
 // 指令

import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';
import sideBar from '../directives/userCenter/sideBar.js';
import switchType from '../directives/userCenter/switchType.js';

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
 import ZtxgCtrl from './controllers/ZtxgCtrl.js';  //主题修改
 //  站内信
 import EmailCtrl from './controllers/EmailCtrl.js';
 import InboxCtrl from './controllers/EmailControllers/InboxCtrl.js';
 import OutboxCtrl from './controllers/EmailControllers/OutboxCtrl.js';
 import WriteCtrl from './controllers/EmailControllers/WriteCtrl.js';
 import EmailDetCtrl from './controllers/EmailControllers/EmailDetCtrl.js';
 import avatarCtrl from './controllers/avatarCtrl.js';  //上传头像
 import pavatarCtrl from './controllers/pavatarCtrl.js';  //个人账户上传头像
 
//个人版
 import PzhxxCtrl from './controllers/PzhxxCtrl.js';
 import PzhpersonCtrl from './controllers/PzhxxControllers/PzhpersonCtrl.js';
 import PzhxxEduCtrl from './controllers/PzhxxControllers/PzhxxEduCtrl.js';
 import PzhxxWorkCtrl from './controllers/PzhxxControllers/PzhxxWorkCtrl.js'; 
 //企业版
 import EducationCtrl from './controllers/ZhxxControllers/EducationCtrl.js';
 import WorkCtrl from './controllers/ZhxxControllers/WorkCtrl.js'
//  import PersonCtrl from './controllers/ZhxxControllers/PersonCtrl.js';
 import CompanyCtrl from './controllers/ZhxxControllers/CompanyCtrl.js';
 import YqljCtrl from './controllers/YqljCtrl.js';
 //会计认证体系
 import KjrzCtrl from './controllers/KjrzControllers/KjrzCtrl.js'
 import KjrzListCtrl from './controllers/KjrzControllers/KjrzListCtrl.js' 
 //收货地址管理
 import AddressCtrl from './controllers/addressControllers/AddressCtrl.js'
 import AddressEditCtrl from './controllers/addressControllers/AddressEditCtrl.js'


 let app = angular.module('userCenter',['ngAnimate', 'ui.router','listComponents','formComponents','modalComponents']);
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
    $urlRouterProvider.otherwise(logintype === 1 ? '/pzhxx/person' : '/zhxx/company');
    
    //$urlRouterProvider.otherwise('/zhxx' , '/zhxx/person');
    $stateProvider
      .state('zhxx',{
        url: '/zhxx',
        templateUrl: '/partials/home/partial-zhxx.html',    //公司账号信息主控制器
        controller: 'ZhxxCtrl as zhxxVm'
      })
      .state('zhxx.company',{
        url: '/company',
       templateUrl: '/partials/home/partial-zhxx-company.html',  //公司账号--公司信息
       controller: 'CompanyCtrl as companyVm'
      })
      .state('zhxx.photo',{
        url: '/photo',
        templateUrl: '/partials/home/partial-zhxx-photo.html' ,//公司账号--上传头像
        controller : 'avatarCtrl as avatarVm'
      })
      .state('zhxx.education',{
        url: '/education',
        templateUrl: '/partials/home/partial-zhxx-education.html',  //公司账号--教育经历
        controller: 'EducationCtrl as educationVm'
      })
      .state('zhxx.experience',{
        url: '/experience',
        templateUrl: '/partials/home/partial-zhxx-experience.html',  //公司账号--工作经历
        controller: 'WorkCtrl as workVm'
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
        controller: 'pavatarCtrl as pavatarVm'
      })
      .state('pzhxx.education',{
        url: '/education',
        templateUrl: '/partials/home/partial-pzhxx-education.html',  //个人账号--教育经历
        controller: 'PzhxxEduCtrl as pzhxxeduVm'
      })
      .state('pzhxx.experience',{
        url: '/experience',
        templateUrl: '/partials/home/partial-pzhxx-experience.html',  //个人账号--工作经历
        controller: 'PzhxxWorkCtrl as pzhxxworkVm'
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
      .state('ztxg',{
        url: '/ztxg',
        templateUrl: '/partials/home/partial-ztxg.html',   //主题修改
        controller: 'ZtxgCtrl as ztxgVm'
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
      .state('email',{
        url:'/email',
        templateUrl:'/partials/home/partial-email.html',  //站内信
        controller:'EmailCtrl as emailVm'
      })
      .state('email.inbox',{
        url:'/inbox',
        templateUrl:'/partials/home/email/partial-inbox.html',  //站内信
        controller:'InboxCtrl as inboxVm'
      })
      .state('email.outbox',{
        url:'/outbox',
        templateUrl:'/partials/home/email/partial-outbox.html',  //站内信
        controller:'OutboxCtrl as outboxVm'
      })
      .state('email.write',{
        url:'/write',
        templateUrl:'/partials/home/email/partial-write.html',  //站内信
        controller:'WriteCtrl as writeVm'
      })
      .state('email.detail',{
        url:'/detail/:id',
        templateUrl:'/partials/home/email/partial-emailDetail.html',  //站内信
        controller:'EmailDetCtrl as emailDetVm'
      })
      .state('kjrz',{
        url:'/kjrz',
        templateUrl:'/partials/home/kjrz/partial-kjrz.html',  //认证体系
        controller:'KjrzCtrl as kjrzVm'
      })
      .state('kjrzlist',{
        url : '/kjrzlist',
        templateUrl : '/partials/home/kjrz/partial-kjrz-list.html',
        controller: 'KjrzListCtrl as kjrzlistVm'
      })
      .state('addresslist',{
        url : '/addresslist',
        templateUrl : '/partials/home/addressList/addresslist.html',
        controller: 'AddressCtrl as addressVm'
      })
      .state('addressedit',{
        url : '/addressedit/:id',
        templateUrl : '/partials/home/addressList/addressedit.html',
        controller : 'AddressEditCtrl as addresseditVm'
      })
  }])
  .directive('showAllModules', showAllModules)
  .directive('sideBar', sideBar)
  .directive('navSlide', navSlide)
  .directive('switchType', switchType)
  
  
  .controller('MainCtrl',['$location',MainCtrl])
  //企业版
  .controller('ZhxxCtrl',ZhxxCtrl)
  .controller('GsfwCtrl',['$http',GsfwCtrl])
  .controller('FwlbCtrl',FwlbCtrl)
  .controller('ServerDetailCtrl',['$http','$stateParams',ServerDetailCtrl])
  .controller('GsalCtrl',['$http',GsalCtrl])
  .controller('AllbCtrl',AllbCtrl)
  .controller('CasesDetailCtrl',['$http','$stateParams',CasesDetailCtrl])
  .controller('ZtxgCtrl',['$scope', '$http', ZtxgCtrl])
  .controller('avatarCtrl',['$scope', '$http', avatarCtrl])
  .controller('pavatarCtrl', pavatarCtrl)
  //会计认证体系控制器
  .controller('KjrzCtrl', ['$http', KjrzCtrl])
  .controller('KjrzListCtrl',  KjrzListCtrl)
  //收货地址管理
  .controller('AddressCtrl', ['$http', AddressCtrl])
  .controller('AddressEditCtrl', ['$http', '$stateParams', AddressEditCtrl])
  //企业资源
  .controller('QyzzCtrl',QyzzCtrl)
  .controller('QyryCtrl',QyryCtrl)
  .controller('GzhjCtrl',GzhjCtrl)
  .controller('SyzttCtrl',SyzttCtrl)
  .controller('QyzyCtrl',QyzyCtrl)
  //个人账号
  .controller('PzhxxCtrl',PzhxxCtrl)
  .controller('PzhpersonCtrl',['$http',PzhpersonCtrl])
  .controller('PzhxxEduCtrl',PzhxxEduCtrl)
  .controller('PzhxxWorkCtrl',PzhxxWorkCtrl)
  .controller('EducationCtrl',['$http',EducationCtrl])
  //公司账号
  .controller("WorkCtrl",WorkCtrl)
  // .controller("PersonCtrl",['$http',PersonCtrl])
  .controller("CompanyCtrl",['$http',CompanyCtrl])
  .controller("YqljCtrl",['$http',YqljCtrl])
  // 站内信
  .controller('EmailCtrl',['$http', '$stateParams', '$scope', EmailCtrl])
  .controller('OutboxCtrl',['$http', '$scope', OutboxCtrl])  
  .controller('InboxCtrl',['$http', InboxCtrl])  
  .controller('WriteCtrl',['$http', WriteCtrl])  
  .controller('EmailDetCtrl',EmailDetCtrl)  
     
