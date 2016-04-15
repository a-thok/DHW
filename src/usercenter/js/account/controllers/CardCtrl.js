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
  vm.cardList = ['中国工商银行', '中国建设银行', '中国银行', '交通银行', '中国农业银行', '招商银行', '中国邮政储蓄银行', '中国光大银行',
   '中国民生银行', '平安银行', '浦发银行', '中信银行', '兴业银行', '华夏银行', '广发银行'];
}
