import angular from 'angular';

import listTabs from './listComponents/listTabs.js';
import list from './listComponents/list.js';
import listItem from './listComponents/listItem.js';
import checkList from './listComponents/checkList.js';
import checkListitem from './listComponents/checkListitem.js';
// import srdzStates from './listComponents/srdzStates.js'

let app = angular.module('listComponents', []);
app
  // 头部列表
  .directive('listTabs', listTabs)
  .directive('list', list)
  .directive('listItem', listItem)
  .directive('checkList', checkList)
  .directive('checkListitem', checkListitem)


export default app;
