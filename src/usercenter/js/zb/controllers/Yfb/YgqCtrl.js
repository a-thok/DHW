// 已过期
export default function YgqCtrl($http) {
  var vm = this;
  vm.list = [
    { name: '项目标题', key: 'title', width: '12%' },
    { name: '项目总金额', key: 'totalfin', width: '13%' },
    { name: '项目类型', key: 'name', width: '13%' },
    { name: '资金状态', key: 'state', width: '13%' },
    { name: '人次', key: 'personTime', width: '13%' },
    { name: '截止时间', key: 'endtime', width: '13%' },
    { name: '审核时间', key: 'shtime', width: '13%' },
  ];
}
