export default function SellerYqxCtrl() {
  let vm = this;
  vm.list = [
    { name: '商标图片', key: 'img', width: '20%', img: true },
    { name: '商标名称', key: 'name', width: '20%' },
    { name: '使用范围', key: 'type', width: '20%' },
    { name: '状态', key: 'stateName', width: '10%' },
    { name: '购买价格', key: 'price', width: '10%' },
    { name: '转让价格', key: 'sellprice', width: '10%' },
    { name: '交易形式', key: 'tradetypeName', width: '10%' },
  ]
}