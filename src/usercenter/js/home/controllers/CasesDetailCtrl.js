// 公司案例列表详情页
export default function CasesDetailCtrl($http,$stateParams) {
  var vm = this;
  vm.data = {};
  function fail() {
        vm.isSubmitSuccess = false;
        vm.isDisabled = false;
    }
  
  
  
  let id = $stateParams.id;
  $http.post('/CompanyHomeEdit/CaseDetail',{id:id}).success(function(d) {
    vm.data = d.result;
  })
  vm.submit = function() {
    var para = $.extend({},vm.data);
    $http.post('/CompanyHomeEdit/CaseEdit',para).success(function(d){
      if(d.success){
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