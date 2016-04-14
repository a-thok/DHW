export default function MoneyCtrl($http) {
  var vm = this;
  let getdata = (page) => {
    $http.post('/sys/user/Bill/list', { pageSize: 5, pageIndex: page }).success((data) => {
      vm.balace = data.result.exdata.balance;
      vm.expense = data.result.exdata.expense;
      vm.income = data.result.exdata.income;
      vm.transaction = data.result.data;
      vm.total = data.result.total;
      setTimeout(function() {
        for (var i = 0, len = $('.transaction_money').length; i < len; i++) {
          if (parseInt($('.transaction_money').eq(i).text(), 10) > 0) {
            $('.transaction_money').eq(i).addClass('positive');
            $('.transaction_money').eq(i).text('+' + $('.transaction_money').eq(i).text());
          } else {
            $('.transaction_money').eq(i).addClass('negative');
          }
        }
      });
    });
  };
  getdata(1);
  vm.pageChanged = () => {
    getdata(vm.page);
  };
  vm.tx = function () {
    window.location.href = '#/tx';
  }
}
