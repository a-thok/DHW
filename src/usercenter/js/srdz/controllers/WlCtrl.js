import angular from 'angular';
export default function WlCtrl($http, $stateParams) {
  var vm = this;
  vm.data = {};
  vm.data.number = $stateParams.number;
  vm.submit = function () {
    var para = angular.copy(vm.data);
    $http.post('/SrdzOrder/SellerUpdate', para).success(() => {
      document.location.href = '#/seller';
    });
  };
}
