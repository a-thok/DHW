export default function PgzlistCtrl() {
  var vm = this;
  vm.list=[
    {name:'项目标题', key:'title', width:'30%', link:'zc.dreamhiway/', linkkey:'fpid'},
    {name:'项目类型', key:'name', width:'20%'},
    {name:'项目状态', key:'status', width:'20%'},
    {name:'筹资进度', key:'progress', width:'20%'},
  ]
}