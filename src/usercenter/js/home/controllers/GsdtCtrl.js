// 公司动态控制器
export default function GsdtCtrl() {
  var vm = this;
  vm.listTabs = [
    {
      name: '动态发布',
      url: '.fb'
    },
    {
      name: '动态列表',
      url: '.list'
    }
  ];
}
