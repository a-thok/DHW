export default function PreplayCtrl($scope) {
  var vm = this;
  vm.list = [
    { name: '内容', key: [
      { keyname: '', keyword: 'about' },
      { keyname: '[已收到回复]', keyword: 'huifu' },
    ], width: '50%' },
    { name: '公司名称', key: 'company', width: '25%' },
    { name: '职位信息', key: [
      { keyname: '名称：', keyword: 'position' },
      { keyname: '薪资', keyword: 'money' }
    ], width: '25%' },
  ];
  $scope.style = {
    top: '-9999px',
    left: '-9999px'
  };
}
