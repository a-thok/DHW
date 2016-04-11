import $ from 'jquery';
export default function GsdtEditCtrl($http, $stateParams) {
  var vm = this;
  // vm.data = {};
  let id = $stateParams.id;
  $http.post('/CompanyHomeEdit/NewDetail', { id: id }).success((d) => {
    vm.data = d.result[0];
  });
  vm.submit = () => {
    var para = Object.assign({}, vm.data, { id: id });
    $http.post('/CompanyHomeEdit/NewEdit', para).success((d) => {
      if (d.success) {
        alert('修改成功');
      } else {
        alert('因网络原因修改失败');
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
