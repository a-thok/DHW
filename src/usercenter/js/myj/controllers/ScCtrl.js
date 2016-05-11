export default function ScCtrl($http) {
  var vm = this;
  vm.list = [
    { name: '商品图片', key: 'image', width: '25%', img: true },
    { name: '商品名称', key: 'name', width: '20%' },
    { name: '类型', key: 'typeName', width: '15%' },
    { name: '价格', key: 'price', width: '15%' },
    { name: '门店价', key: 'storePrice', width: '15%' },
  ];
  vm.cancel = function (id) {
    var conf = confirm('确定要取消收藏吗?')
    if (conf === true) {
      $http.post('/Sys/o2o/Productcollect/del', { productid: id }).success((data) => {
        if (data.success === true) {
          location.reload();
        }
      })
    }
  }
}
