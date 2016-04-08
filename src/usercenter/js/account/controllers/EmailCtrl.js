export default function EmailCtrl ($stateParams) {
  var vm = this;
  
  vm.listTabs = [
    {
      name: '收件箱',
      url: '.inbox',
    },
    {
      name: '发件箱',
      url: '.outbox',
    },

    {
      name: '写信',
      url: '.write',
    },
  ]
}