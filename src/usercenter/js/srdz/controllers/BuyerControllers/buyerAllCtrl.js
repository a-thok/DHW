export default function buyerAllCtrl() {
  var vm = this;
  vm.list = [
    { name: '项目图片', key: 'productlmg', width: '15%', img: true, rczp: true },
    { name: '项目名称', key: 'projectName', width: '20%', link: true, linkkey: 'productid' },
    { name: '项目描述', key: 'body', width: '15%' },
    { name: '数量', key: 'count', width: '10%' },
    { name: '状态', key: 'stateName', width: '10%' },
    { name: '订单金额', key: 'total_fee', width: '10%' },
    { name: '下单日期', key: 'date', width: '10%' },
    { name: 'sku', key: 'skuName', width: '10%' },
  ];
}
