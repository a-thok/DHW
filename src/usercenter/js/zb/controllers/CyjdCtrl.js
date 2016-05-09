// 公司账号 --已接单
export default function CyjdCtrl() {
  var vm = this;
  vm.list = [
    { name: '任务名称', key: 'name', width: '20%' },
    { name: '任务单价', key: 'price', width: '20%' },
    { name: '技能要求', key: 'requireski', width: '10%' },
    { name: '任务需求描述', key: 'mirequire', width: '20%' },
    { name: '任务完成周期', key: 'miday', width: '10%' },
    { name: '所需人数', key: 'mipnum', width: '20%' },
  ];
}
