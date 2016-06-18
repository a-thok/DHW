export default function sellerDfkCtrl() {
  var vm = this;
  vm.list = [
    { name: '产品名称', key: 'subject', width: '20%', link: true, linkkey: 'productid' },
    { name: '买家名称', key: 'receiveName', width: '20%' },
    { name: '状态', key: 'stateName', width: '10%' },
    { name: '下单时间', key: 'date', width: '20%' },
    { name: '数量', key: 'count', width: '10%' },
    { name: '总金额', key: 'total_fee', width: '10%' },
  ];
}
