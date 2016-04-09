export default function CytgdetailCtrl($http, $stateParams) {
  var vm = this;
  var cpid = $stateParams.id;
  $http.post('/CyTg/CyTgDetail', { cpid: cpid }).success((d) => {
    vm.data = d.result;
  });
}
