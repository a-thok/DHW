export default function SplbCtrl() {
  let vm = this;
  vm.listTabs = [
    {
      name: '全部',
      url: '.all',
    },
    {
      name: '交易中',
      url: '.jyz',
    },
    {
      name: '已交易',
      url: '.yjy',
    },
    {
      name: '有效',
      url: '.yx',
    }
  ]
}