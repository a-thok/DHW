export default function WlCtrl($http, $stateParams) {
  var vm = this;
  vm.data = {};
  vm.data.id = $stateParams.id
  vm.submit = function() {
    var para = angular.copy(vm.data);
    if ($stateParams.type === '1') {
      console.log(2)
      $http.post('/sys/rshop/OrderBuyer/UploadData', para).success(function() {
        document.location.href = '#/buyer';
      })
    }else {
      console.log(3)
      $http.post('/Sys/rshop/OrderSeller/Send', para).success(function() {
        document.location.href = '#/seller/all';
      })
    }
  }
}