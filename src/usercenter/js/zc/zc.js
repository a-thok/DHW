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
// 已发布项目查询列表
import HasfbCtrl from './controllers/HasfbCtrl.js';
// 关注列表
import GzlistCtrl from './controllers/GzlistCtrl.js';
// 支持列表
import TzlistCtrl from './controllers/TzlistCtrl.js';
// 个人关注列表
import PgzlistCtrl from './controllers/PgzlistCtrl.js';
// 个人支持列表
import PzclistCtrl from './controllers/PzclistCtrl.js';
// 已发布列表预览
import ListdetailCtrl from './controllers/ListdetailCtrl.js';
// 订单列表
import Orderlist from './controllers/Orderlist.js';
import DshCtrl from './controllers/ListControllers/DshCtrl.js';
import DfkCtrl from './controllers/ListControllers/DfkCtrl.js';
import DfhCtrl from './controllers/ListControllers/DfhCtrl.js';
import DpjCtrl from './controllers/ListControllers/DpjCtrl.js';
// 卖家订单
import SellerCtrl from './controllers/SellerCtrl.js';
import s_YshCtrl from './controllers/sellerControllers/s_YshCtrl.js';
import s_DshCtrl from './controllers/sellerControllers/s_DshCtrl.js';
import s_DfhCtrl from './controllers/sellerControllers/s_DfhCtrl.js';
import s_AllCtrl from './controllers/sellerControllers/s_AllCtrl.js';
// 物流保存
import WlCtrl from './controllers/WlCtrl.js';
import FbCtrl from './controllers/FbCtrl.js';
import BaseCtrl from './controllers/BaseCtrl.js';
import DetailCtrl from './controllers/DetailCtrl.js';
import PayBackCtrl from './controllers/PayBackCtrl.js';
import ProjectCtrl from './controllers/ProjectCtrl.js';
import PreviewCtrl from './controllers/PreviewCtrl.js';
// 项目进展发布
import PropresCtrl from './controllers/PropresCtrl.js';
let app = angular.module('userCenter', ['ngAnimate', 'ui.router',
  'listComponents', 'formComponents', 'ui.bootstrap.pagination']);
