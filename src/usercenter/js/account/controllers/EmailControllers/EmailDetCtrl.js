export default function EmailDetCtrl($http, $stateParams, $scope) {
  var vm = this;
  vm.data = {};
  var id = parseInt($stateParams.id)
  $http.post('/CenterUserDx/Detail', { id: id }).success(function(data) {
    $scope.data = data.result;
  })
  vm.return = function() {
    window.location.href = '#/email'
  }
  vm.del = function() {
    var para = {
      state: 255,
      arrid: [id]
    }
    var conf = confirm('是否确定删除');
    if (conf === true) {
      h.post('/CenterUserDx/Delete', para).success(function(data) {
        if (data.success) {
          window.location.href = '#/email'
        }
      })
    }
  }
}