export default function CytgdetailCtrl($http,$stateParams) {
  var vm = this;
  var cpid = $stateParams.id
  $http.post('/CyTg/CyTgDetail',{cpid : cpid}).success(function(d) {
    vm.data = d.result
  })
}