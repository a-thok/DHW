export default function GzlistCtrl($http) {
  var vm = this;
  vm.list=[
     {name:'项目标题', key:'title', width:'30%',link:'http://zc.dreamhiway.com/cpzcDetail/', linkkey:'fpid'},
     {name:'项目类型', key:'name', width:'20%'},
     {name:'项目状态', key:'status', width:'20%'},
     {
      name: '筹资进度', key: [
        {zid:'目标 :',
         zikey:'moneys'
        },
        { zid:'进度',
          zikey:'progress',
          zikeyfh:'%'
        },
       ],width:'20%',
     },
   
  ]
 //所需要的操作函数--取消关注
 vm.edit = function(cancelId) {
   $http.post('/CpzcGzList/DelAttention',{id:cancelId}).success( res => {
      if(res.success) {
        console.log("取消关注成功")
      }
   })
   console.log(cancelId);
 }
}
// 跳转链接的 link 地址需要更改  linkkey代表的是这个项目的 id