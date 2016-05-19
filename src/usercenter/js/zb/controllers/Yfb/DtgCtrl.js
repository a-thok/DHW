// 待资金托管项目
export default function DtgCtrl($http) {
  var vm = this;
  vm.list = [
    { name: '项目标题', key: 'title', width: '17%' },
    { name: '项目总金额', key: 'totalfin', width: '13%' },
    { name: '项目类型', key: 'name', width: '13%' },
    { name: '资金状态', key: 'state', width: '21%' },
    { name: '截止时间', key: 'endtime', width: '13%' },
    { name: '审核时间', key: 'shtime', width: '13%' },
  ];
  vm.zjtg = function (project_id) {
    $http.post('/order/zb/add', { projectID: project_id }).success((data) => {
      if (data.success) {
        window.location.href = dhw.urlmain + '/order/zb/pay2/' + data.result.number;
      }
    });
  };
}
