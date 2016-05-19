import { dhw } from '../../data/data.js';

export default function YfbCtrl($http) {
  var vm = this;
  // vm.list = [
  //   { name: '项目标题', key: 'title', width: '12%', link: true, linkkey: 'id' },
  //   { name: '项目总金额', key: 'totalfin', width: '13%' },
  //   { name: '项目类型', key: 'name', width: '13%' },
  //   { name: '资金状态', key: 'state', width: '13%' },
  //   { name: '人次', key: 'personTime', width: '13%' },
  //   { name: '截止时间', key: 'endtime', width: '13%' },
  //   { name: '审核时间', key: 'shtime', width: '13%' }
  // ];
  vm.listTabs = [
    {
      name: '审核中',
      url: '.shz'
    },
    {
      name: '待资金托管',
      url: '.dtg'
    },
    {
      name: '已托管报名中',
      url: '.bmz'
    },
    {
      name: '进行中的项目',
      url: '.jxz'
    },
    {
      name: '审核失败',
      url: '.shsb'
    },
    {
      name: '已过期',
      url: '.ygq'
    },
    {
      name: '已完结',
      url: '.ywj'
    }
  ];
}
