import { dhw } from '../../data/data.js';
export default function YgzCtrl($http) {
  var vm = this;
  vm.dhw = dhw;
  vm.list = [
    { name: '项目标题', key: 'title', width: '50%', link: true, linkkey: 'id' },
    { name: '项目类型', key: 'name', width: '20%', },
    { name: '价格', key: 'price', width: '20%' }
  ];
  vm.cancel = (cancalID) => {
    $http.post('/SrdzGz/AttentionDel', { id: cancalID }).success((d) => {
      if (d.success) {
        location.reload();
      }
    });
  };
}
