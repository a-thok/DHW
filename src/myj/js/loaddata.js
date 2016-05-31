import $ from 'jquery';
import template from 'art-template/dist/template.js';
import './jquery.paging.js';

export default function loadList({ api, params, templateId, container, cbBefore, pager, cbAfter }) {
  $.post(api, params, (data) => {
    if (cbBefore) cbBefore(data);

    if (window.dhw) {
      data.result.domain = window.dhw.imgurl;
      data.result.staticDomain = window.dhw.staticurl;
    }
    const html = template(templateId, data.result);
    $(container).html(html);

    if (data.result.total === 0) return;

    // 分页模块
    $((pager || '.pagination')).paging(data.result.total, {
      format: '[< nncnn >]',
      perpage: params.pageSize,
      page: params.pageIndex,
      onSelect(page) {
        // Ajax请求
        if (page != params.pageIndex) {
          const newParams = $.extend({}, params, { pageIndex: page });
          loadList({ api, params: newParams, templateId, container, cbBefore, pager, cbAfter });
        }
        if (cbAfter) cbAfter(data, params.pageIndex);
      },
      onFormat(type) {
        switch (type) {
          case 'block':
            if (!this.active) {
              return '<span class="disabled">' + this.value + '</span>';
            } else if (this.value != this.page) {
              return '<em><a href="#' + this.value + '">' + this.value + '</a></em>';
            }
            return '<span class="current">' + this.value + '</span>';

          case 'next':
            if (this.active) {
              return '<a href="#' + this.value + '" class="next">下一页</a>';
            }
            return '<span class="disabled">下一页</span>';

          case 'prev':
            if (this.active) {
              return '<a href="#' + this.value + '" class="prev">上一页</a>';
            }
            return '<span class="disabled">上一页</span>';

          case 'first':
            if (this.active) {
              return '<a href="#' + this.value + '" class="first">首页</a>';
            }
            return '<span class="disabled">首页</span>';

          case 'last':
            if (this.active) {
              return '<a href="#' + this.value + '" class="last">尾页</a>';
            }
            return '<span class="disabled">尾页</span>';

          case 'leap':
            if (this.active) {
              return '   ';
            }
            return '';

          case 'fill':
            if (this.active) {
              return '...';
            }
            return '';
          default:
            return null;
        }
      }
    });
  });
}
