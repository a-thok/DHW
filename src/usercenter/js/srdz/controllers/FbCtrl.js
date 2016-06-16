import {
  category
} from '../../data/data.js';
import angular from 'angular';
export default function FbCtrl($http) {
  var vm = this;
  vm.data = {
    props: [],
    sku: []
  };
  vm.skuTemp = [];
  vm.submitText = '提交';
  vm.isDisabled = false;
  function fail() {
    vm.isSubmitSuccess = false;
    vm.submitText = '提交';
    vm.isDisabled = false;
  }
  vm.category = category;
  vm.hideModal = () => { vm.showModal = false; setTimeout(function(){location.reload();}, 500); };
  vm.addSku = function () {
    vm.skuTemp.push({});
  };

  vm.showModal = false;

  vm.submit = function () {
    var para = $.extend({}, vm.data);
    para.type = vm.data.type.id;
    para.props.forEach((prop, i) => {
      prop.lev = i;
      prop.propEnum.forEach((item, _i) => {
        item.index = _i;
      });
    });


    vm.submitText = '提交中';
    vm.isDisabled = true;
    $http.post('/SrdzFb/srfb', para).success((d) => {
      if (d.success) {
        vm.isSubmitSuccess = true;
      } else {
        vm.errorMsg = '网络延迟,提交失败,请重试';
        fail();
      }
      vm.showModal = true;
    }).error(() => {
      fail();
      vm.showModal = true;
    });
  };
  $http.post('/LoginService/Certify').success((d) => {
    if (d.success) {
      vm.isfuws = d.result.ServiceCertify;
    }
  });
}
