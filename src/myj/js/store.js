import $ from 'jquery';
import list from './list.js';

export default function store() {
  list({
    api: '/store/list',
    templateId: 'store',
    container: '.myj_content',
    params: {
      pageIndex: 1,
      pageSize: 15
    },
    cbAfter(data) { $('.store_rsult_num').text(data.result.total); }
  });
}
