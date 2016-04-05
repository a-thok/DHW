// 公司服务列表详情页
import {
  typeids
} from '../../data/data.js'
export default function ServerDetailCtrl($http,$stateParams){
  var vm = this;
  vm.data = {};
  function fail() {
     vm.isSubmitSuccess = false;
     vm.isDisabled = false;
  }
  vm.typeids = typeids;
  let id = $stateParams.id
  $http.post('/CompanyHomeEdit/ServiceDetail',{id : id}).success(function(d) {
    vm.data = d.result;
  })
  vm.submit = function(){
    $http.post('/CompanyHomeEdit/ServiceEdit',vm.data).success(function(d) {
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