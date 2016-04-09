export default function AllbCtrl() {
  var vm = this;
  vm.list = [
    { name: '案例图片', key: 'img', width: '25%', img: true },
    { name: '案例标题', key: 'title', width: '25%' },
    { name: '案例路径', key: 'url', width: '20%' },
    { name: '发布时间', key: 'createdate', width: '20%' },
  ];
}
