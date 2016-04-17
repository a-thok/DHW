import $ from 'jquery';
export default function WriteCtrl($http, $stateParams) {
  var vm = this;
  vm.data = {};
  if ($stateParams.name) {
    vm.data.to = $stateParams.name;
    setTimeout(function () {
      $('.reciever input').attr('readonly', 'readonly');
    });
  }
  var para;
  vm.send = function () {
    para = $.extend({}, vm.data);
    $http.post('/CenterUserDx/Ksfs', para).success(() => {
      window.location.href = '#/email/outbox';
    });
  };
}
