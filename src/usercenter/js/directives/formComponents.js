import angular from 'angular';

import inputText from './formComponents/inputText.js';
import textArea from './formComponents/textArea.js';
import selectSimple from './formComponents/selectSimple.js';
import selectDoubleNumbers from './formComponents/selectDoubleNumbers.js';
import selectArea from './formComponents/selectArea.js';
import webUploader from './formComponents/webUploader.js';
import calendar from './formComponents/calendar.js';
import richText from './formComponents/richText.js';
import btnSubmit from './formComponents/btnSubmit.js';
import bindImg from './formComponents/bindImg.js' ;
import nodatasArea from './formComponents/nodatasArea.js' ;
import addPhoto from './formComponents/addPhoto.js' ;
import homebtnSubmit from './formComponents/homebtnSubmit.js' ;
import startendYear from './formComponents/startendYear.js';
import eduhomeList from './formComponents/eduhomeList.js';
import readOnly from './formComponents/readOnly.js';
// 头像上传裁剪指令
import avatarDirective from './formComponents/avatarDirective.js';
// 取色器指令
import colpickDirective from './formComponents/colpickDirective.js';
// 测试指令省市三级联动
import fileUploader from './formComponents/fileUploader.js';
// 百度地图
import baidumap from './formComponents/baidumap.js';
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
  // 众筹上传图片按钮
  .directive('bindImg', bindImg)
  // 省市联动指令
  .directive('fileUploader', fileUploader)
  .directive('nodatasArea', nodatasArea)
  // 教育经历工作经历
  .directive('homebtnSubmit', homebtnSubmit)
  .directive('startendYear', startendYear)
  .directive('eduhomeList', eduhomeList)
  // 取色器指令
  .directive('colpickDirective', colpickDirective)
  // 详情页只读指令
  .directive('readOnly', readOnly)
  // 百度地图
  .directive('baidumap', baidumap)

  // 个人中心企业上传图片指令--有新增功能
  .directive('addPhoto', addPhoto)
  // 头像上传裁剪功能
  .directive('avatarDirective', avatarDirective);

export default app;
