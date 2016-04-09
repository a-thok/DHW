// 公司案例列表详情页
import $ from 'jquery';
export default function CasesDetailCtrl($http, $stateParams) {
  var vm = this;
  vm.data = {};
  function fail() {
    vm.isSubmitSuccess = false;
    vm.isDisabled = false;
  }
  let id = $stateParams.id;
  $http.post('/CompanyHomeEdit/CaseDetail', { id: id }).success((d) => {
    vm.data = d.result;
  });
  vm.submit = function () {
    var para = $.extend({}, vm.data);
    $http.post('/CompanyHomeEdit/CaseEdit', para).success((d) => {
      if (d.success) {
        vm.isSubmitSuccess = true;
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
