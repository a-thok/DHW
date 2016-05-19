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
// 企业版 已发布项目
import YfbCtrl from './controllers/YfbCtrl.js';
import BmzCtrl from './controllers/Yfb/BmzCtrl.js';
import ShzCtrl from './controllers/Yfb/ShzCtrl.js';
import DtgCtrl from './controllers/Yfb/DtgCtrl.js';
import JxzCtrl from './controllers/Yfb/JxzCtrl.js';
import YgqCtrl from './controllers/Yfb/YgqCtrl.js';
import ShsbCtrl from './controllers/Yfb/ShsbCtrl.js';
import YwjCtrl from './controllers/Yfb/YwjCtrl.js';



import GyzCtrl from './controllers/GyzCtrl.js';
import JxgyzCtrl from './controllers/JxgyzCtrl.js';
// 子项目列表
import ZxmCtrl from './controllers/ZxmCtrl.js';

// 个人版 我的单子
import MydzCtrl from './controllers/MydzCtrl.js';
import YjdCtrl from './controllers/Mydz/YjdCtrl.js';
import YgyCtrl from './controllers/Mydz/YgyCtrl.js';
import YwcCtrl from './controllers/Mydz/YwcCtrl.js';
// 公司账号 我的单子
import CmydzCtrl from './controllers/CmydzCtrl.js';
import CyjdCtrl from './controllers/CMydz/CyjdCtrl.js';
import CygyCtrl from './controllers/CMydz/CygyCtrl.js';
import CywcCtrl from './controllers/CMydz/CywcCtrl.js';

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
    // 企业版
    .state('yfb', {
      url: '/yfb',
      templateUrl: '/partials/zb/partial-yfb.html',
      controller: 'YfbCtrl as yfbVm'
    })
    // 审核中
    .state('yfb.shz', {
      url: '/shz',
      templateUrl: '/partials/zb/Yfb/partial-shz.html',
      controller: 'ShzCtrl as shzVm'
    })
    // 报名中
    .state('yfb.bmz', {
      url: '/bmz',
      templateUrl: '/partials/zb/Yfb/partial-bmz.html',
      controller: 'BmzCtrl as bmzVm'
    })
    // 待资金托管
    .state('yfb.dtg', {
      url: '/dtg',
      templateUrl: '/partials/zb/Yfb/partial-dtg.html',
      controller: 'DtgCtrl as dtgVm'
    })
    // 进行中的项目
    .state('yfb.jxz', {
      url: '/jxz',
      templateUrl: '/partials/zb/Yfb/partial-jxz.html',
      controller: 'JxzCtrl as jxzVm'
    })
    // 已过期的项目
    .state('yfb.ygq', {
      url: '/ygq',
      templateUrl: '/partials/zb/Yfb/partial-ygq.html',
      controller: 'YgqCtrl as ygqVm'
    })
    // 已完结
    .state('yfb.ywj', {
      url: '/ywj',
      templateUrl: '/partials/zb/Yfb/partial-ywj.html',
      controller: 'YwjCtrl as ywjVm'
    })
    .state('yfb.shsb', {
      url: '/shsb',
      templateUrl: '/partials/zb/Yfb/partial-shsb.html',
      controller: 'ShsbCtrl as shsbVm'
    })
    // 查看雇佣者
    .state('gyz', {
      url: '/gyz/:id',
      templateUrl: '/partials/zb/partial-gyz.html',
      controller: 'GyzCtrl as gyzVm'
    })
    .state('jxgyz', {
      url: '/jxgyz/:id',
      templateUrl: '/partials/zb/partial-jxgyz.html',
      controller: 'JxgyzCtrl as jxgyzVm'
    })
    .state('zxm', {
      url: '/zxm/:id',
      templateUrl: '/partials/zb/partial-zxm.html',
      controller: 'ZxmCtrl as zxmVm'
    })
    // 个人版 我的单子
    .state('mydz', {
      url: '/mydz',
      templateUrl: '/partials/zb/partial-mydz.html',
      controller: 'MydzCtrl as mydzVm'
    })
    // 已接单列表
    .state('mydz.yjd', {
      url: '/yjd',
      templateUrl: '/partials/zb/Mydz/partial-yjd.html',
      controller: 'YjdCtrl as yjdVm'
    })
    // 已被雇佣列表
    .state('mydz.ygy', {
      url: '/ygy',
      templateUrl: '/partials/zb/Mydz/partial-ygy.html',
      controller: 'YgyCtrl as ygyVm'
    })
    // 已完成列表
    .state('mydz.ywc', {
      url: '/ywc',
      templateUrl: '/partials/zb/Mydz/partial-ywc.html',
      controller: 'YwcCtrl as ywcVm'
    })
   // 企业版 我的单子
    .state('cmydz', {
      url: '/cmydz',
      templateUrl: '/partials/zb/partial-cmydz.html',
      controller: 'CmydzCtrl as cmydzVm'
    })
    // 已接单
    .state('cmydz.cyjd', {
      url: '/cyjd',
      templateUrl: '/partials/zb/CMydz/partial-cyjd.html',
      controller: 'CyjdCtrl as cyjdVm'
    })
    // 已被雇佣
    .state('cmydz.cygy', {
      url: '/cygy',
      templateUrl: '/partials/zb/CMydz/partial-cygy.html',
      controller: 'CygyCtrl as cygyVm'
    })
    // 已完成列表
    .state('cmydz.cywc', {
      url: '/cywc',
      templateUrl: '/partials/zb/CMydz/partial-cywc.html',
      controller: 'CywcCtrl as cywcVm'
    });
  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  .controller('MainCtrl', [MainCtrl])
  // 子项目
  .controller('ZxmCtrl', ['$http', '$stateParams', ZxmCtrl])
  // 个人账号 我的单子
  .controller('MydzCtrl', [MydzCtrl])
  .controller('YjdCtrl', [YjdCtrl])
  .controller('YgyCtrl', ['$http', YgyCtrl])
  .controller('YwcCtrl', [YwcCtrl])
  // 公司账号 我的单子
  .controller('CmydzCtrl', [CmydzCtrl])
  .controller('CyjdCtrl', [CyjdCtrl])
  .controller('CygyCtrl', ['$http', CygyCtrl])
  .controller('CywcCtrl', [CywcCtrl])
  .controller('FbCtrl', ['$http', FbCtrl]) // 发布项目控制器
  .controller('ScCtrl', ['$http', ScCtrl]) // 收藏控制器
  // 公司 已发布
  .controller('YfbCtrl', ['$http', YfbCtrl])
  .controller('ShzCtrl', ['$http', ShzCtrl])
  .controller('BmzCtrl', ['$http', BmzCtrl])
  .controller('DtgCtrl', ['$http', DtgCtrl])
  .controller('JxzCtrl', ['$http', JxzCtrl])
  .controller('YgqCtrl', ['$http', YgqCtrl])
  .controller('ShsbCtrl', ['$http', ShsbCtrl])
  .controller('YwjCtrl', ['$http', YwjCtrl])
  .controller('GyzCtrl', ['$http', '$stateParams', GyzCtrl])
  .controller('JxgyzCtrl', ['$http', '$stateParams', JxgyzCtrl]);
export default app;
