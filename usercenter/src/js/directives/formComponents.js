import angular from 'angular';

import webUploader from  './formComponents/webUploader.js'
import inputText from  './formComponents/inputText.js'
import textArea from  './formComponents/textArea.js'
import selectSimple from  './formComponents/selectSimple.js'
import calendar from  './formComponents/calendar.js'
import selectArea from  './formComponents/selectArea.js'

let app = angular.module('formComponents', []);
app
  .directive('selectAge',function() {
    return {
      template :function(ele, attrs) {
        return  `
          <div class="formGourp clearfix">
            <div class="formGourp_wrap">
              <label class="formLabel" for="${attrs.name}">${attrs.label}</label>
              <input class="formInput" id="${attrs.minage}" name="${attrs.minage}" type="text"
                ng-model="${attrs.this}.${attrs.minage}"
                ng-pattern="${attrs.pattern}"
              >
              <input class="formInput" id="${attrs.maxage}" name="${attrs.maxage}" type="text"
                ng-model="${attrs.this}.${attrs.maxage}" 
                ng-pattern="${attrs.pattern}"
              >
            </div>
            <label class="formTip formTip--error"
              ng-show="${attrs.form}.${attrs.minage}.$dirty  && ${attrs.form}.${attrs.maxage}.$dirty && (${attrs.this}.${attrs.minage}) > (${attrs.this}.${attrs.maxage})"
            >
              <span class="formTip_text">${attrs.error}</span>
            </label>
          </div>
        `
      }
    }
  })
  .directive('selectArea', function() {
    return {
      template: function(elem, attrs) {
        return `
          
        `
      }
    }
  })
  
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