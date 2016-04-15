import angular from 'angular';
export default function WlCtrl($http, $stateParams) {
  var vm = this;
  vm.data = {};
  vm.data.id = $stateParams.id;
  vm.submit = function () {
    var para = angular.copy(vm.data);
    if ($stateParams.type === '1') {
      $http.post('/sys/rshop/OrderBuyer/UploadData', para).success(() => {
        document.location.href = '#/buyer/all';
      });
    } else {
      $http.post('/Sys/rshop/OrderSeller/Send', para).success(() => {
        document.location.href = '#/seller/all';
      });
    }
  };
}
