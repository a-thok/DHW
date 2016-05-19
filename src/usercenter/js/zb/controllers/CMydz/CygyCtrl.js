export default function CygyCtrl($http) {
  var vm = this;
  vm.style = {
    visibility: 'hidden'
  };
  vm.data = {};
  var id;
  vm.list = [
    { name: '任务名称', key: 'name', width: '20%' },
    { name: '任务单价', key: 'price', width: '20%' },
    { name: '任务需求描述', key: 'mirequire', width: '30%' },
    { name: '任务完成周期', key: 'miday', width: '20%' },
  ];
  // 打开弹窗
  vm.fjModal = (missionid) => {
    vm.style.visibility = 'visibility';
    id = missionid;
  };
  // 关闭弹窗
  vm.close = () => {
    vm.style.visibility = 'hidden';
  };
  // 上传附件信息
  vm.commitfj = () => {
    var para = Object.assign({}, vm.data, { id: id });
    $http.post('/Zbfb/WitkeyUpload', para).success((d) => {
      if (d.success) {
        alert('上传成功');
        location.reload();
      } else {
        alert('上传失败，请重新尝试');
        location.reload();
      }
    });
  };
}
