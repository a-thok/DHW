export default function ZwscCtrl($http) {
   var vm = this;
   vm.list = [
     {name : '公司logo', key : 'logo', img :true, width:'20%'},
     {name : '公司名称', key : 'compay', width:'10%'},
     {name : '职位名称', key : 'position', width:'20%'},
     {name : '城市名称', key : 'city', width:'10%' },
     {name : '工作年限', key : 'gznx', width:'10%'},
     {name : '学历', key : 'xueli',width : '10%'},
     {name : '工作地址', key : 'gzdz',width : '10%'},
   ]
     //所需要的操作函数--取消关注
 vm.cancel = function(cancelId,canceltype) {
   $http.post('/HRSczw/Qxsc',{jobid:cancelId,type:canceltype}).success( res => {
      if(res.success) {
        location.reload()
      }
   })
 }
  
}