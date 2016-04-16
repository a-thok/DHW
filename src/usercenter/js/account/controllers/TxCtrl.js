export default function TxCtrl($http) {
  var vm = this;
  vm.data = {};
  $http.post('/sys/user/Cash/GetCard').success((data) => {
    vm.bankName = data.result.bankName;
    vm.cardNumber = data.result.cardNumber;
    vm.data.bcid = data.result.id;
    vm.data.limit = data.result.limit;
  });
  vm.submit = function () {
    var para = Object.assign({}, vm.data);
    $http.post('/sys/user/Cash/Add', para).success((data) => {
      if (data.success === true) {
        alert('提现成功,钱款将在一个工作日内转到您卡上');
        window.location.href = '#/money';
      } else {
        $('input[type = "password"]').val('');
        alert(data.msg);
      }
    });
  };
}
