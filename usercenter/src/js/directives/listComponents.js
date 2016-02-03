import angular from 'angular';

import listTabs from './listComponents/listTabs.js';
import ucList from './listComponents/ucList.js';
import zplb from './listComponents/zplb.js';

let app = angular.module('listComponents', []);
app
  // 头部列表
  .directive('listTabs', listTabs)
  .directive('ucList', ucList)
  .directive('zplb', zplb);

export default app;
  
// 指令用法
// 在控制器里定义一个数组，内容为这个表的各个th的名字，下例为fbzpVm.list
// 然后只需要把这个数组，以及相应的接口传入即可

// vm.list = [
//   {name: '职位', width: '20%'},
//   {name: '公司', width: '25%'},
//   {name: '薪资', width: '15%'},
//   {name: '投递时间', width: '15%'},
//   {name: '投递状态', width: '10%'},
//   {name: '查看状态', width: '15%'}
// ];

// <div uc-list
//   data-repeat="item in fbzpVm.temp"
//   data-api="/HRTdjl/List"
// ></div>