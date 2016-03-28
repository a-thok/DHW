export default function ListCtrl() {
  var vm = this;
  vm.list = [
    { name: '入驻平台', key: 'platform', width: '10%' },
    { name: '公司名称', key: 'company', width: '10%' },
    { name: '项目介绍', key: 'profile', width: '10%' },
    { name: '项目所属行业', key: 'trade', width: '10%' },
    { name: '法人代表', key: 'introducer', width: '10%' },
    { name: '联系人姓名', key: 'contacts', width: '10%' },
    { name: '联系人邮箱', key: 'email', width: '10%' },
    { name: '商业计划书', key: 'plan', width: '20%' },
    { name: '状态', key: 'state', width: '10%' },
  ];
}
