export default function OrderList() {
  var vm = this;
  vm.listTabs = [
     {
      name: '全部',
      url: '.all',
    },
    {
      name: '待付款',
      url: '.dfk',
    },
    {
      name: '待发货',
      url: '.dfh',
    },

    {
      name: '待收货',
      url: '.dsh',
    },
    {
      name: '待评价',
      url: '.dpj',
    },
  ];
}
