// 企业已发布项目
import { dhw } from '../../data/data.js';
export default function YfbCtrl() {
  var vm = this;
  vm.dhw = dhw;
  vm.list = [
    { name: '产品标题', key: 'title', width: '30%' },
    { name: '产品类型', key: 'name', width: '30%' },
    { name: '价格', key: 'price', width: '10%' },
    { name: '状态', key: 'state', width: '20%' },
  ];
}
