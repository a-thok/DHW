import {
  homesex,
  education
} from '../../../data/data.js';
export default function PzhpersonCtrl($http) {
  var vm = this;
  vm.sex = homesex;
  vm.education = education;
  vm.data = {};
  function fail() {
    vm.isSubmitSuccess = false;
    vm.isDisabled = false;
  }
  vm.hideModal = () => { vm.showModal = false; setTimeout(function () { location.reload(); }, 500); };
  $http.post('/UserAccount/Detail').success((d) => {
    if (d.success) {
      vm.data = d.result;
      if (d.result.partne) {
        $('.formInputSet_radio_one').css({
          'background-position': '0 -20px',
        });
      } else {
         $('.formInputSet_radio_two').css({
          'background-position': '0 -20px',
        });
      }
    }
  });
  // 查看用户是否认证
  $http.post('/LoginService/Certify').success((d) => {
    if (d.success) {
      vm.hasCompanyCerfity = d.result.CompanyCertify;
      vm.hasPersonCerfity = d.result.PersonCertify;
    }
  });
  vm.selectTrans = function (event, transNum) {
    vm.data.partne = transNum;
    $(event.target).parents('.formSet').find('.formInputSet_radio').css({
      'background-position': '0 0',
    });
    $(event.target).css({
      'background-position': '0 -20px',
    });
  };
  vm.submit = function () {
    var para = $.extend({}, vm.data);
    $http.post('/UserAccount/Edit', para).success((d) => {
      if (d.success) {
        vm.isSubmitSuccess = true;
        vm.isDisabled = true;
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
