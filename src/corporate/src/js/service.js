//样式表


//图片
import '../img/com_banner.png';


//JS
import loadData from './dependencies/loaddata.js';

let para = {
  ddid: window.ddid,
  typeid: '',
  pageIndex: 1,
  pageSize: 8
}

loadData({
  path: '/CompanyHome/FwzxList',
  para: para,
  templateID: 'server',
  targetElem: '.gsServe_main'
});

$('.gsServe_choose_item').on('click', function () {
  $('.gsServe_choose_item a').removeClass('current');
  $(this).find('a').addClass('current');
  var typeid = parseInt($(this).attr('data-type'));
  para.typeid = typeid;
  loadData({
    path: '/CompanyHome/FwzxList',
    para: para,
    templateID: 'server',
    targetElem: '.gsServe_main'
  });
})
