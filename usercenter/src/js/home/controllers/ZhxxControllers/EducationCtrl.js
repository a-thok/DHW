// // 教育经历控制器
export default function EducationCtrl($http) {
  var vm = this;
  vm.list=[
    {name: '学校名称',key : 'name', width: '20%'},
    {name: '学习日期',key : [
      {name:'begindate'},
      {name:'enddate'}
      ], width: '30%',hasdata:true},
    {name: '学历',key : 'xl', width: '20%'},
    {name: '专业',key : 'major', width: '20%'},
  ]
  let getData = () => {
        $http.post('/UserAccount/EduList').success(res => {
          vm.listData = res.result;
          console.log(vm.data)
        })
      }
      getData();
  //  vm.modify = function(modifyId, index) {
  //       vm.index = index
        
  //       $http.post('/UserAccount/Eduinfo',{id : modifyId}).success(function(d) {
  //          vm.data = d.result
  //          var  a = d.result.begindate.split("-");
  //          var  b = d.result.enddate.split("-");
  //          vm.startYear =  a[0];
  //          vm.startMonth = a[1];
  //          vm.endYear = b[0];
  //          vm.endMonth = b[1]
         
  //       })
  //     }   
}