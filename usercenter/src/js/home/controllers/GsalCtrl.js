export default function GsalCtrl($http) {
  var vm = this;
  vm.data = {};
  vm.submit = function() {
    var para = $.extend({},vm.data);
    console.log(para)
    $http.post('/CompanyHomeEdit/CaseAdd',para).success(function(d){
      if(d.success){
        
      }
    })
  }
}
