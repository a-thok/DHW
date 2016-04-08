import $ from 'jquery';
import angular from 'angular';

//依赖模块
import pagination from '../directives/pagination.js';
import listComponents  from '../directives/listComponents.js';
import formComponents from '../directives/formComponents';
// 指令
import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';
import sideBar from '../directives/userCenter/sideBar.js';
import switchType from '../directives/userCenter/switchType.js';

// 控制器
import MainCtrl from './controllers/MainCtrl.js'
import FbCtrl from './controllers/FbCtrl.js'
import SplbCtrl from './controllers/SplbCtrl.js'
import ScCtrl from './controllers/ScCtrl.js'
import JyzCtrl from './controllers/SplbControllers/JyzCtrl.js'
import YjyCtrl from './controllers/SplbControllers/YjyCtrl.js'
import YxCtrl from './controllers/SplbControllers/YxCtrl.js'
import AllCtrl from './controllers/SplbControllers/AllCtrl.js'
//卖家订单
import SellerCtrl from './controllers/SellerCtrl.js'
import SellerDfhCtrl from './controllers/SellerContronllers/SellerDfhCtrl.js'
import SellerAllCtrl from './controllers/SellerContronllers/SellerAllCtrl.js'
import SellerDfkCtrl from './controllers/SellerContronllers/SellerDfkCtrl.js'
import SellerDsbCtrl from './controllers/SellerContronllers/SellerDsbCtrl.js'
import SellerFykCtrl from './controllers/SellerContronllers/SellerFykCtrl.js'
import SellerQrCtrl from './controllers/SellerContronllers/SellerQrCtrl.js'
import SellerScCtrl from './controllers/SellerContronllers/SellerScCtrl.js'
import SellerWcCtrl from './controllers/SellerContronllers/SellerWcCtrl.js'
import SellerYqxCtrl from './controllers/SellerContronllers/SellerYqxCtrl.js'
// 买家订单
import BuyerCtrl from './controllers/BuyerCtrl.js'
import BuyerDfhCtrl from './controllers/BuyerControllers/BuyerDfhCtrl.js'
import BuyerAllCtrl from './controllers/BuyerControllers/BuyerAllCtrl.js'
import BuyerDfkCtrl from './controllers/BuyerControllers/BuyerDfkCtrl.js'
import BuyerDsbCtrl from './controllers/BuyerControllers/BuyerDsbCtrl.js'
import BuyerFykCtrl from './controllers/BuyerControllers/BuyerFykCtrl.js'
import BuyerQrCtrl from './controllers/BuyerControllers/BuyerQrCtrl.js'
import BuyerScCtrl from './controllers/BuyerControllers/BuyerScCtrl.js'
import BuyerWcCtrl from './controllers/BuyerControllers/BuyerWcCtrl.js'
import BuyerYqxCtrl from './controllers/BuyerControllers/BuyerYqxCtrl.js'
// 物流保存
import WlCtrl from './controllers/WlCtrl.js';
//详情页
import DetailCtrl from './controllers/DetailCtrl.js';

let app = angular.module('userCenter',['ngAnimate','ui.router','listComponents','formComponents','ui.bootstrap.pagination']);

