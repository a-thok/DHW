export default function OutboxCtrl($http, $scope) {
  var vm = this;
  vm.data = {};
  vm.list = [
    { name: '发件人', key: 'to', width: '15%' },
    { name: '标题', key: 'title', width: '50%' },
    { name: '状态', key: 'state', width: '20%' },
  ]
  vm.del = function(id, index) {
    var para = {
      state: 255,
      arrid: [id]
    }
    var conf = confirm('是否确定删除');
    if (conf === true) {
      
      $http.post('/CenterUserDx/Delete', para).success(function(data) {
        if (data.success) {
          vm.listData.splice(index, 1)
        }
      })
    }
  }
  vm.arrid = [];
}