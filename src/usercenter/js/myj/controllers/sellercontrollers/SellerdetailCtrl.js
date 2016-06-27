// 显示买家订单详情控制器
export default function SellerdetailCtrl($http, $stateParams) {
  var vm = this;
  vm.data = [];
  var orderNum = $stateParams.number;
  $http.post('/Sys/o2o/OrderSeller/get', { number: orderNum }).success((data) => {
    vm.data = data.result;
  });
}
