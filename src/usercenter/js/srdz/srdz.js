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
import FbCtrl from './controllers/FbCtrl.js';
import YfbCtrl from './controllers/YfbCtrl.js';
import FuwsCtrl from './controllers/FuwsCtrl.js';
import YgzCtrl from './controllers/YgzCtrl.js';
import PygzCtrl from './controllers/PygzCtrl.js';
import BuyerCtrl from './controllers/BuyerCtrl.js';
import SellerCtrl from './controllers/SellerCtrl.js';
import BuyerAllCtrl from './controllers/BuyerControllers/BuyerAllCtrl'; // 买家订单
import BuyerDfhCtrl from './controllers/BuyerControllers/BuyerDfhCtrl';
import BuyerDfkCtrl from './controllers/BuyerControllers/BuyerDfkCtrl';
import BuyerDpjCtrl from './controllers/BuyerControllers/BuyerDpjCtrl';
import BuyerDshCtrl from './controllers/BuyerControllers/BuyerDshCtrl';
import SellerAllCtrl from './controllers/SellerControllers/SellerAllCtrl'; // 卖家订单
import SellerDfhCtrl from './controllers/SellerControllers/SellerDfhCtrl';
import SellerDfkCtrl from './controllers/SellerControllers/SellerDfkCtrl';
import SellerDshCtrl from './controllers/SellerControllers/SellerDshCtrl';
import SellerYshCtrl from './controllers/SellerControllers/SellerYshCtrl';
import WlCtrl from './controllers/WlCtrl.js'; // 物流保存
import DetailCtrl from './controllers/DetailCtrl.js'; // 物流保存


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
    // 根据个人中心类型，判断默认加载哪个路由
    $urlRouterProvider.otherwise(logintype === 1 ? '/cygz' : '/pfb');
    // $urlRouterProvider.otherwise('/pfb');
    $stateProvider
      .state('pfb', {
        url: '/pfb',
        templateUrl: '/partials/srdz/partial-pfb.html',
        controller: 'FbCtrl as fbVm'
      })
      .state('pyfb', {
        url: '/pyfb',
        templateUrl: '/partials/srdz/partial-pyfb.html',
        controller: 'YfbCtrl as yfbVm'
      })
      .state('pfws', {
        url: '/pfws',
        templateUrl: '/partials/srdz/partial-pfws.html',
        controller: 'FuwsCtrl as fusVm'
      })
      .state('pygz', {
        url: '/pygz',
        templateUrl: '/partials/srdz/partial-pygz.html',
        controller: 'YgzCtrl as ygzVm'
      })
      .state('cygz', {
        url: '/cygz',
        templateUrl: '/partials/srdz/partial-ygz.html',
        controller: 'PygzCtrl as pygzVm'
      })
      .state('buyer', {
        url: '/buyer',
        templateUrl: '/partials/srdz/partial-buyer.html',
        controller: 'BuyerCtrl as buyerVm'
      })
      .state('buyer.all', {
        url: '/all',
        templateUrl: '/partials/srdz/BuyerOrder/partial-buyer-all.html',
        controller: 'BuyerAllCtrl as buyerAllVm'
      })
      .state('buyer.dfh', {
        url: '/dfh',
        templateUrl: '/partials/srdz/BuyerOrder/partial-buyer-dfh.html',
        controller: 'BuyerDfhCtrl as buyerDfhVm'
      })
      .state('buyer.dfk', {
        url: '/dfk',
        templateUrl: '/partials/srdz/BuyerOrder/partial-buyer-dfk.html',
        controller: 'BuyerDfkCtrl as buyerDfkVm'
      })
      .state('buyer.dpj', {
        url: '/dpj',
        templateUrl: '/partials/srdz/BuyerOrder/partial-buyer-dpj.html',
        controller: 'BuyerDpjCtrl as buyerDpjVm'
      })
      .state('buyer.dsh', {
        url: '/dsh',
        templateUrl: '/partials/srdz/BuyerOrder/partial-buyer-dsh.html',
        controller: 'BuyerDshCtrl as buyerDshVm'
      })
      .state('seller', {
        url: '/seller',
        templateUrl: '/partials/srdz/partial-seller.html',
        controller: 'SellerCtrl as sellerVm'
      })
      .state('seller.all', {
        url: '/all',
        templateUrl: '/partials/srdz/SellerOrder/partial-seller-all.html',
        controller: 'SellerAllCtrl as sellerAllVm'
      })
      .state('seller.dfh', {
        url: '/dfh',
        templateUrl: '/partials/srdz/SellerOrder/partial-seller-dfh.html',
        controller: 'SellerDfhCtrl as sellerDfhVm'
      })
      .state('seller.dfk', {
        url: '/dfk',
        templateUrl: '/partials/srdz/SellerOrder/partial-seller-dfk.html',
        controller: 'SellerDfkCtrl as sellerDfkVm'
      })
      .state('seller.dsh', {
        url: '/dsh',
        templateUrl: '/partials/srdz/SellerOrder/partial-seller-dsh.html',
        controller: 'SellerDshCtrl as sellerDshVm'
      })
      .state('seller.ysh', {
        url: '/ysh',
        templateUrl: '/partials/srdz/SellerOrder/partial-seller-ysh.html',
        controller: 'SellerYshCtrl as sellerYshVm'
      })
      .state('wl', {
        url: '/wl/:number',
        templateUrl: '/partials/srdz/partial-wl.html',
        controller: 'WlCtrl as WlVm'
      })
      .state('detail', {
        url: '/detail/:number',
        templateUrl: '/partials/srdz/partial-detail.html',
        controller: 'DetailCtrl as detailVm'
      })

  }])
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  .controller('MainCtrl', [MainCtrl])
  .controller('FbCtrl', ['$http', FbCtrl])
  .controller('YfbCtrl', [YfbCtrl])
  .controller('FuwsCtrl', ['$http', FuwsCtrl])
  .controller('YgzCtrl', ['$http', YgzCtrl])
  .controller('PygzCtrl', ['$http', PygzCtrl])
  .controller('BuyerCtrl', ['$http', BuyerCtrl])
  .controller('SellerCtrl', ['$http', SellerCtrl])
  // 买家订单
  .controller('BuyerAllCtrl', ['$http', BuyerAllCtrl])
  .controller('BuyerDfhCtrl', ['$http', BuyerDfhCtrl])
  .controller('BuyerDfkCtrl', ['$http', BuyerDfkCtrl])
  .controller('BuyerDpjCtrl', ['$http', BuyerDpjCtrl])
  .controller('BuyerDshCtrl', ['$http', BuyerDshCtrl])
  // 卖家订单
  .controller('SellerAllCtrl', ['$http', SellerAllCtrl])
  .controller('SellerDfhCtrl', ['$http', SellerDfhCtrl])
  .controller('SellerDfkCtrl', ['$http', SellerDfkCtrl])
  .controller('SellerDshCtrl', ['$http', SellerDshCtrl])
  .controller('SellerYshCtrl', ['$http', SellerYshCtrl])
  // 物流保存
  .controller('WlCtrl', ['$http', '$stateParams', WlCtrl])
  .controller('DetailCtrl', ['$http', '$stateParams', DetailCtrl]);
export default app;
