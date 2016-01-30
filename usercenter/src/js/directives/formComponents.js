import angular from 'angular';

import webUploader from  './formComponents/webUploader.js'
import inputText from  './formComponents/inputText.js'
import textArea from  './formComponents/textArea.js'
import selectSimple from  './formComponents/selectSimple.js'
import calendar from  './formComponents/calendar.js'
import selectArea from  './formComponents/selectArea.js'



let app = angular.module('formComponents', []);
app
  // input text类型
  .directive('inputText', inputText)
  // textarea
  .directive('textArea', textArea)
  // 普通下拉选择
  .directive('selectSimple', selectSimple)
  // 省市县选择
  .directive('selectArea', selectArea)
  // 图片上传
  .directive('webUploader', webUploader)
  // 日历
  .directive('calendar', calendar);

export default app;