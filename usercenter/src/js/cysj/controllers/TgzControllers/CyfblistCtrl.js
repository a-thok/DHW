// 发布人列表页查询
export default function CyfblistCtrl() {
  var vm = this;
  vm.list = [
    {name : '项目名称', key : 'title', width : '30%'},
    {name : '投稿人名称', key : 'name', width : '30%'},
    {name : '报价', key : 'quote', width : '20%'},
    {name : '投稿时间', key : 'time', width : '10%'},
  ]
}
