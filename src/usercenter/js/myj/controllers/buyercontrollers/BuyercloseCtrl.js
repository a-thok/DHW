export default function BuyercloseCtrl($http) {
  var vm = this;
  vm.del = function (number) {
    var conf = confirm('是否确定删除?');
    if (conf === true) {
      $http.post('/Sys/o2o/OrderBuyer/del', { number: number }).success((data) => {
        if (data.success === true) {
          location.reload();
        } else {
          alert('网络出现错误,请重试!')
        }
      })
    }
  }
}
