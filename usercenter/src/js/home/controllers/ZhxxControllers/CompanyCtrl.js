// 企业账号---公司信息控制器
import {
  companynum,
  companytrade,
  companynature
} from '../../../data/data.js'
export default function CompanyCtrl($http) {
  var vm = this;
  vm.companynum = companynum;
  vm.companytrade = companytrade;
  vm.companynature = companynature;
  vm.businessTemp = [];
  vm.fuliTemp = [];
  vm.data = {};
  vm.draft = {};
  vm.fuliT = {}
  vm.getDraft = function(fn) {
    $http.post('/UserAccount/Company').success(function(data) {
      fn(data.result.area);
      if (data.result.business) {
        vm.businessTemp = angular.fromJson(data.result.business);
      }
      if (data.result.fuli) {
        vm.fuliTep = data.result.fuli.split(',');
        for (var i = 0, len = vm.fuliTep.length; i < len; i++) {
          vm.fuliTemp.push({ value: vm.fuliTep[i] });
        }
      }
      $.extend(vm.data, data.result)
    })
  }
  //添加业务范围与添加福利
  vm.addBusiness = function() {
    vm.businessTemp.push({});
  };
  vm.addFuli = function() {
    vm.fuliTemp.push({});
  };
  //手机号码是否可见
  vm.isVisible = function(elem) {
    if ($(elem).is(':checked')) {
      vm.data.phonevisible = true;
    } else {
      vm.data.phonevisible = false;
    }
  }
  // 保存数据
  vm.submit = function() {
    var content = vm.draft.basic();
    var para = $.extend(vm.data, content);
    para.business = [];
    para.fuli = []
    for (var i = 0, len = vm.businessTemp.length; i < len; i++) {
      para.business.push(vm.businessTemp[i]);
    }
    para.business = angular.toJson(para.business);
    for (var j = 0, len = vm.fuliTemp.length; j < len; j++) {
      if (j < vm.fuliTemp.length - 1) {
        para.fuli += vm.fuliTemp[j].value + ","
      } else {
        para.fuli += vm.fuliTemp[j].value
      }
    }
    $http.post('/UserAccount/CompanyEdit', para).success(function(d) {
      if (d.success) {
      }
    });
  }
}