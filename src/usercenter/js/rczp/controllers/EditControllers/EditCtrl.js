import {
  jobCategory,
  salary,
  exprience,
  education
} from '../../../data/data.js';
import $ from 'jquery';
export default function EditCtrl($http, $stateParams, $location) {
  var vm = this;
  vm.draft = {};
  vm.data = {};
  var para = {};
  vm.statemc = $location.search().statemc;
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
  vm.data = {};
  let id = $stateParams.id;

  vm.getDraft = function (fn) {
    $http.post('/HRZpxxFb/Detail', { id: id }).success((d) => {
      if (d.success) {
        vm.data = d.result.model;

        fn(d.result.area);
      }
    });
  };

  vm.showModal = false;
  vm.submit = function () {
    vm.submitText = '提交中';
    vm.isDisabled = true;

    var content = vm.draft.basic();

    para.model = vm.data;
    para.area = $.extend({}, content.area);
    $http.post('/HRZpxxFb/Edit', para).success((d) => {
      if (d.success) {
        vm.isSubmitSuccess = true;
      } else {
        vm.errorMsg = d.msg;
        fail();
      }
      vm.showModal = true;
    }).error(() => {
      fail();
      vm.showModal = true;
    });
  };
}
