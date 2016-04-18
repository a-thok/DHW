export default function AlbumListCtrl ($http)      {
  let vm = this;
  vm.list = [
    { name: '标题', key: 'title', width: '20%' },
    { name: '图片', key: 'img', width: '25%', img: true},
    { name: '所属相册', key: 'event', width: '15%' },
    { name: '所属类型', key: 'type', width: '15%'},
    { name: '是否可见', key: 'see', width: '15%' }  
  ];

  vm.del = function (project_id) {
    $http.post('/PersonHomeEdit/PersonPhotoDel', {id: project_id} ).success(function () {
      location.reload();
    });
  };
}