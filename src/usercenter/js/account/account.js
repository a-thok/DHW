import 'trumbowyg/dist/ui/trumbowyg.css';
import 'trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.css';

import angular from 'angular';

// 依赖模块
import '../directives/listComponents.js';
import '../directives/modalComponents.js';  // 表单信息提示弹框 庄
import '../directives/formComponents.js';

// 指令

import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';
import sideBar from '../directives/userCenter/sideBar.js';
import switchType from '../directives/userCenter/switchType.js';

//  控制器
import MainCtrl from './controllers/MainCtrl.js';
// 控制器--账号信息
import ZhxxCtrl from './controllers/ZhxxCtrl.js';
import GsfwCtrl from './controllers/GsfwCtrl.js';
import FwlbCtrl from './controllers/FwlbCtrl.js';
import ServerDetailCtrl from './controllers/ServerDetailCtrl.js';
import GsalCtrl from './controllers/GsalCtrl.js';
import AllbCtrl from './controllers/AllbCtrl.js';
import CasesDetailCtrl from './controllers/CasesDetailCtrl.js';
import QyzzCtrl from './controllers/QyzyControllers/QyzzCtrl.js';
import QyryCtrl from './controllers/QyzyControllers/QyryCtrl.js';
import GzhjCtrl from './controllers/QyzyControllers/GzhjCtrl.js';
import SyzttCtrl from './controllers/QyzyControllers/SyzttCtrl.js';
import QyzyCtrl from './controllers/QyzyCtrl.js';
import ZtxgCtrl from './controllers/ZtxgCtrl.js';  // 主题修改
//  站内信
import EmailCtrl from './controllers/EmailCtrl.js';
import InboxCtrl from './controllers/EmailControllers/InboxCtrl.js';
import OutboxCtrl from './controllers/EmailControllers/OutboxCtrl.js';
import WriteCtrl from './controllers/EmailControllers/WriteCtrl.js';
import EmailDetCtrl from './controllers/EmailControllers/EmailDetCtrl.js';
// 个人版
import PzhxxCtrl from './controllers/PzhxxCtrl.js';
import PzhpersonCtrl from './controllers/PzhxxControllers/PzhpersonCtrl.js';
import PzhxxEduCtrl from './controllers/PzhxxControllers/PzhxxEduCtrl.js';
import PzhxxWorkCtrl from './controllers/PzhxxControllers/PzhxxWorkCtrl.js';
import pavatarCtrl from './controllers/PzhxxControllers/pavatarCtrl.js';  // 个人账户上传头像
// 企业版
import EducationCtrl from './controllers/ZhxxControllers/EducationCtrl.js';
import WorkCtrl from './controllers/ZhxxControllers/WorkCtrl.js';
import CompanyCtrl from './controllers/ZhxxControllers/CompanyCtrl.js';
import avatarCtrl from './controllers/ZhxxControllers/avatarCtrl.js';  // 上传头像
import GsdtCtrl from './controllers/GsdtCtrl.js';
import YqljCtrl from './controllers/YqljCtrl.js';
import GsdtFbCtrl from './controllers/GsdtControllers/GsdtFbCtrl.js';
import GsdtlistCtrl from './controllers/GsdtControllers/GsdtlistCtrl.js';
// 会计认证体系
import KjrzCtrl from './controllers/KjrzControllers/KjrzCtrl.js';
import KjrzListCtrl from './controllers/KjrzControllers/KjrzListCtrl.js';
// 收货地址管理
import AddressCtrl from './controllers/AddressControllers/AddressCtrl.js';
import AddressEditCtrl from './controllers/AddressControllers/AddressEditCtrl.js';
// 个人转企业用户
import PersonToCompanyCtrl from './controllers/PersonToCompanyCtrl.js';
// 相册
import AlbumCtrl from './controllers/AlbumCtrl.js';
// 企业发展历程发布
import GslcCtrl from './controllers/GslcCtrl.js';
let app = angular.module('userCenter', ['ngAnimate', 'ui.router', 'listComponents', 'formComponents', 'modalComponents']);
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
    $stateProvider
      .state('zhxx', {
        url: '/zhxx',
        templateUrl: '/partials/account/partial-zhxx.html',    // 公司账号信息主控制器
        controller: 'ZhxxCtrl as zhxxVm'
      })
      .state('zhxx.company', {
        url: '/company',
        templateUrl: '/partials/account/partial-zhxx-company.html',  // 公司账号--公司信息
        controller: 'CompanyCtrl as companyVm'
      })
      .state('zhxx.photo', {
        url: '/photo',
        templateUrl: '/partials/account/partial-zhxx-photo.html', // 公司账号--上传头像
        controller: 'avatarCtrl as avatarVm'
      })
      .state('zhxx.education', {
        url: '/education',
        templateUrl: '/partials/account/partial-zhxx-education.html',  // 公司账号--教育经历
        controller: 'EducationCtrl as educationVm'
      })
      .state('zhxx.experience', {
        url: '/experience',
        templateUrl: '/partials/account/partial-zhxx-experience.html',  // 公司账号--工作经历
        controller: 'WorkCtrl as workVm'
      })
      .state('pzhxx', {
        url: '/pzhxx',
        templateUrl: '/partials/account/partial-pzhxx.html',  // 个人账号
        controller: 'PzhxxCtrl as pzhxxVm'
      })
      .state('pzhxx.person', {
        url: '/person',
        templateUrl: '/partials/account/partial-pzhperson.html',  // 个人账号--基本信息
        controller: 'PzhpersonCtrl as pzhpersonVm'
      })
      .state('pzhxx.photo', {
        url: '/photo',
        templateUrl: '/partials/account/partial-pzhxx-photo.html',  // 个人账号--上传头像
        controller: 'pavatarCtrl as pavatarVm'
      })
      .state('pzhxx.education', {
        url: '/education',
        templateUrl: '/partials/account/partial-pzhxx-education.html',  // 个人账号--教育经历
        controller: 'PzhxxEduCtrl as pzhxxeduVm'
      })
      .state('pzhxx.experience', {
        url: '/experience',
        templateUrl: '/partials/account/partial-pzhxx-experience.html',  // 个人账号--工作经历
        controller: 'PzhxxWorkCtrl as pzhxxworkVm'
      })
      .state('gsfu', {
        url: '/gsfu',
        templateUrl: '/partials/account/partial-gsfu.html',   // 公司服务
        controller: 'GsfwCtrl as gsfwVm'
      })
      .state('fwlb', {
        url: '/fwlb',
        templateUrl: '/partials/account/partial-fwlb.html',   // 服务列表
        controller: 'FwlbCtrl as fwlbVm'
      })
      .state('serverDetail', {
        url: '/serverDetail/:id',
        templateUrl: '/partials/account/partial-serverDetail.html',   // 服务列表详情页
        controller: 'ServerDetailCtrl as serverdetailVm'
      })
      .state('gsal', {
        url: '/gsal',
        templateUrl: '/partials/account/partial-gsal.html',   // 公司案例
        controller: 'GsalCtrl as gsalVm'
      })
      .state('allb', {
        url: '/allb',
        templateUrl: '/partials/account/partial-allb.html',   // 公司案例列表
        controller: 'AllbCtrl as allbVm'
      })
      .state('yqlj', {
        url: '/yqlj',
        templateUrl: '/partials/account/partial-yqlj.html',   // 友情链接
        controller: 'YqljCtrl as yqljVm'
      })
      .state('ztxg', {
        url: '/ztxg',
        templateUrl: '/partials/account/partial-ztxg.html',   // 主题修改
        controller: 'ZtxgCtrl as ztxgVm'
      })
      .state('casesDetail', {
        url: '/casesDetail/:id',
        templateUrl: '/partials/account/partial-casesDetail.html',  // 公司案例列表详情页
        controller: 'CasesDetailCtrl as casesdetailVm'
      })
      .state('qyzy', {
        url: '/qyzy',
        templateUrl: '/partials/account/partial-qyzy.html',  // 企业资源
        controller: 'QyzyCtrl as qyzyVm'
      })
      .state('qyzy.qyzz', {
        url: '/qyzz',
        templateUrl: '/partials/account/partial-qyzz.html',  // 企业资质
        controller: 'QyzzCtrl as qyzzVm'
      })
      .state('qyzy.qyry', {
        url: '/qyry',
        templateUrl: '/partials/account/partial-qyry.html',  // 企业荣誉
        controller: 'QyryCtrl as qyryVm'
      })
      .state('qyzy.gzhj', {
        url: '/gzhj',
        templateUrl: '/partials/account/partial-gzhj.html',  // 工作环境
        controller: 'GzhjCtrl as gzhjVm'
      })
      .state('qyzy.syztt', {
        url: '/syztt',
        templateUrl: '/partials/account/partial-syztt.html',  // 首页主题图
        controller: 'SyzttCtrl as syzttVm'
      })
      .state('email', {
        url: '/email',
        templateUrl: '/partials/account/partial-email.html',  // 站内信
        controller: 'EmailCtrl as emailVm'
      })
      .state('email.inbox', {
        url: '/inbox',
        templateUrl: '/partials/account/email/partial-inbox.html',  // 站内信
        controller: 'InboxCtrl as inboxVm'
      })
      .state('email.outbox', {
        url: '/outbox',
        templateUrl: '/partials/account/email/partial-outbox.html',  // 站内信
        controller: 'OutboxCtrl as outboxVm'
      })
      .state('email.write', {
        url: '/write',
        templateUrl: '/partials/account/email/partial-write.html',  // 站内信
        controller: 'WriteCtrl as writeVm'
      })
      .state('email.detail', {
        url: '/detail/:id',
        templateUrl: '/partials/account/email/partial-emailDetail.html',  // 站内信
        controller: 'EmailDetCtrl as emailDetVm'
      })
      .state('kjrz', {
        url: '/kjrz',
        templateUrl: '/partials/account/kjrz/partial-kjrz.html',  // 认证体系
        controller: 'KjrzCtrl as kjrzVm'
      })
      .state('kjrzlist', {
        url: '/kjrzlist',
        templateUrl: '/partials/account/kjrz/partial-kjrz-list.html',
        controller: 'KjrzListCtrl as kjrzlistVm'
      })
      .state('addresslist', {
        url: '/addresslist',
        templateUrl: '/partials/account/addressList/addresslist.html',
        controller: 'AddressCtrl as addressVm'
      })
      .state('addressedit', {
        url: '/addressedit/:id',
        templateUrl: '/partials/account/addressList/addressedit.html',
        controller: 'AddressEditCtrl as addresseditVm'
      })
      .state('gsdt', {
        url: '/gsdt',
        templateUrl: '/partials/account/partial-gsdt.html',
        controller: 'GsdtCtrl as gsdtVm'
      })
      .state('gsdt.fb', {
        url: '/fb',
        templateUrl: '/partials/account/gsdt/partials-gsdtfb.html',
        controller: 'GsdtFbCtrl as gsdtfbVm'
      })
      .state('gsdt.list', {
        url: '/list',
        templateUrl: '/partials/account/gsdt/partials-gsdtlist.html',
        controller: 'GsdtlistCtrl as gsdtlistVm'
      })
      .state('ptoc', {
        url: '/ptoc',
        templateUrl: '/partials/account/partial-ptoc.html',
        controller: 'PersonToCompanyCtrl as persontocompanyVm'
      })
      .state('gslc', {
        url: '/gslc',
        templateUrl: '/partials/account/partial-gslc.html',
        controller: 'GslcCtrl as gslcVm'
      })
      .state('album', {
        url: '/album',
        templateUrl: '/partials/account/partial-album.html',
        controller: 'AlbumCtrl as albumVm'
      });
  }])
  .directive('showAllModules', showAllModules)
  .directive('sideBar', sideBar)
  .directive('navSlide', navSlide)
  .directive('switchType', switchType)


  .controller('MainCtrl', ['$location', MainCtrl])
  // 企业版
  .controller('ZhxxCtrl', ZhxxCtrl)
  .controller('GsfwCtrl', ['$http', GsfwCtrl])
  .controller('FwlbCtrl', FwlbCtrl)
  .controller('ServerDetailCtrl', ['$http', '$stateParams', ServerDetailCtrl])
  .controller('GsalCtrl', ['$http', GsalCtrl])
  .controller('AllbCtrl', AllbCtrl)
  .controller('CasesDetailCtrl', ['$http', '$stateParams', CasesDetailCtrl])
  .controller('ZtxgCtrl', ['$scope', '$http', ZtxgCtrl])
  .controller('avatarCtrl', ['$scope', '$http', avatarCtrl])
  .controller('pavatarCtrl', pavatarCtrl)
  .controller('GsdtCtrl', ['$http', GsdtCtrl])
  .controller('GsdtFbCtrl', ['$http', GsdtFbCtrl])
  .controller('GsdtlistCtrl', ['$http', GsdtlistCtrl])
  // 公司历程
  .controller('GslcCtrl', ['$http', GslcCtrl])
  // 会计认证体系控制器
  .controller('KjrzCtrl', ['$http', KjrzCtrl])
  .controller('KjrzListCtrl', KjrzListCtrl)
  // 收货地址管理
  .controller('AddressCtrl', ['$http', AddressCtrl])
  .controller('AddressEditCtrl', ['$http', '$stateParams', AddressEditCtrl])
  // 企业资源
  .controller('QyzzCtrl', QyzzCtrl)
  .controller('QyryCtrl', QyryCtrl)
  .controller('GzhjCtrl', GzhjCtrl)
  .controller('SyzttCtrl', SyzttCtrl)
  .controller('QyzyCtrl', QyzyCtrl)
  // 个人账号
  .controller('PzhxxCtrl', PzhxxCtrl)
  .controller('PzhpersonCtrl', ['$http', PzhpersonCtrl])
  .controller('PzhxxEduCtrl', PzhxxEduCtrl)
  .controller('PzhxxWorkCtrl', PzhxxWorkCtrl)
  .controller('EducationCtrl', ['$http', EducationCtrl])
  .controller('PersonToCompanyCtrl', ['$http', PersonToCompanyCtrl])
  // 公司账号
  .controller('WorkCtrl', WorkCtrl)
  .controller('CompanyCtrl', ['$http', CompanyCtrl])
  .controller('YqljCtrl', ['$http', YqljCtrl])
  // 站内信
  .controller('EmailCtrl', ['$http', '$stateParams', '$scope', EmailCtrl])
  .controller('OutboxCtrl', ['$http', '$scope', OutboxCtrl])
  .controller('InboxCtrl', ['$http', InboxCtrl])
  .controller('WriteCtrl', ['$http', '$location', WriteCtrl])
  .controller('EmailDetCtrl', EmailDetCtrl)
  // 相册
  .controller('AlbumCtrl', AlbumCtrl);
