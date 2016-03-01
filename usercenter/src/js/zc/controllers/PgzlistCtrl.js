// 个人关注列表控制器
export default function PgzlistCtrl($http) {
  var vm = this;
  vm.list=[
     {name:'项目标题', key:'title', width:'30%',link:'http://zc.dreamhiway.com/cpzcDetail/p', linkkey:'fpid'},
     {name:'项目类型', key:'name', width:'20%'},
     {name:'项目状态', key:'status', width:'20%'},
     {
      name: '筹资进度', key: [
        {zid:'目标 :',
         zikey:'moneys'
        },
        { zid:'进度 :',
          zikey:'progress',
          zikeyfh:'%'
        },
       ],width:'20%',
     },
   
  ]
  
  //所需要的操作函数--取消关注
 vm.cancel = function(cancelId) {
   $http.post('/CpzcGzList/DelAttention',{id:cancelId}).success( res => {
      if(res.success) {
        //console.log("取消关注成功")
        location.reload();
      }
   })
  //  console.log(cancelId);
 }
  
  
}