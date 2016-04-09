import $ from 'jquery';
export default function AddressEditCtrl($http, $stateParams) {
  var vm = this;
  var id = $stateParams.id;
  var para = {};
  vm.draft = {};
  vm.submitText = '提交';
  vm.isDisabled = false;
  function fail() {
    vm.isSubmitSuccess = false;
    vm.submitText = '提交';
    vm.isDisabled = false;
  }
  vm.getDraft = function (fn) {
    $http.post('/UserAddr/detail', { id: id }).success((d) => {
      fn(d.result[0].area);
      vm.data = d.result[0];
    });
  };
  vm.showModal = false;
  vm.submit = function () {
    vm.submitText = '提交中';
    vm.isDisabled = true;
    var content = vm.draft.basic();
    para = $.extend({}, vm.data);
    para.id = id;
    para.area = $.extend({}, content.area);
    $http.post('/useraddr/edit', para).success((d) => {
      if (d.success) {
        vm.isSubmitSuccess = true;
        vm.submitText = '提交';
        vm.isDisabled = false;
      } else {
        vm.errorMsg = '因网络原因，提交失败，请重新进行提交';
        fail();
      }
      vm.showModal = true;
    }).error(() => {
      fail();
      vm.showModal = true;
    });
  };
}
