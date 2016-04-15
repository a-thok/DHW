// 个人 教育经历
export default function PzhxxEduCtrl() {
  var vm = this;
  vm.listTitle = [
    { name: '学校名称', key: 'name', width: '20%' },
    { name: '学习日期', key: [
      { zikey: 'begindate' },
      { zikey: 'enddate' }
    ], width: '30%' },
    { name: '学历', key: 'xl', width: '20%' },
    { name: '专业', key: 'major', width: '20%' },
  ];
}
