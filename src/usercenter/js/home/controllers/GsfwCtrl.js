import {
  typeids
} from '../../data/data.js'

export default function GsfwCtrl($http) {
   var vm = this;
   vm.typeids = typeids;
   vm.data = {};
   
     function fail() {
        vm.isSubmitSuccess = false;
        vm.isDisabled = false;
    }
    
   vm.submit = function() {
      var para = $.extend({},vm.data);
     $http.post('/CompanyHomeEdit/ServiceAdd',para).success( d =>{
       if(d.success) {
          vm.isSubmitSuccess = true;
       }else {
          vm.errorMsg = res.msg;
          fail();
       }
       vm.showModal = true; 
     }).error(() => {
       fail();
       vm.showModal = true;
     })
   }
}