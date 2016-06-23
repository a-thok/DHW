export default function ScCtrl($http) {
  var vm = this;
  vm.list = [
    { name: '商标图片', key: 'img', width: '20%', img: true },
    { name: '商标名称', key: 'name', width: '20%' },
    { name: '分类名称', key: 'pcodeName', width: '15%' },
    { name: '使用范围', key: 'type', width: '20%' },
    { name: '购买价格', key: 'price', width: '15%' },
  ];
  vm.cancelAttention = (id) => {
    console.log(id);
    $http.post('/Sys/rshop/TrademarkCollect/CollectDel', { ttid: id }).success(() => {
    });
  };
}
