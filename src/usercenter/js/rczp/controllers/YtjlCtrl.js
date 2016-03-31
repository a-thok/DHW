export default function YtjlCtrl($http) {
  var vm = this;
  vm.para = {
    
  };
  vm.list = [
     { name: '职位名称', key: 'position', width: '20%' },
     { name: '薪资', key: 'money', width: '20%' },
     { name: '公司名称', key: 'company', width: '20%' },
     { name: '工作地点', key: 'gzdd', width: '10%' },
     { name: '投递状态', key: 'tdzt', width: '10%' },
     { name: '企业是否查看', key: 'qysfck', width: '10%' }
  ];
  vm.isshow = false;
  vm.comment = function (jobid, duid) {
    $http.post('/HRMspj/PjDetail', { jobid: jobid, duid: duid }).success((d) => {
      if (d.success) {
        vm.data = d.result[0];
        vm.isshow = true;
      } else {
        alert('因网络原因获取不到数据');
      }
    });
  };
  vm.postcomment = function () {
    $http.post('/HRMspj/PjAdd', Object.assign({}, vm.para, vm.data)).success((d) => {
      if (d.success) {
        alert('评论成功');
      } else {
        alert('评论失败，请确保您提交的信息填写完整以及网络流畅');
      }
    });
  };
}
