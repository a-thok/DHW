export default function AddfdCtrl($http) {
  var vm = this;
  vm.draft = {};
  vm.data = {};
  vm.getDraft = () => {
    // fn(vm.data);
  };
  // vm.getE
  vm.listTitle = [
    {
      name: '公司名称', key: 'company', width: '30%'
    },
    { name: '所在地', key: 'addrdetail', width: '20%' },
    { name: '联系电话', key: 'phone', width: '20%' },
  ];
}
