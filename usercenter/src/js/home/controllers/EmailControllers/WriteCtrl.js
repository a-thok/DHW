export default function WriteCtrl($http) {
  var vm = this;
  vm.data = {};
  var para;
  vm.send = function() {
    para = $.extend({}, vm.data);
    $http.post('/CenterUserDx/Ksfs', para).success(function(d) {
      window.location.href = '#/email/outbox'
    })
  }
}