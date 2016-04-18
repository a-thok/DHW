import $ from 'jquery';
export default function WriteCtrl($http, $localtion) {
  var vm = this;
  vm.data = {};
  if ($localtion.search().to) {
    vm.data.to = $localtion.search().to;
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
