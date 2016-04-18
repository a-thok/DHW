// 公司账号关注控制器
export default function GzlistCtrl($http) {
  var vm = this;
  vm.list = [
    { name: '项目标题', key: 'title', width: '30%', link: true, linkkey: 'fpid' },
    { name: '项目类型', key: 'name', width: '20%' },
    { name: '项目状态', key: 'status', width: '20%' },
    {
      name: '筹资进度', key: [
        { zid: '目标 :',
         zikey: 'moneys'
        },
        { zid: '进度 :',
          zikey: 'progress',
          zikeyfh: '%'
        },
      ], width: '20%',
    },
  ];
 // 所需要的操作函数--取消关注
  vm.edit = function (cancelId) {
    $http.post('/CpzcGzList/DelAttention', {id: cancelId }).success(res => {
      if (res.success) {
        location.reload();
      }
    });
  };
}
