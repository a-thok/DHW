import {ytjlListTitle} from '../../data/data.js';  //引入公共的已投简历字段
export default function YtjlCtrl($http) {
  
   var vm = this;
   vm.ytjlListTitle = ytjlListTitle;
   var para = {
     pageIndex : 1,
     pageSize : 10
   }
   $http.post('/HRTdjl/List',para).success( (res) =>
      vm.data = res.result
      //console.log(res)
   )
}