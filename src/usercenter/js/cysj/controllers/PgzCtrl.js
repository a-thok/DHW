// 个人关注项目列表控制器
export default function PgzCtrl($http) {
  var vm = this;
  vm.dhw = dhw;
  vm.list = [
    { name: '项目标题', key: 'title', width: '40%', link: true, linkkey: 'id' },
    { name: '结束时间', key: 'endtime', width: '30%' },
    { name: '收藏时间', key: 'collecttime', width: '20%' }
  ];
  vm.cancelFocus = function (id) {
    $http.post('/CysjPub/CysjScDel', { fpid: id }).success((d) => {
      if (d.success) {
        Location.reload();
      }
    });
  };
}
