export default function BuyerdshCtrl($http) {
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
  vm.conf = function (number) {
    var con = confirm('是否确定收货?')
    if (con === true) {
      $http.post('/Sys/o2o/OrderBuyer/Confirm', { number: number }).success((data) => {
        if (data.success === true) {
          location.reload();
        } else {
          alert('网络出现错误,请重试!')
        }
      })
    }
  }
  vm.cancel = function (number) {
    var con = confirm('是否确定取消订单?')
    if (con === true) {
      $http.post('/Sys/o2o/OrderBuyer/Close', { number: number }).success((data) => {
        if (data.success === true) {
          location.reload();
        } else {
          alert('网络出现错误,请重试!')
        }
      })
    }
  }
}