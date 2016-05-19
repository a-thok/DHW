export default function ShzCtrl($http) {
  var vm = this;
  vm.list = [
    { name: '项目标题', key: 'title', width: '25%' },
    { name: '项目总金额', key: 'totalfin', width: '13%' },
    { name: '项目类型', key: 'name', width: '21%' },
    { name: '资金状态', key: 'state', width: '13%' },
    { name: '截止时间', key: 'endtime', width: '18%' },
  ];
}
