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
  })
}