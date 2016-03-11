// 公司案例列表详情页
export default function CasesDetailCtrl($http,$stateParams) {
  var vm = this;
  vm.data = {};
  let id = $stateParams.id;
  $http.post('/CompanyHomeEdit/CaseDetail',{id:id}).success(function(d) {
    vm.data = d.result;
  })
  vm.submit = function() {
    var para = $.extend({},vm.data);
    $http.post('/CompanyHomeEdit/CaseEdit',para).success(function(d){
      if(d.success){
        
      }
    })
  }
}