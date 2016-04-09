// 企业--账号信息的主控制器
export default function ZhxxCtrl() {
  var vm = this;
  vm.listTabs = [
    {
      name: '公司信息',
      url: '.company'
    },
    {
      name: '头像',
      url: '.photo'
    },
    {
      name: '教育经历',
      url: '.education'
    },
    {
      name: '工作经验',
      url: '.experience'
    }
  ];
}
