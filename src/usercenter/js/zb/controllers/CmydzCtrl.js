export default function CmydzCtrl() {
  var vm = this;
  vm.listTabs = [
    {
      name: '已接单列表',
      url: '.cyjd'
    },
    {
      name: '已被雇佣列表',
      url: '.cygy'
    },
    {
      name: '已完成列表',
      url: '.cywc'
    }
  ];
}
