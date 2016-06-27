import angular from 'angular';

// 依赖模块
import 'angular-color-picker';

import inputText from './formComponents/inputText.js';
import emailInput from './formComponents/emailInput.js';
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
import passWord from './formComponents/passWord.js';
// 头像上传裁剪指令
import avatarDirective from './formComponents/avatarDirective.js';
// 取色器指令
import colorPick from './formComponents/colorPick.js';
// 测试指令省市三级联动
import fileUploader from './formComponents/fileUploader.js';
// 梦云街多文件上传指令
import multipleUploader from './formComponents/multipleUploader.js';
// 百度地图
import baidumap from './formComponents/baidumap.js';
// 梦云街SKU
import myjSku from './formComponents/myjSku.js';
// 添加分店地址
import addFd from './formComponents/addFd.js';
import addFdlist from './formComponents/addFdlist.js';

let app = angular.module('formComponents', ['mp.colorPicker']);
app
  // input text类型
  .directive('inputText', inputText)
  .directive('emailInput', emailInput)
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
  // 梦云街多文件上传指令
  .directive('multipleUploader', multipleUploader)
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
  .directive('colorPick', colorPick)
  // 详情页只读指令
  .directive('readOnly', readOnly)
  // 百度地图
  .directive('baidumap', baidumap)
  .directive('passWord', passWord)
  .directive('myjSku', myjSku)

  // 个人中心企业上传图片指令--有新增功能
  .directive('addPhoto', addPhoto)
  // 头像上传裁剪功能
  .directive('avatarDirective', avatarDirective)
  // 添加分店地址
  .directive('addFd', addFd)
  .directive('addFdlist', addFdlist);

export default app;
