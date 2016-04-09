export default function dfhCtrl() {
  var vm = this;
  vm.list = [
    { name: '项目图片', key: 'frontpic', width: '15%', img: true },
    { name: '项目标题', key: 'projectName', width: '20%' },
    { name: '回报内容', key: 'hbcontent', width: '20%' },
    { name: '数量', key: 'hbcount', width: '10%' },
    { name: '状态', key: 'status', width: '15%' },
    { name: '支持金额', key: 'cost', width: '10%' },
  ];
}
