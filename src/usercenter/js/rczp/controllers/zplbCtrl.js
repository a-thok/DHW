export default function ZplbCtrl(){
  var vm = this;
  vm.listTabs = [
    { url: '.published',
      name: '已发布的招聘'
    },
    {
      url: '.offline',
      name: '已下线的招聘'
    }
  ];
}
