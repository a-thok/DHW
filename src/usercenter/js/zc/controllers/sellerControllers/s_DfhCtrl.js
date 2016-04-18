export default function s_DfhCtrl($scope) {
  var vm = this;
  vm.list = [
    { name: '项目标题', key: 'projectname', width: '20%', link: true, linkkey: 'rowId' },
    { name: '收件人名称', key: 'receiveName', width: '15%' },
    { name: '回报标题', key: 'hbtitle', width: '15%' },
    { name: '订单编号', key: 'number', width: '20%' },
    { name: '回报数量', key: 'hbcount', width: '10%' },
    { name: '总金额', key: 'cost', width: '10%' },
  ];
  vm.id = $scope.$parent.sellerVm.id;
}
