// 样式表
import '../css/cmpy.css';

// 图片
import '../img/hr_banner.png';

// JS
import loadData from './dependencies/loaddata.js';


let para = {
  companyid : 51,
  pageIndex : 1,
  pageSize :10
}

loadData({
  path: '/CompanyHome/ZhaopinList',
  para: para,
  templateID: 'jobList',
  targetElem: '.gsJob_table tbody'
});