 // 工作经历控制器
export default function WorkCtrl() {
  var vm = this;
  vm.list=[
    {name: '公司名称',key : 'name', width: '20%'},
    {name: '工作时间',key : [
      {name:'begindate'},
      {name:'enddate'} ,],
      width: '30%',hasdate:true},
    {name: '行业',key : 'industry', width: '20%'},
    {name: '部门',key : 'department', width: '10%'},
    {name: '职位',key : 'position', width: '10%'},
  ]
}