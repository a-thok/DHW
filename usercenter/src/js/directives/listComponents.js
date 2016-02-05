import angular from 'angular';

import listTabs from './listComponents/listTabs.js';
import list from './listComponents/list.js';
import listItem from './listComponents/listItem.js';

let app = angular.module('listComponents', []);
app
  // 头部列表
  .directive('listTabs', listTabs)
  .directive('list', list)
  .directive('listItem', listItem);

export default app;


// listTabs指令用法
/**zhuang  
 * 使用示例
 * <div list-tabs
 *      data-repeat='item in zplbVm.listTabs'
 * ></div>
 * vm.listTabs = [
 *  {name: '首页', url: '.index'},
 *  {name: '第二页', url: '.second'}
 * ];
 * '.index'  : 为路由嵌套
 */


// list指令用法
// 在控制器里定义如下格式的数组，数组名必须叫list！
// 若该字段展示时需要链接，则添加link和linkkey
// 若该字段展示时显示为图片，则添加img

// vm.list = [
//   {name: '职位', key: 'position', width: '15%', link: 'http://adsfadsf/', linkkey: 'userid'},
//   {name: '公司', key: 'company', width: '20%', img: 'ture'},
//   {name: '薪资', key: 'money', width: '15%'},
//   {name: '投递时间', key: 'licgsj', width: '15%'},
//   {name: '投递状态', key: 'lizt', width: '10%'},
//   {name: '查看状态', key: 'qysfck', width: '15%'},
// ];

// 若该列表无需操作时，调用指令只需传递data-vm和data-api和data-datekey，data-datekey为日期字段，若没有可不传
// 若需要操作，传递data-operate为true，并传递data-operation为操作名称、data-func为操作方法
// data-delapi : 传删除操作的 api
// data-delkey : 要删除项的id
// data-del : true  :表示是否显示删除按钮 true:显示
// <div list
//   data-vm="fbzpVm"
//   data-api="/HRTdjl/List"
//   data-datekey="licgsj"
//   data-operate="true"
//   data-operation="删除"
//   data-func="save(item.userid)"
//   data-delapi = "/HRZpcx/Del"
//   data-delkey = "item.id"
//   data-del = "true"   
// ></div>