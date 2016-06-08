import $ from 'jquery';
import list from './list.js';

export default function shangpin() {
  list({
    api: '/product/list',
    templateId: 'shangpin',
    container: '.sresult_list',
    params: {
      pageIndex: 1,
      pageSize: 15,
      orderby: '综合排序',
      asc: 0,
    },
    cbAfter(data) { $('.orderby_count span').text(data.result.total); }
  });
}

  // 解析url
  // function getQueryString(name) {
  //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  //   var r = window.location.search.substr(1).match(reg);
  //   if (r != null) return unescape(r[2]); return null;
  // }
  // var word = getQueryString('keyword');
