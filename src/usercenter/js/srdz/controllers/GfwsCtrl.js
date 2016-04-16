export default function GfwsCtrl($http) {
  var vm = this;
  vm.data = {};
  vm.submitText = '提交';
  vm.isDisabled = false;
  function fail() {
    vm.isSubmitSuccess = false;
    vm.submitText = '提交';
    vm.isDisabled = false;
  }
  vm.hideModal = () => {vm.showModal = false; setTimeout(function(){location.reload();}, 500); };
  // var para = $.extend({},vm.data);
  vm.submit = () => {
    var para = $.extend({}, vm.data);
    vm.submitText = '提交中';
    vm.isDisabled = true;
    $http.post('/ServiceInfo/ServiceAdd', para).success((d) => {
      if (d.success) {
        vm.isSubmitSuccess = true;
      } else {
        vm.errorMsg = '网络延迟，提交失败，请重试';
        fail();
      }
      vm.showModal = true;
    }).error(() => {
      fail();
      vm.showModal = true;
    });
  };
  $http.post('/ServiceInfo/ServerState').success((d) => {
    vm.state = d.result.state;
  });
}
