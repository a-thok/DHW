export default function AlbumListCtrl($http) {
  let vm = this;
  vm.list = [
    { name: '标题', key: 'title', width: '25%' },
    { name: '图片', key: 'img', width: '25%', img: true },
    { name: '所属相册', key: 'events', width: '15%' },
    { name: '是否可见', key: 'see', width: '15%' },
    { name: '分类', key: 'type', width: '10%' },
  ];
  vm.del = (project_id) => {
    $http.post('/PersonHomeEdit/PersonPhotoDel', { id: project_id }).success(() => {
      location.reload();
    });
  };
}
