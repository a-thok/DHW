import { dhw } from '../../data/data.js';

export default function KsfbCtrl($http) {
  var vm = this;
  vm.dhw = dhw;
  vm.promptShow = false;
  vm.search = function () {
    vm.promptShow = true;
    $http.post('/Sys/rshop/TrademarkFast/get', { regNo: vm.data.regNo }).success((data) => {
      if (data.success === true) {
        vm.data = data.result;
      } else {
        alert(data.msg);
      }
    });
  };
  vm.submit = function () {
    var para = {
      regNo: vm.data.regNo,
      sellprice: vm.data.sellprice
    };
    $http.post('/Sys/rshop/TrademarkFast/add', para).success((data) => {
      if (data.success === true) {
        var conf = confirm('提交成功');
        if (conf === true) {
          window.location.href = '#/splb/all';
        }
      } else {
        alert(data.msg);
      }
    });
  };
}
