export default function KjrzCtrl($http) {
  var vm = this;
  vm.data = {};
  $http.post('/Certification/IconList',{type : 'kj'}).success( (d) => {
      vm.selecttype = d.result;   
  })
  vm.submit = function() {
    $http.post('/Certification/CertificationAdd',vm.data).success((d) => {
      if(d.result) {
        alert("提交成功");
      }else {
        alert("您已经提交过了，请到列表页查看")
      }
    })
  }
}