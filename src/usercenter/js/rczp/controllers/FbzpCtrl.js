import {
  jobCategory,
  salary,
  exprience,
  education
} from '../../data/data.js';

export default function FbzpCrtl($http) {
  var vm = this;
  var para = {};
  vm.data = {};
  vm.draft = {};
  vm.submitText = '提交';
  vm.isDisabled = false;
  function fail() {
        vm.isSubmitSuccess = false;
        vm.submitText = '提交';
        vm.isDisabled = false;
  }
  vm.jobCategory = jobCategory;
  vm.salary = salary;
  vm.exprience = exprience;
  vm.education = education;
  vm.getDraft = function(fn){
    $http.post('/HRZpxxFb/GetArea').success(function(d){
       fn(d.result[0].area);
    })
  }
   vm.showModal = false;
  vm.submit = function() {
     vm.submitText = '提交中';
     vm.isDisabled = true;
     
    var content = vm.draft.basic();
    para.model = vm.data;
    para.area = $.extend({},content.area);
    $http.post('/HRZpxxFb/InfoFb',para).success(function(d){
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
