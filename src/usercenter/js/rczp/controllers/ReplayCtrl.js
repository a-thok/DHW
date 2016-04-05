export default function ReplayCtrl($scope) {
  var vm = this;
  vm.data = {};
  vm.list = [
    { name: '内容', key: [
      { keyname: '', keyword: 'about' },
      { keyname: '[回复]', keyword: 'huifu' },
    ], width: '40%' },
    { name: '评论用户：', key: 'name', width: '20%' },
    { name: '职位信息：', key: [
      { keyname: '', keyword: 'position' },
      { keyname: '薪资', keyword: 'money' }
    ], width: '30%' },
  ];
  $scope.style = {
    top: '-9999px',
    left: '-9999px'
  };
}
