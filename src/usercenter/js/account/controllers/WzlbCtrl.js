export default function WzlbCtrl($http) {
  var vm = this;
  vm.list = [
    { name: '文章标题', key: 'title', width: '30%' },
    { name: '文章类型', key: 'type', width: '15%' },
    { name: '点赞人数', key: 'praise', width: '15%' },
    { name: '收藏人数', key: 'collection', width: '15%' },
    { name: '浏览人数', key: 'visitors', width: '15%' },
  ];
  vm.del = function (id) {
    var conf = confirm('是否确定删除');
    if (conf === true) {
      $http.post('/PersonHomeEdit/PersonArticleDeDel', { id: id }).success((data) => {
        if (data.success) {
          location.reload();
        }
      });
    }
  };
}
