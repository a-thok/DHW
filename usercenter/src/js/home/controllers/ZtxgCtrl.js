// // import colpick from 'colpick';
export default function ZtxgCtrl($scope,$http){
    var vm=this;
    vm.data = {
      themes: {}
    };
    $http.post('/CompanyHomeEdit/TitleDetail').success( (data) => {
     vm.data = data.result;
      if (vm.data.themes === null) {
        vm.data.themes = {}
      }
      vm.data.themes = JSON.parse(vm.data.themes);
    });

    vm.submit = ()=> {
      var para = $.extend(true, {}, vm.data);
      para.themes = angular.toJson(para.themes);
      console.log(para);
      $http.post('/CompanyHomeEdit/TitleSave', para).success(() => {
      })
    }
}