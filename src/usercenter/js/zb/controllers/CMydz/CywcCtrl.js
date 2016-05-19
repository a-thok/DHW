export default function CywcCtrl() {
  var vm = this;
  vm.list = [
    { name: '任务名称', key: 'name', width: '20%' },
    { name: '任务单价', key: 'price', width: '20%' },
    { name: '任务需求描述', key: 'mirequire', width: '30%' },
    { name: '任务完成周期', key: 'miday', width: '20%' },
  ];
}