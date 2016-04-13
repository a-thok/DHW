import $ from 'jquery';
export default function AlbumCtrl($http) {
  let vm = this;
  vm.data = {};
  vm.activity = ['创意设计比赛'];
  vm.type = ['科技发明制作类', '科学设想方案类', '平面设计类', '日常用品创意类', '服装设计类'];
  vm.submit = () => {
    if ($('#negotiable_yes').is(':checked')) {
      vm.data.see = 0;
    }
    if ($('#negotiable_no').is(':checked')) {
      vm.data.see = 1;
    }
    var para = Object.assign({}, vm.data);
    $http.post('/PersonHomeEdit/PersonPhotoAdd', para).success(() => {
      alert('上传成功');
    });
  };
}
