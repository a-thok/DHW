import {
  dhw
} from '../../data/data.js';
export default function ZxmCtrl($http, $stateParams) {
  var vm = this;
  vm.dhw = dhw;
  vm.list = [
    { name: '任务名称', key: 'name', width: '10%' },
    { name: '状态', key: 'statemc', width: '10%' },
    { name: '任务单价', key: 'unitprice', width: '20%' },
    { name: '任务完成周期', key: 'miday', width: '20%' },
    { name: '接单人数', key: 'jdrs', width: '10%' },
    { name: '退款申请状态', key: 'restate', width: '20%' },
  ];
  vm.id = $stateParams.id;
  // 申请退款
  vm.tk = (fpid, zpsid, missionna, unitprice) => {
    var para = {
      fpid: fpid,
      zpsid: zpsid,
      missionna: missionna,
      unitprice: unitprice
    };
    $http.post('/Zbfb/Refund', para).success((d) => {
      if (d.success) {
        alert('操作成功');
      } else {
        alert('网路原因操作失败，请刷新后重试');
      }
    });
  };
}