app
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    // 从cookie获取当前个人中心类型（企业或个人）
    let logintype;
    let cookies = document.cookie.split('; ');
    cookies.forEach((cookie) => {
      if (cookie.indexOf('logintype') !== -1) {
        logintype = cookie.indexOf('1') !== -1 ? 1 : 2;
      }
    });
    // 根据个人中心类型，判断默认加载哪个路由
    $urlRouterProvider.otherwise(logintype === 1 ? '/pgzlist' : '/fb/basic');
    $urlRouterProvider.otherwise('/fb/basic');
    $stateProvider
      .state('ProjectLaunch', {
        url: '/fb',
        templateUrl: '/partials/zc/partial-fb.html',
        controller: 'FbCtrl as fbVm'
      })
      .state('ProjectLaunch.basic', {
        url: '/basic',
        templateUrl: '/partials/zc/partial-fb-basic.html',
        controller: 'BaseCtrl as baseVm'
      })
      .state('ProjectLaunch.project', {
        url: '/project',
        templateUrl: '/partials/zc/partial-fb-project.html',
        controller: 'ProjectCtrl as projectVm'
      })
      .state('ProjectLaunch.detail', {
        url: '/detail',
        templateUrl: '/partials/zc/partial-fb-detail.html',
        controller: 'DetailCtrl as detailVm'
      })
      .state('ProjectLaunch.payback', {
        url: '/payback',
        templateUrl: '/partials/zc/partial-fb-payback.html',
        controller: 'PayBackCtrl as paybackVm'
      })
      .state('ProjectLaunch.preview', {
        url: '/preview',
        templateUrl: '/partials/zc/partial-fb-preview.html',
        controller: 'PreviewCtrl as previewVm',
      })
      .state('hasfb', {
        url: '/hasfb',
        templateUrl: '/partials/zc/partial-hasfb.html',
        controller: 'HasfbCtrl as hasfbVm'
      })
      .state('gzlist', {
        url: '/gzlist',
        templateUrl: '/partials/zc/partial-gzlist.html',
        controller: 'GzlistCtrl as gzlistVm'
      })
      .state('tzlist', {
        url: '/tzlist',
        templateUrl: '/partials/zc/partial-tzlist.html',
        controller: 'TzlistCtrl as tzlistVm'
      })
      .state('pgzlist', {
        url: '/pgzlist',
        templateUrl: '/partials/zc/partial-pgzlist.html',
        controller: 'PgzlistCtrl as pgzlistVm'
      })
      .state('pzclist', {
        url: '/pzclist',
        templateUrl: '/partials/zc/partial-pzclist.html',
        controller: 'PzclistCtrl as pzclistVm'
      })
      .state('wl', {
        url: '/wl',
        templateUrl: '/partials/zc/partial-wl.html',
        controller: 'WlCtrl as WlVm'
      })
      .state('orderlist', {
        url: '/orderlist',
        templateUrl: '/partials/zc/partial-orderlist.html',
        controller: 'Orderlist as orderlistVm'
      })
      .state('orderlist.dfh', {
        url: '/dfh',
        templateUrl: '/partials/zc/buyerorder/partial-orderlist-dfh.html',
        controller: 'DfhCtrl as dfhVm'
      })
      .state('orderlist.dfk', {
        url: '/dfk',
        templateUrl: '/partials/zc/buyerorder/partial-orderlist-dfk.html',
        controller: 'DfkCtrl as dfkVm'
      })
      .state('orderlist.dsh', {
        url: '/dsh',
        templateUrl: '/partials/zc/buyerorder/partial-orderlist-dsh.html',
        controller: 'DshCtrl as dshVm'
      })
      .state('orderlist.dpj', {
        url: '/dpj',
        templateUrl: '/partials/zc/buyerorder/partial-orderlist-dpj.html',
        controller: 'DpjCtrl as dpjVm'
      })
      .state('seller', {
        url: '/seller/:id',
        templateUrl: '/partials/zc/partial-seller.html',
        controller: 'SellerCtrl as sellerVm'
      })
      .state('seller.all', {
        url: '/all',
        templateUrl: '/partials/zc/sellerorder/partial-seller-all.html',
        controller: 's_AllCtrl as s_AllVm'
      })
      .state('seller.dfh', {
        url: '/dfh',
        templateUrl: '/partials/zc/sellerorder/partial-seller-dfh.html',
        controller: 's_DfhCtrl as s_DfhVm'
      })
      .state('seller.dsh', {
        url: '/dsh',
        templateUrl: '/partials/zc/sellerorder/partial-seller-dsh.html',
        controller: 's_DshCtrl as s_DshVm'
      })
      .state('seller.ysh', {
        url: '/ysh',
        templateUrl: '/partials/zc/sellerorder/partial-seller-ysh.html',
        controller: 's_YshCtrl as s_YshVm'
      })
      .state('listdetail', {
        url: '/listdetail',
        templateUrl: '/partials/zc/partial-listdetail.html',
        controller: 'ListdetailCtrl as listdetailVm'
      })
      .state('ssxz', {
        url: '/ssxz',
        templateUrl: '/partials/zc/partial-ssxz.html',
        controller: 'SsCtrl as ssVm'
      })
      // 项目进展发布
      .state('xmjz', {
        url: '/xmjz/:id',
        templateUrl: '/partials/zc/partial-xmjz.html',
        controller: 'PropresCtrl as propresVm'
      });
  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  .controller('MainCtrl', [MainCtrl])
  .controller('HasfbCtrl', [HasfbCtrl])
  .controller('GzlistCtrl', ['$http', GzlistCtrl])
  .controller('TzlistCtrl', [TzlistCtrl])
  .controller('PgzlistCtrl', ['$http', PgzlistCtrl])
  .controller('PzclistCtrl', [PzclistCtrl])
  .controller('Orderlist', [Orderlist])
  // 订单列表
  .controller('DshCtrl', [DshCtrl])
  .controller('DfkCtrl', [DfkCtrl])
  .controller('DfhCtrl', [DfhCtrl])
  .controller('DpjCtrl', [DpjCtrl])
  // 卖家订单
  .controller('SellerCtrl', ['$stateParams', SellerCtrl])
  .controller('s_DshCtrl', ['$scope', s_DshCtrl])
  .controller('s_DfhCtrl', ['$scope', s_DfhCtrl])
  .controller('s_YshCtrl', ['$scope', s_YshCtrl])
  .controller('s_AllCtrl', ['$scope', s_AllCtrl])
  // 物流保存
  .controller('WlCtrl', ['$http', WlCtrl])
  // 项目进展发布
  .controller('PropresCtrl', ['$http', '$stateParams', PropresCtrl])

  .controller('FbCtrl', ['$scope', '$http', '$state', '$location', FbCtrl])
  .controller('BaseCtrl', ['$scope', '$http', BaseCtrl])
  .controller('ProjectCtrl', ['$scope', '$http', ProjectCtrl])
  .controller('DetailCtrl', ['$scope', '$http', DetailCtrl])
  .controller('PayBackCtrl', ['$scope', '$http', PayBackCtrl])
  .controller('PreviewCtrl', ['$scope', '$http', '$location', PreviewCtrl])
  .controller('ListdetailCtrl', ['$scope', '$http', '$location', ListdetailCtrl]);
export default app;
