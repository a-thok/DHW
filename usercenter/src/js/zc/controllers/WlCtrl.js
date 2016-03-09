export default function WlCtrl($http) {
  var vm = this;
  vm.submit = function() {
    var para = angular.copy(vm.data);
    $http.post('/CpzcOrderSeller/SaveLogistic', para).success(function() {

    })
  }
}