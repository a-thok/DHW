export default function AddressCtrl($http) {
  var vm = this;
  vm.list = [
    {name : '收货人姓名', key : 'name', width : '30%'},
    {name : '详细地址', key : 'address', width : '30%'},
    {name : '邮编', key : 'code', width : '10%'},
    {name : '手机号码', key : 'mobile', width : '10%'},
    {name : '是否默认', key : 'isDefault', width : '10%',addre : true},
  ]
  var para = {};
  vm.draft = {};
  vm.submitText = '提交';
  vm.isDisabled = false;
  function fail() {
    vm.isSubmitSuccess = false;
    vm.submitText = '提交';
    vm.isDisabled = false;
  }
  vm.getDraft = function(fn) {
    
  }
  vm.showModal = false;
  vm.submit = function() {
    vm.submitText = '提交中';
    vm.isDisabled = true;
    para = $.extend({},vm.data);
    var content = vm.draft.basic();
    para.area = $.extend({},content.area);
    
    $http.post('/useraddr/add', para).success(function(d) {
      if(d.success) {
        vm.isSubmitSuccess = true;
        vm.submitText = '提交',
        vm.isDisabled = false;
        setTimeout(function() {
           location.reload();
        },3000)
        
      }else {
        vm.errorMsg = '因网络原因，提交失败，请重新进行提交';
        fail();
      }
      vm.showModal = true;
    }).error(() => {
      fail();
      vm.showModal = true;
    })
  }
  
  vm.default = function(id) {
    $http.post('/useraddr/setdefault',{id : id}).success(function(d) {
      if(d.success) {
        vm.isSubmitSuccess = true;
        vm.submitText = '提交',
        vm.isDisabled = false;
        setTimeout(function() {
          location.reload();
        },3000);
      }else {
        vm.errorMsg = '因网络原因，提交失败，请重新进行设置';
        fail();
      }
      vm.showModal = true;
    }).error(() => {
      fail();
      vm.showModal = true;
    })
  }
}