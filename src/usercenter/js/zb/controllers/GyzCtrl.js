import {
  dhw
} from '../../data/data.js';
export default function GyzCtrl($http, $stateParams) {
  var vm = this;
  vm.dhw = dhw;
  vm.list = [
    { name: '接单人', key: 'name', width: '10%' },
    { name: '联系方式', key: 'contact', width: '20%' },
    { name: '投标内容', key: 'content', width: '30%' },
    { name: '附件下载', key: 'attachment_origin', linkkey: 'attachment', link: true, width: '20%' },
    { name: '状态', key: 'state', width: '10%' }
  ];
  var fpid = $stateParams.id;
  vm.listTabs = [];
  // var urlarr = ['.pro1', '.pro2', '.pro3', '.pro4', '.pro5', '.pro4'];
  $http.post('/zbfb/Zblist', { fpid: fpid }).success((d) => {
    if (d.success) {
      vm.listTabs = d.result;
      vm.id = d.result[0].id;
    }
  });
  // 雇佣
  vm.gy = (id) => {
    $http.post('/zbfb/ZbStateEdit', { id: id }).success((d) => {
      if (d.success) {
        alert('雇佣成功');
      } else {
        alert('您已经雇佣过了');
      }
    });
  };
}
