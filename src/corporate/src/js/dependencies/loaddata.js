import template from 'art-template/dist/template.js';
import { dhw } from '../data/data.js';

export default function loadData(params) {
  $.post(params.path, params.para, function(data) {
    // 把data传到方法外处理
    if (params.fn) {
      params.fn(data);
    }
    // 把页面上的dhw变量付给data.resulte.domain，以便模板中取得图片地址
    if (window.dhw) {
      data.result.domain = dhw.imgurl;
      data.result.staticDomain = dhw.staticurl;
    }
    
    //如果取到的项目总数为0，退出此方法（不执行分页行为）
    if(data.result.total === 0) {
      return;
    }
    
    // 根据模板和数据，渲染html代码，并插入页面
    var html = template(params.templateID, data.result);
    $(params.targetElem).html(html);
    
    // 分页
    $((params.pagination? params.pagination : ".pagination")).paging(data.result.total, {
      format: '[< nncnn >]',
      perpage: params.para.pageSize,
      page: params.para.pageIndex,
      onSelect: function (page) {
        // Ajax请求
        if (page != params.para.pageIndex) {
          var paraCopy = $.extend({}, params.para);
          paraCopy.pageIndex = page;
          loadData(params);
        }
         if (params.fn2) {
           params.fn2(data, params.para.pageIndex)
         }
      },
      onFormat: function (type) {
        switch (type) {
          case 'block':
            if (!this.active)
              return '<span class="disabled">' + this.value + '</span>';
            else if (this.value != this.page)
              return '<em><a href="#' + this.value + '">' + this.value + '</a></em>';
            return '<span class="current">' + this.value + '</span>';
      
          case 'next':
            if (this.active)
              return '<a href="#' + this.value + '" class="next">下一页</a>';
            return '<span class="disabled">下一页</span>';
      
          case 'prev': 
            if (this.active)
              return '<a href="#' + this.value + '" class="prev">上一页</a>';
            return '<span class="disabled">上一页</span>';
      
          case 'first':
            if (this.active)
              return '<a href="#' + this.value + '" class="first">首页</a>';
            return '<span class="disabled">首页</span>';
      
          case 'last':
            if (this.active)
              return '<a href="#' + this.value + '" class="last">尾页</a>';
            return '<span class="disabled">尾页</span>';
      
          case "leap":
            if (this.active)
              return "   ";
            return "";
      
          case 'fill':
            if (this.active)
              return "...";
            return "";
        }
      }
    });
  });
}