// 发布人列表页查询
export default function CyfblistCtrl($http, $stateParams) {
  var vm = this;
  vm.id = $stateParams.id;
  vm.list = [
    {name : '项目名称', key : 'title', width : '30%'},
    {name : '投稿人名称', key : 'name', width : '30%'},
    {name : '报价', key : 'quote', width : '10%'},
    {name : '投稿时间', key : 'time', width : '10%'},
    {name : '是否雇佣', key : 'bidding', width : '10%'},
  ];
  vm.guyong = function(cpid, id) {
    $http.post('/CysjFb/UserEdit',{cpid : cpid, id : id}).success(function(d) {
      if(d.success) {
        alert('雇佣成功');
        location.reload();
      }
    })
  }
}
