// // import colpick from 'colpick';
export default function ZtxgCtrl($scope,$http){
    var vm=this;
    vm.data = {
      themes: {}
    };
    function fail() {
        vm.isSubmitSuccess = false;
        vm.isDisabled = false;
    }
    
    $http.post('/CompanyHomeEdit/TitleDetail').success( (data) => {
     vm.data = data.result;
      if (vm.data.themes === null) {
        vm.data.themes = {}
      }
      vm.data.themes = JSON.parse(vm.data.themes);
    });
    vm.showModal = false;
    vm.submit = ()=> {
      vm.isDisabled = true;
      var para = $.extend(true, {}, vm.data);
      para.themes = angular.toJson(para.themes);
      $http.post('/CompanyHomeEdit/TitleSave', para).success((d) => {
        if (d.success) {
          vm.isSubmitSuccess = true;
        } else {
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