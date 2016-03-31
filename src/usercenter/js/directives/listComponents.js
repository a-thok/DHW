import angular from 'angular';

import listTabs from './listComponents/listTabs.js';
import list from './listComponents/list.js';
import listItem from './listComponents/listItem.js';
import checkList from './listComponents/checkList.js';
import checkListitem from './listComponents/checkListitem.js';
import replaylist from './listComponents/replaylist.js';
import replaylistItem from './listComponents/replaylistItem.js';


let app = angular.module('listComponents', []);
app
  // 头部列表
  .directive('listTabs', listTabs)
  .directive('list', list)
  .directive('listItem', listItem)
  .directive('checkList', checkList)
  .directive('checkListitem', checkListitem)
  .directive('replaylist', replaylist)
  .directive('replaylistItem', replaylistItem);


export default app;
