export default function YqljCtrl($http) {
    var vm = this;
    vm.links = [{}];
    
  vm.submitText = '提交';
  vm.isDisabled = false;
  function fail() {
        vm.isSubmitSuccess = false;
        vm.submitText = '提交';
        vm.isDisabled = false;
  }
  
    vm.addlink = function () {
      console.log(1);
      if (vm.links.length < 10) {
        vm.links.push({});
      } else {
        alert("最多只能上传十个友情链接");
        return;
      }
    }
    vm.dellink = function (index) {
      vm.links.splice(index, 1);
    }
    $http.post('/CompanyHomeEdit/LinkList').success( (d) => {
      if (d.result.links) {
        vm.links = d.result.links;
      }else {
        vm.links = [{}];
      }
    });
    
       vm.showModal = false;
   vm.submit = function () {
     vm.submitText = '提交中';
     vm.isDisabled = true;
      var newArr = [];
      for (var i = 0, len = vm.links.length; i < len; i++) {
        newArr.push(vm.links[i]);
      }

      newArr = angular.toJson(newArr);
      
      $http.post('/CompanyHomeEdit/LinkSave', {
        links: newArr
      }).success( (d) => {
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