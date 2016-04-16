export default function ArticleCtrl($http) {
  var vm = this;
  $http.post('/PersonHomeEdit/ArticleTypeList').success((data) => {
    vm.type = data.result;
  });
  vm.submit = function () {
    var para = Object.assign({}, vm.data);
    $http.post('/PersonHomeEdit/PersonArticleDeAdd', para).success((data) => {
      if (data.success) {
        window.location.href = '#/wzlb';
      }
    });
  };
}
