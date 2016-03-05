import {
  brand
}from '../../data/data.js'
export default function CfbCtrl($http) {
  var vm = this;
  vm.data = {};
  vm.brand = brand;
  vm.submitText = '提交';
  vm.isDisabled = false;
  function fail() {
     vm.isSubmitSuccess = false;
     vm.submitText = '提交';
     vm.isDisabled = false;
  }
  
  
  vm.showModal = false;
  vm.submit = function() {
    var para = $.extend({},vm.data);
    para.type = vm.data.type.id
    vm.submitText = '提交中';
    $http.post('/CysjFb/CyFb',para).success(function(d) {
      if(d.success) {
        vm.isSubmitSuccess = true;
      }else {
        vm.errorMsg = "网络延迟,提交失败,请重试";
        fail();
      }
      vm.showModal = true;
    }).error(function() {
      fail();
      vm.showModal = true;
    })
  }
  
   
   vm.selectTrans = function (event, transNum) {
    vm.data.transaction = transNum;
    console.log(vm.data.transaction)
    $(event.target).parents('.formSet').find('.formInputSet_radio').css({
      "background-position": "0 0"
    })
    $(event.target).css({
      "background-position": "0 -20px"
    });
  };
  
  
  
  
  
   // 获取数据
  $http.post("/Zbfb/Get").success(function (data) {
    vm.data.realnameauth = data.result.realnameauth;
  });
}