export default function SellerdfhCtrl($http) {
  var vm = this;
  vm.visible = false;
  vm.data = {};
  vm.confirmsend = (number) => {
    vm.visible = true;
    vm.data.number = number;
  };
  vm.submit = () => {
    var para = Object.assign({}, vm.data);
    $http.post('/Sys/o2o/OrderSeller/SellerUpdate', para).success((d) => {
      if (d.success) {
        alert('操作成功');
        location.reload();
      }
    });
  };
  vm.close = () => {
    vm.visible = false;
  };
}
