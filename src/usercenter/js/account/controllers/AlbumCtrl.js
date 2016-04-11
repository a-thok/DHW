import $ from 'jquery';
export default function AlbumCtrl($http) {
  let vm = this;
  vm.data = {};
  vm.activity = ['创意设计比赛'];
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
