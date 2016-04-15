import $ from 'jquery';
export default function GsalCtrl($http) {
  var vm = this;
  vm.data = {};
  function fail() {
    vm.isSubmitSuccess = false;
    vm.isDisabled = false;
  }
  vm.hideModal = () => {vm.showModal = false; setTimeout(function(){location.reload();}, 500); };
  vm.submit = function () {
    var para = $.extend({}, vm.data);
    $http.post('/CompanyHomeEdit/CaseAdd', para).success((d) => {
      if (d.success) {
        vm.isSubmitSuccess = true;
        vm.isDisabled = true;
      } else {
        vm.errorMsg = d.msg;
        fail();
      }
      vm.showModal = true;
    }).error(() => {
      fail();
      vm.showModal = true;
    });
  };
}
