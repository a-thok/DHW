export default function PreplayCtrl($scope) {
  var vm = this;
  vm.list = [
    { name: '内容', key: [
      { keyname: '', keyword: 'about' },
      { keyname: '[回复]', keyword: 'huifu' },
    ], width: '50%' },
    { name: '公司信息：', key: [
      { keyname: '公司：', keyword: 'company' },
      { keyname: '薪资', keyword: 'money' }
    ], width: '40%' },
  ];
  $scope.style = {
    top: '-9999px',
    left: '-9999px'
  };
}
