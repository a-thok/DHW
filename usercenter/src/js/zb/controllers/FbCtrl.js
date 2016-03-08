/* global $ */
/* global angular */
import {type} from '../../data/data.js'



 export default function FbCtrl ($http) {
   var vm = this;
   vm.type = type;
   vm.isDisabled = false;
   function fail() {
     vm.isSubmitSuccess = false;
     vm.isDisabled = false;
   }
   
   
   
  vm.data = {
    smrz: false,
    sjrz: false,
  };
  vm.items = [{}];
  vm.selectType = function (typeNum) {
    vm.data.typeid = typeNum;
  };

  // 删除任务
  vm.del = function (index) {
    vm.items.splice(index, 1);
  }
    
  // 添加任务
  // vm.del = function(index) {
  //   vm.itemvm.push({});
  // }
  vm.showModal = false;  
  // 提交数据
  vm.submit = function () {
    if ($('#sftyxy').is(':checked')) {
      vm.data.sftyxy = true;
    } else {
      vm.data.sftyxy = false;
    }
    vm.data.items = angular.toJson(vm.items);
    // 复制一份数据
    var para = angular.copy(vm.data);
    // 删除不需要提交的项
    delete para.realnameauth;
    vm.isDisabled = true;
    $http.post("/Zbfb/Fb", para).success(function (data) {
      if(data.success) {
        vm.isSubmitSuccess = true;
      }else {
        vm.errorMsg = "网络延迟,提交失败,请重试"
        fail();
      }
      vm.showModal = true;
    }).error(function() {
      fail();
      vm.showModal = true;
    });
  }
  // 获取数据
  $http.post("/Zbfb/Get").success(function (data) {
    $.extend(vm.data, data.result);
  });
  
 }