// 已发项目查询
export default function CyfbCtrl() {
  var vm = this;
  vm.list = [
    {name:'项目类型',key:'protype',width:'20%'},
    {name:'项目名称',key:'title',width:'20%'},
    {name:'悬赏金额',key:'money',width:'20%'},
    {name:'交易模式',key:'transaction',width:'20%'},
    {name:'状态',key:'type',width:'10%'},
  ]
}