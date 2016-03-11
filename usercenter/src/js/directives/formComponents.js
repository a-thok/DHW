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
import bindImg from './formComponents/bindImg.js' 
import nodatasArea from './formComponents/nodatasArea.js' 
//测试指令省市三级联动
import sCity from './formComponents/sCity.js'
import fileUploader from './formComponents/fileUploader.js'
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
  .directive('btnSubmit', btnSubmit)
  //众筹上传图片按钮
  .directive('bindImg', bindImg)
  //省市联动指令
  .directive('sCity',sCity)
  .directive('fileUploader',fileUploader)
  .directive('nodatasArea',nodatasArea)
export default app;



// 指令的调用方法
/*
  <form name="fbzpForm" ng-submit="fbzpVm.submit()">
    
    <div calendar
      data-switch="false"
      data-vm="fbzpVm"
      data-label="日期"
      data-name="dataa"
      data-required="true"
    ></div>
    
    <div select-simple
      data-switch="true"
      data-vm="fbzpVm"
      data-label="行业名称"
      data-name="dtmc"
      data-options="item.text for item in fbzpVm.trade"
      data-part="text"
      data-required="true"
    ></div>
    
    <div select-simple
      data-switch="false"
      data-vm="fbzpVm"
      data-label="学历要求"
      data-name="xl"
      data-options="item for item in fbzpVm.education"
      data-required="false"
    ></div>
    
    <div input-text
      data-switch="true"
      data-vm="fbzpVm"
      data-label="职位诱惑"
      data-name="tag"
      data-required="true"
      data-form="fbzpForm"
      data-pattern="/^[\u4e00-\u9fa5a-zA-Z0-9\-\_]{2,10}$/"
      data-tip='请填写此职位'
      data-error="职位名称必须在2-10个字符之间"
    ></div>
    
    <div text-area
      data-switch="true"
      data-vm="fbzpVm"
      data-label="职位描述"
      data-name="position"
      data-required="true"
      data-form="fbzpForm"
      data-pattern="/^[\u4e00-\u9fa5a-zA-Z0-9\-\_]{2,10}$/"
      data-tip='请输入此职位的名称'
      data-error="职位名称必须在2-10个字符之间"
    ></div>
    
    <div web-uploader
      data-vm="fbzpVm"
      data-label="图片上传"
      data-name="abc"
      data-required="true"
      data-key="cpzc"
      data-size="100x100"
      ng-model="fbzpVm.data.abc"
    ></div>
    
    <div select-area
      data-switch="true"
      data-vm="fbzpVm"
      data-label="省市"
      data-name="area"
      data-required="true"
    ></div>
    
    <div select-double-numbers
      data-switch="false"
      data-vm="fbzpVm"
      data-label="年龄"
      data-first="a"
      data-second="b"
      data-required="true"
    ></div>
    
    <div rich-text
      data-vm="fbzpVm"
      data-label="富文本"
      data-name="rich"
      data-required="true"
      ng-model="fbzpVm.data.rich"
    ></div>

    <div btn-submit
      data-vm="fbzpVm"
      data-form="fbzpForm"
      data-api="/SrdzFb/srfb"
    ></div>

  </form>

  <div modal
    data-vm = "fbzpVm"
    data-url="/zplb"
  ></div>
*/
