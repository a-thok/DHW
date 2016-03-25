export default function CgzCtrl($http) {
  var vm = this;
  vm.list = [
    {name: '项目标题', key: 'title', width: '40%'},
    {name: '结束时间', key: 'endtime', width: '30%'},
    {name: '收藏时间', key: 'collecttime', width: '20%'}
  ];
  vm.cancelFocus = function(id) {
    $http.post('/CysjPub/CysjScDel',{fpid: id}).success(function(d) {
      if(d.success) {
        Location.reload();
      }
    })
  }
}