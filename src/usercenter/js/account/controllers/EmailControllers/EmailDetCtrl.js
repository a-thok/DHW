export default function EmailDetCtrl($http, $stateParams, $scope) {
  var vm = this;
  vm.data = {};
  var id = parseInt($stateParams.id, 10);
  $http.post('/CenterUserDx/Detail', { id: id }).success((data) => {
    $scope.data = data.result;
  });
  vm.return = function () {
    window.location.href = '#/email';
  };
  vm.del = function () {
    var para = {
      state: 255,
      arrid: [id]
    };
    var conf = confirm('是否确定删除');
    if (conf === true) {
      $http.post('/CenterUserDx/Delete', para).success((data) => {
        if (data.success) {
          window.location.href = '#/email';
        }
      });
    }
  };
}
