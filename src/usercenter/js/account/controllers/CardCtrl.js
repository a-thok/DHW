export default function CardCtrl($http) {
  var vm = this;
  $http.post('/sys/user/card/get').success((data) => {
    if (data.result) {
      vm.data = data.result;
    }
  });
  vm.submit = () => {
    var para = Object.assign({}, vm.data);
    $http.post('/sys/user/card/add', para).success(() => {
      window.location.href = '#/money';
    });
  };
}
