//  个人版 我的单子 主控制器
export default function MydzCtrl() {
  var vm = this;
  vm.listTabs = [
    {
      name: '已接单列表',
      url: '.yjd'
    },
    {
      name: '已被雇佣列表',
      url: '.ygy'
    },
    {
      name: '已完成列表',
      url: '.ywc'
    }
  ];
}
