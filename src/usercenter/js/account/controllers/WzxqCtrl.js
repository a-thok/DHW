export default function WzxqCtrl($http, $stateParams) {
  var vm = this;
  $http.post('/PersonHomeEdit/ArticleTypeList').success((data) => {
    vm.type = data.result;
  });
  var id = $stateParams.id;
  $http.post('/PersonHomeEdit/PersonArticleDeDetail', { id: id }).success((data) => {
    vm.data = data.result;
    for (var i = 0, len = vm.type.length; i < len; i++) {
      if (vm.type[i].id === vm.data.id) {
        vm.data.id = vm.type[i].id;
      }
    }
  });
  vm.submit = function () {
    var para = Object.assign({}, vm.data);
    para.id = id;
    $http.post('/PersonHomeEdit/PersonArticleDeEdit', para).success((data) => {
      if (data.success === true) {
        window.location.href = '#/wzlb';
      }
    });
  };
}
