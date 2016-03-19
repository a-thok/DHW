import {
  category
} from '../../data/data.js'
export default function FbCtrl($http) {
  var vm = this;
  vm.data = {}
  vm.skuTemp = [];
  vm.submitText = '提交';
  vm.isDisabled = false;
  function fail() {
     vm.isSubmitSuccess = false;
     vm.submitText = '提交';
     vm.isDisabled = false;
   }
  vm.category = category;
  
  vm.addSku = function() {
     vm.skuTemp.push({});
  }
  
  vm.showModal = false;
  
  vm.submit = function() {
    var para = $.extend({},vm.data);
    para.type = vm.data.type.id
     para.sku = {};
      // 循环规格数组s.skuTemp，把数据放入规格para.sku
    for (var i = 0; i < vm.skuTemp.length; i++) {
      var content = vm.skuTemp[i].content;
      if (content[content.length - 1] == ";") {
        content = content.substring(0, content.length - 2);
      }
      para.sku[vm.skuTemp[i].name] = content.split(";");
    }
    para.sku = angular.toJson(para.sku);
    
    
    vm.submitText = '提交中';
    vm.isDisabled = true;
    $http.post('/SrdzFb/srfb',para).success(function(d) {
      if(d.success) {
        vm.isSubmitSuccess = true;
      }else {
       vm.errorMsg = "网络延迟,提交失败,请重试"
       fail();
      }
      vm.showModal = true;
    }).error(function() {
      fail();
      vm.showModal = true;
    })
  }
  
  // 判断是否已经申请为服务商
  $http.post('/SrdzFb/GetDd').success(function(d) {
    if(d.result.code === 0) {
      console.log(1)
      vm.isfuws = false;
    }else {
      vm.isfuws = true
    }
  })
} 