export default function JyzCtrl() {
  let vm = this;
  vm.list = [
    { name: '商标图片', key: 'img', width: '15%', img: true },
    { name: '商标名称', key: 'projectName', width: '10%' },
    { name: '使用范围', key: 'services', width: '20%' },
    { name: '状态', key: 'state', width: '10%' },
    { name: '购买价格', key: 'price', width: '15%' },
    { name: '转让价格', key: 'sellprice', width: '10%' },
    { name: '交易形式', key: 'tradetypeName', width: '10%' },
  ];
}
