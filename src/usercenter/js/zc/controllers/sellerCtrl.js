export default function SellerCtrl($stateParams) {
  var vm = this;
  vm.listTabs = [
    {
      name: '全部订单',
      url: '.all',
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
      name: '已收货',
      url: '.ysh',
    },
  ]
  vm.id = $stateParams.id;
}