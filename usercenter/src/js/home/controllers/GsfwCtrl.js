import {
  typeids
} from '../../data/data.js'

export default function GsfwCtrl($http) {
   var vm = this;
   vm.typeids = typeids;
   vm.data = {};
   vm.submit = function() {
      var para = $.extend({},vm.data);
     $http.post('/CompanyHomeEdit/ServiceAdd',para).success( d =>{
       if(d.success) {
         console.log("成功")
       } 
     })
   }
}