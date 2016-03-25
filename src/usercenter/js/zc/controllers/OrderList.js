export default function OrderList () {
  var vm = this;
  
  vm.listTabs = [
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
  ]
}