app
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    // 从cookie获取当前个人中心类型（企业或个人）
    let logintype;
    let cookies = document.cookie.split('; ');
    cookies.forEach((cookie) => {
      if (cookie.indexOf('logintype') !== -1) {
        logintype = cookie.indexOf('1') !== -1 ? 1 : 2;
      }
    });
    //根据个人中心类型，判断默认加载哪个路由
    $urlRouterProvider.otherwise(logintype === 1 ? '/pgzlist' : '/fb/basic');
    
    $urlRouterProvider.otherwise('/fb/basic');
    $stateProvider
           .state('splb',{
              url: '/splb',
              templateUrl:'/partials/sbcs/partial-splb.html',
              controller: 'SplbCtrl as splbVm'
           })
           .state('splb.all',{
              url: '/all',
              templateUrl:'/partials/sbcs/spList/partial-splb-all.html',
              controller: 'AllCtrl as allVm'
           })
           .state('splb.jyz',{
              url: '/jyz',
              templateUrl:'/partials/sbcs/spList/partial-splb-jyz.html',
              controller: 'JyzCtrl as jyzVm'
           })
           .state('splb.yjy',{
              url: '/yjy',
              templateUrl:'/partials/sbcs/spList/partial-splb-yjy.html',
              controller: 'YjyCtrl as yjyVm'
           })
           .state('splb.yx',{
              url: '/yx',
              templateUrl:'/partials/sbcs/spList/partial-splb-yx.html',
              controller: 'YxCtrl as yxVm'
           })
           .state('fbsb',{
              url: '/fbsb',
              templateUrl:'/partials/sbcs/partial-fbsb.html',
              controller: 'FbCtrl as fbVm'
           })
           .state('seller',{
              url: '/seller',
              templateUrl:'/partials/sbcs/partial-seller.html',
              controller: 'SellerCtrl as sellerVm'
           })
           .state('seller.dfh',{
              url: '/dfh',
              templateUrl:'/partials/sbcs/sellerList/partial-seller-dfh.html',
              controller: 'SellerDfhCtrl as sellerDfhVm'
           })
           .state('seller.all',{
              url: '/all',
              templateUrl:'/partials/sbcs/sellerList/partial-seller-all.html',
              controller: 'SellerAllCtrl as sellerAllVm'
           })
           .state('seller.dfk',{
              url: '/dfk',
              templateUrl:'/partials/sbcs/sellerList/partial-seller-dfk.html',
              controller: 'SellerDfkCtrl as sellerDfkVm'
           })
           .state('seller.dsb',{
              url: '/dsb',
              templateUrl:'/partials/sbcs/sellerList/partial-seller-dsb.html',
              controller: 'SellerDsbCtrl as sellerDsbVm'
           })
           .state('seller.fyk',{
              url: '/fyk',
              templateUrl:'/partials/sbcs/sellerList/partial-seller-fyk.html',
              controller: 'SellerFykCtrl as sellerFykVm'
           })
           .state('seller.qr',{
              url: '/qr',
              templateUrl:'/partials/sbcs/sellerList/partial-seller-qr.html',
              controller: 'SellerQrCtrl as sellerQrVm'
           })
           .state('seller.sc',{
              url: '/sc',
              templateUrl:'/partials/sbcs/sellerList/partial-seller-sc.html',
              controller: 'SellerScCtrl as sellerScVm'
           })
           .state('seller.wc',{
              url: '/wc',
              templateUrl:'/partials/sbcs/sellerList/partial-seller-wc.html',
              controller: 'SellerWcCtrl as sellerWcVm'
           })
           .state('seller.yqx',{
              url: '/yqx',
              templateUrl:'/partials/sbcs/sellerList/partial-seller-yqx.html',
              controller: 'SellerYqxCtrl as sellerYqxVm'
           })
           .state('buyer',{
              url: '/buyer',
              templateUrl:'/partials/sbcs/partial-buyer.html',
              controller: 'BuyerCtrl as buyerVm'
           })
           .state('buyer.dfh',{
              url: '/dfh',
              templateUrl:'/partials/sbcs/buyerList/partial-buyer-dfh.html',
              controller: 'BuyerDfhCtrl as buyerDfhVm'
           })
           .state('buyer.all',{
              url: '/all',
              templateUrl:'/partials/sbcs/buyerList/partial-buyer-all.html',
              controller: 'BuyerAllCtrl as buyerAllVm'
           })
           .state('buyer.dfk',{
              url: '/dfk',
              templateUrl:'/partials/sbcs/buyerList/partial-buyer-dfk.html',
              controller: 'BuyerDfkCtrl as buyerDfkVm'
           })
           .state('buyer.dsb',{
              url: '/dsb',
              templateUrl:'/partials/sbcs/buyerList/partial-buyer-dsb.html',
              controller: 'BuyerDsbCtrl as buyerDsbVm'
           })
           .state('buyer.fyk',{
              url: '/fyk',
              templateUrl:'/partials/sbcs/buyerList/partial-buyer-fyk.html',
              controller: 'BuyerFykCtrl as buyerFykVm'
           })
           .state('buyer.qr',{
              url: '/qr',
              templateUrl:'/partials/sbcs/buyerList/partial-buyer-qr.html',
              controller: 'BuyerQrCtrl as buyerQrVm'
           })
           .state('buyer.sc',{
              url: '/sc',
              templateUrl:'/partials/sbcs/buyerList/partial-buyer-sc.html',
              controller: 'BuyerScCtrl as buyerScVm'
           })
           .state('buyer.wc',{
              url: '/wc',
              templateUrl:'/partials/sbcs/buyerList/partial-buyer-wc.html',
              controller: 'BuyerWcCtrl as buyerWcVm'
           })
           .state('buyer.yqx',{
              url: '/yqx',
              templateUrl:'/partials/sbcs/buyerList/partial-buyer-yqx.html',
              controller: 'BuyerYqxCtrl as buyerYqxVm'
           })
           .state('wl',{
             url: '/wl/:id&:type',
             templateUrl:'/partials/sbcs/partial-wl.html',
             controller: 'WlCtrl as WlVm'
           })
           .state('detail',{
             url: '/detail/:id',
             templateUrl:'/partials/sbcs/partial-detail.html',
             controller: 'DetailCtrl as detailVm'
           })
           .state('sc',{
             url: '/sc',
             templateUrl:'/partials/sbcs/partial-sc.html',
             controller: 'ScCtrl as scVm'
           })
  }])
  
  .directive('showAllModules', showAllModules)
  .directive('navSlide', navSlide)
  .directive('sideBar', sideBar)
  .directive('switchType', switchType)
  
  
  .controller('MainCtrl',[MainCtrl]) //主控制器
  .controller('SplbCtrl',[SplbCtrl])
  .controller('ScCtrl',[ScCtrl])
  .controller('FbCtrl',['$http', '$scope', FbCtrl])
  .controller('JyzCtrl',[JyzCtrl])
  .controller('YjyCtrl',[YjyCtrl])
  .controller('YxCtrl',[YxCtrl])
  .controller('AllCtrl',[AllCtrl])
  // 卖家订单
  .controller('SellerCtrl',[SellerCtrl])
  .controller('SellerDfhCtrl',[SellerDfhCtrl])
  .controller('SellerAllCtrl',[SellerAllCtrl])
  .controller('SellerDfkCtrl',[SellerDfkCtrl])
  .controller('SellerDsbCtrl',[SellerDsbCtrl])
  .controller('SellerFykCtrl',[SellerFykCtrl])
  .controller('SellerQrCtrl',[SellerQrCtrl])
  .controller('SellerScCtrl',[SellerScCtrl])
  .controller('SellerWcCtrl',[SellerWcCtrl])
  .controller('SellerYqxCtrl',[SellerYqxCtrl])
  // 买家订单
  .controller('BuyerCtrl',[BuyerCtrl])
  .controller('BuyerDfhCtrl',[BuyerDfhCtrl])
  .controller('BuyerAllCtrl',[BuyerAllCtrl])
  .controller('BuyerDfkCtrl',['$http', BuyerDfkCtrl])
  .controller('BuyerDsbCtrl',['$http', BuyerDsbCtrl])
  .controller('BuyerFykCtrl',['$http', BuyerFykCtrl])
  .controller('BuyerQrCtrl',['$http', BuyerQrCtrl])
  .controller('BuyerScCtrl',[BuyerScCtrl])
  .controller('BuyerWcCtrl',[BuyerWcCtrl])
  .controller('BuyerYqxCtrl',[BuyerYqxCtrl])
  // 物流
  .controller('WlCtrl',['$http', '$stateParams', WlCtrl])
  // 详情页
  .controller('DetailCtrl',['$scope', '$http', '$stateParams', DetailCtrl])