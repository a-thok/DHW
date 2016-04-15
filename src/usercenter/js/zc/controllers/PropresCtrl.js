// 项目进展控制器
export default function PropresCtrl($http, $stateParams) {
  let vm = this;
  let fpid = $stateParams.id;
  vm.data = {};
  $http.post('/CpzcList/ZxjzDetail', { fpid: fpid }).success((d) => {
    if (d.success) {
      vm.dtlist = d.result;
    }
  });
  vm.submit = () => {
    var para = Object.assign({}, vm.data, { fpid: fpid });
    $http.post('/CpzcList/ZxjzAdd', para).success((d) => {
      if (d.success) {
        alert('提交成功');
        location.reload();
      } else {
        alert('提交失败');
        location.reload();
      }
    });
  };
}
