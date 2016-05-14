export default function DetailCtrl($http, $stateParams) {
  var vm = this;
  var id = $stateParams.id;
  $http.post('/Sys/o2o/Product/type').success((data) => {
    vm.type = data.result;
  })
  $http.post('/Sys/o2o/Product/get', { id: id }).success((data) => {
    vm.data = data.result;
    vm.data.img1 = data.result.images[0];
    vm.data.img2 = data.result.images[1];
    vm.data.img3 = data.result.images[2];
    vm.data.img4 = data.result.images[3];
    vm.data.firType = data.result.type.substring(0, 2)
    vm.data.secType = data.result.type.substring(2, 2)
    for (var i = 0, len = vm.type.length; i < len; i++) {
      if (vm.data.firType === vm.type[i].id) {
        vm.secType = vm.type[i].items;
      }
    }
  })
}