// 投稿者列表
export default function CytglistCtrl($stateParams) {
  var vm = this;
  vm.id = $stateParams.id;
  vm.list = [
    { name: '项目标题', key: 'title', width: '30%' },
    { name: '报价', key: 'quote', width: '20%' },
    { name: '地区', key: 'address', width: '20%' },
    { name: '周期', key: 'worktime', width: '20%' },
  ];
}
