export default function GyzCtrl($http, $stateParams) {
  var vm = this;
  vm.dhw = dhw;
  vm.list = [
    { name: '接单人', key: 'name', width: '10%' },
    { name: '联系方式', key: 'contact', width: '20%' },
    { name: '投标内容', key: 'content', width: '30%' },
    { name: '投标资料', key: 'attachment_origin', linkkey: 'attachment', link: true, width: '10%' },
    { name: '工作资料', key: 'fjname', linkkey: 'fj', link: true, width: '10%' },
    { name: '状态', key: 'state', width: '10%' }
  ];
  var fpid = $stateParams.id;
  vm.listTabs = [];
  // var urlarr = ['.pro1', '.pro2', '.pro3', '.pro4', '.pro5', '.pro4'];
  $http.post('/zbfb/Zblist', { id: fpid }).success((d) => {
    if (d.success) {
      vm.listTabs = d.result;
      vm.id = d.result[0].id;
      vm.tradeName = d.result[0].name;
    }
  });
  // 雇佣
  vm.gy = (id) => {
    $http.post('/zbfb/ZbStateEdit', { id: id }).success((d) => {
      if (d.success) {
        alert('雇佣成功');
        location.reload();
      } else {
        alert('您已经雇佣过了');
        location.reload();
      }
    });
  };
  // 完成
  vm.hasdone = (id, duid, money, username) => {
    var para = {
      state: 4,
      id: id,
      duid: duid,
      money: money,
      username: username,
      tradeName: vm.tradeName
    };
    $http.post('/Zbfb/FbWancheng', para).success((d) => {
      if (d.success) {
        alert('操作成功');
        location.reload();
      } else {
        alert('操作失败，请重新尝试');
        location.reload();
      }
    });
  };
}
