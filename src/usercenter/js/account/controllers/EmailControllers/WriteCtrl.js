import $ from 'jquery';
export default function WriteCtrl($http, $location) {
  var vm = this;
  vm.data = {};
  if ($location.search().to) {
    vm.data.to = $location.search().to;
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
