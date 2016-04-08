export default function GsdtlistCtrl() {
  var vm = this;
  vm.list = [
    { name: '封面图片', key: 'frontpic', width: '20%', img: true },
    { name: '标题', key: 'title', width: '20%' },
    { name: '浏览量', key: 'visitors', width: '20%' },
    { name: '状态', key: 'state', width: '10%' },
    { name: '动态类型', key: 'type', width: '20%' },
  ];
}
