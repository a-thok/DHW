export default function TzlistCtrl() {
  var vm = this;
  vm.list=[
    {name:'项目标题', key:'title', width:'30%',},
    {name:'项目类型', key:'name', width:'15%'},
    {name:'项目状态', key:'status', width:'15%'},
    {name:'筹资进度', key:[
      {
        zid :'目标 :',
        zikey : 'moneys'
      },
      {
        zid : '进度 :',
        zikey : 'progress',
        zikeyfh : '%'
      }
    ], width:'20%'},
    {name:'支持金额', key:'supportmoney', width:'10%'},
    {name:'支持人数', key:'supportnum', width:'10%'},
  ]
}