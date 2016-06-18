export default function buyerDfkCtrl() {
  var vm = this;
  vm.list = [
    { name: '项目图片', key: 'productlmg', width: '15%', img: true },
    { name: '项目名称', key: 'projectName', width: '15%', link: true, linkkey: 'productid' },
    { name: '产品规格', key: 'skuName', width: '20%' },
    // { name: '项目描述', key: 'body', width: '10%' },
    { name: '数量', key: 'count', width: '10%' },
    { name: '状态', key: 'stateName', width: '10%' },
    { name: '订单金额', key: 'total_fee', width: '10%' },
    { name: '下单日期', key: 'date', width: '10%' },
  ];
  vm.dhw = dhw;
}
