export default function InboxCtrl($http) {
  var vm = this;
  vm.list = [
    { name: '发件人', key: 'from', width: '15%' },
    { name: '标题', key: 'title', link: '#/email/detail/', linkkey: 'id', width: '50%' },
    { name: '状态', key: 'state', width: '20%' },
  ]
  vm.arrid = [];
}