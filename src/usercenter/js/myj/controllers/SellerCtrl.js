export default function SellerCtrl() {
  var vm = this;
  vm.listTabs = [
    {
      name: '全部订单',
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
      name: '交易完成',
      url: '.jywc',
    },
    {
      name: '交易关闭',
      url: '.close',
    },
  ]
}