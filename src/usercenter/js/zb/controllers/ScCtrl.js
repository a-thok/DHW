import { dhw } from '../../data/data.js';
export default function ScCtrl($http) {
  var vm = this;
  vm.dhw = dhw;
  vm.list = [
    { name: '标题', key: 'title', width: '20%', link: 'true', linkkey: 'id' },
    { name: '收藏时间', key: 'time', width: '30%' },
    { name: '截止时间', key: 'endtime', width: '40%' },
  ];
  vm.cancelAtten = function (id) {
    $http.post('/zbfb/Cancel', { fpid: id }).success(function(d){
      if (d.success) {
        alert('取消收藏成功');
        location.reload();
      } else {
        alert('网络异常取消失败');
        location.reload();
      }
    });
  };
}
