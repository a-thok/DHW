import { dhw } from '../../data/data.js';

export default function KsfbCtrl($http) {
  var vm = this;
  vm.dhw = dhw;
  vm.promptShow = false;
  vm.isRepeat = false;
  vm.isSearch = true;
  vm.search = function () {
    vm.promptShow = true;
    vm.isSearch = false;
    $http.post('/Sys/rshop/TrademarkFast/get', { regNo: vm.data.regNo }).success((data) => {
      if (data.success === true) {
        vm.data = data.result;
      } else {
        alert(data.msg);
        vm.data.regNo = '';
      }
    });
  };
  vm.submit = function () {
    vm.isRepeat = true;
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
        vm.isRepeat = false;
        alert(data.msg);
      }
    });
  };
}
