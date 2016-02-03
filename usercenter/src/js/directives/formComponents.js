import angular from 'angular';

import inputText from  './formComponents/inputText.js'
import textArea from  './formComponents/textArea.js'
import selectSimple from  './formComponents/selectSimple.js'
import selectDoubleNumbers from  './formComponents/selectDoubleNumbers.js'
import selectArea from  './formComponents/selectArea.js'
import webUploader from  './formComponents/webUploader.js'
import calendar from  './formComponents/calendar.js'
import richText from  './formComponents/richText.js'
import btnSubmit from  './formComponents/btnSubmit.js'

let app = angular.module('formComponents', []);
app
  // input text类型
  .directive('inputText', inputText)
  // textarea
  .directive('textArea', textArea)
  // 普通下拉选择
  .directive('selectSimple', selectSimple)
  // 双下拉数字选择
  .directive('selectDoubleNumbers', selectDoubleNumbers)
  // 省市县选择
  .directive('selectArea', selectArea)
  // 图片上传
  .directive('webUploader', webUploader)
  // 日历
  .directive('calendar', calendar)
  // 富文本
  .directive('richText', richText)
  // 提交按钮
  .directive('btnSubmit', btnSubmit);
  
export default app;



// 每个指令对应的调用方法
// 请特别注意，有些指令要求ng-model，必须写成“控制器别名.data.model名”的模式，如fbzwVm.data.img

// <form name="fbzwVmForm" ng-submit="fbzwVm.submit()">
//   <div calendar
//     data-vm="fbzwVm"
//     data-label="日期"
//     data-required="true"
//     data-name="dataa"
//   ></div>
  
//   <div select-simple
//     data-vm="fbzwVm"
//     data-name="dtmc"
//     data-label="行业名称"
//     data-pattern="/.+/"
//     data-options="item.text for item in fbzwVm.trade"
//     data-required="true"
//   ></div>
  
//   <div select-simple
//     data-vm="fbzwVm"
//     data-name="req_xueli"
//     data-label="学历要求"
//     data-pattern="/.+/"
//     data-options="item for item in fbzwVm.education"
//     data-required="false"
//   ></div>
  
//   <div input-text
//     data-vm="fbzwVm"
//     data-form="fbzwVmForm"
//     data-name="tag"
//     data-label="职位诱惑"
//     data-pattern="/^[\u4e00-\u9fa5a-zA-Z0-9\-\_]{2,10}$/"
//     data-tip='请填写此职位'
//     data-error="职位名称必须在2-10个字符之间"
//     data-required="true"
//   ></div>
  
//   <div input-text
//     data-vm="fbzwVm"
//     data-form="fbzwVmForm"
//     data-name="tagad"
//     data-label="职位诱惑"
//     data-pattern="/^[\u4e00-\u9fa5a-zA-Z0-9\-\_]{2,10}$/"
//     data-tip='请填写此职位'
//     data-error="职位名称必须在2-10个字符之间"
//     data-required="false"
//   ></div>
  
//   <div text-area
//     data-vm="fbzwVm"
//     data-form="fbzwVmForm"
//     data-name="position"
//     data-label="职位描述"
//     data-pattern="/^[\u4e00-\u9fa5a-zA-Z0-9\-\_]{2,10}$/"
//     data-tip='请输入此职位的名称'
//     data-error="职位名称必须在2-10个字符之间"
//     data-required="true"
//   ></div>
  
//   <div text-area
//     data-vm="fbzwVm"
//     data-form="fbzwVmForm"
//     data-name="posidfadsftion"
//     data-label="职位描述"
//     data-pattern="/^[\u4e00-\u9fa5a-zA-Z0-9\-\_]{2,10}$/"
//     data-tip='请输入此职位的名称'
//     data-error="职位名称必须在2-10个字符之间"
//     data-required="false"
//   ></div>
  
//   <div web-uploader
//     data-vm="fbzwVm"
//     data-label="图片上传"
//     data-name="abc"
//     data-key="cpzc"
//     data-size="100x100"
//     data-required="true"
//     ng-model="fbzwVm.data.abc"
//   ></div>
  
//   <div select-area
//     data-vm="fbzwVm"
//     data-name="area"
//     data-required="true"
//     data-label="省市"
//   ></div>
  
//   <div select-double-numbers
//     data-label="年龄"
//     data-required="true"
//     data-first="a"
//     data-second="b"
//   ></div>
//   <div rich-text
//     data-label="富文本"
//     data-vm="fbzwVm"
//     data-name="rich"
//     data-required="true"
//     ng-model="fbzwVm.data.rich"
//   >
//   </div>

//   <div btn-submit
//     data-form="fbzwVmForm"
//   ></div>

// </form>
