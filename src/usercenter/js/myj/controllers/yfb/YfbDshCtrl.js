export default function YfbDshCtrl() {
  var vm = this;
  vm.list = [
    { name: '商标图片', key: 'image', width: '20%', img: true },
    { name: '商标名称', key: 'name', width: '15%', link2: true, linkkey: 'url' },
    { name: '类型', key: 'typeName', width: '15%' },
    { name: '状态', key: 'stateName', width: '15%' },
    { name: '价格', key: 'price', width: '15%' },
    { name: '门店价', key: 'storePrice', width: '10%' },
  ];
}