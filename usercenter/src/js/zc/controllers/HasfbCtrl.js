export default function HasfbCtrl() {
  var vm=this;
  vm.list=[
    {name:'项目信息', key:'title', width:'30%', img:true},
    {name:'项目类型', key:'projectType' , width:'15%'},
    {name:'项目状态', key:'Status' , width:'15%'},
    {name:'筹资进度', key:'progress' , width:'15%'},
    {name:'结算状态', key:'moneySum' , width:'15%'},
  ]
}