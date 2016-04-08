// 会计认证列表控制器
export default function KjrzListCtrl() {
  var vm = this;
  vm.list = [
    {name : '图片', key : 'img', width : '40%', img : true},
    {name : '审核状态', key : 'state' ,width : '20%'},
    {name : '认证名称', key : 'name', width : '40%'}
  ]
}