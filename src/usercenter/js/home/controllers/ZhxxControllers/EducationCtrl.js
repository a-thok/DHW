// // 教育经历控制器
export default function EducationCtrl($http) {
  var vm = this;
  vm.listTitle=[
    {name: '学校名称',key : 'name', width: '20%'},
    {name: '学习日期',key : [
      {zikey:'begindate'},
      {zikey:'enddate'}
      ], width: '30%'},
    {name: '学历',key : 'xl', width: '20%'},
    {name: '专业',key : 'major', width: '20%'},
  ]

}