export default function CyfbdetailCtrl($http, $stateParams) {
  var vm = this;
  var cpid = $stateParams.id;
  $http.post('/CysjFb/CyFbDetail', { cpid: cpid }).success((d) => {
    vm.data = d.result;
  });
}
