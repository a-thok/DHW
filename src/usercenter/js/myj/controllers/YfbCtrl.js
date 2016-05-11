export default function YfbCtrl() {
  var vm = this;
  vm.listTabs = [
    {
      name: '全部',
      url: '.all',
    },
    {
      name: '待审核',
      url: '.dsh',
    },
    {
      name: '审核通过',
      url: '.tg',
    },
    {
      name: '审核不通过',
      url: '.btg',
    },
  ]
}