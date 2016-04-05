import { companytrade } from '../../data/data.js';
export default function ApplyCtrl($http, $location) {
  const vm = this;
  vm.companytrade = companytrade;
  vm.data = {};
  let para = {};
  vm.submit = function () {
    para = Object.assign({}, vm.data);
    para.trade = vm.data.trade.name;
    para.dtid = vm.data.trade.value;
    para.platform = $location.search().platform;
    $http.post('/Zckj/Sqrz', para).success((d) => {
      if (d.success) {
        alert('success');
      }
    });
  };
}
