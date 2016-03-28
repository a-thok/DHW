// 公司动态控制器
import $ from 'jquery';
export default function GsdtCtrl($http) {
  var vm = this;
  vm.data = {};
  vm.submit = function () {
    var para = Object.assign({}, vm.data);
    $http.post('/CompanyHomeEdit/NewsAdd', para).success((d) => {
      if (d.success) {
        alert('上传成功');
      }
    });
  };
  vm.selectTrans = function (event, type) {
    vm.data.type = type;
    $(event.target).parents('.formSet').find('.formInputSet_radio').css({
      'background-position': '0 0',
    });
    $(event.target).css({
      'background-position': '0 -20px',
    });
  };
}
