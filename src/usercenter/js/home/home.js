// js
import angular from 'angular';
// 指令
import showAllModules from '../directives/userCenter/showAllModules.js';
import navSlide from '../directives/userCenter/navSlide.js';
import sideBar from '../directives/userCenter/sideBar.js';
// 图片
import '../../img/person-touxiang.png';
import '../../img/ZHIFUBAO.png';
import '../../img/02.png';
import '../../img/01.png';
// 依赖模块
import '../directives/listComponents.js';
import '../directives/modalComponents.js';
import '../directives/formComponents.js';

let app = angular.module('userCenter', ['ngAnimate', 'ui.router', 'listComponents', 'formComponents', 'modalComponents']);
app
  .directive('showAllModules', showAllModules)
  .directive('sideBar', sideBar)
  .directive('navSlide', navSlide);
