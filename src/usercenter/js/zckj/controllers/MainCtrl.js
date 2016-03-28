export default function MainCtrl() {
  var vm = this;
  // 公司
  vm.routes_c = [
    {
      url: 'list',
      text: '入驻列表',
      active: false
    },
    {
      url: 'apply',
      text: '申请入驻',
      active: false
    }
  ];
  vm.routes = {
    title: '常用功能',
    items: vm.routes_c
  };
}
