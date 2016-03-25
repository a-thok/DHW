export default function DetailCtrl($http, $stateParams) {
  let vm = this;
  let num = $stateParams.number;
  $http.post('/SrdzOrder/SellerDetail', { number: num }).success(function (data) {
    vm.data = data.result
  })
}