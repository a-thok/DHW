import $ from 'jquery';
import list from './list.js';

export default function store() {
  list({
    api: '/store/list',
    templateId: 'store',
    container: '.sresult_list',
    params: {
      pageIndex: 1,
      pageSize: 15
    },
    cbAfter(data) { $('.orderby_count span').text(data.result.total); }
  });
}
