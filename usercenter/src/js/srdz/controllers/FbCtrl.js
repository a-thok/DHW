import {
  category
} from '../../data/data.js'
export default function FbCtrl($http) {
  var vm = this;
  vm.data = {}
  
  vm.category = category;
  vm.submit = function() {
    var para = $.extend({},vm.data);
    para.type = vm.data.type.id
    console.log(para);
    // $http.post('/SrdzFb/srfb',para).success(function(d) {
    //   if(d.success) {
    //     console.log(vm.data)
    //     console.log("成功")
    //   }else {
    //     console.log("失败")
    //   }
    // })
  }
} 