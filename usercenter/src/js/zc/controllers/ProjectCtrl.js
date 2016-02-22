// 项目信息填写控制器
export default function ProjectCtrl(s,$http) {
   /*** 数据 ***/
    // 核心数据
    s.data = {
      rectag: [],
      diytag: ""
    };
  
    // 载入草稿和验证
    s.$parent.getDraft('project', function (draft) {
      $.extend(s, draft);
    });

    
    // 保存草稿数据到根作用域
    s.$parent.draft.project = function () {
      var draft = {};
      draft.data = s.data;
      return angular.toJson(draft);
    }
  
    /*** 行为 ***/
    // 根据省选择市
    s.getCitys = function (event) {
      s.data.province = $.trim($(event.target).text());
      s.citys = _areaselect_data.c[s.data.province];
      s.data.city = _areaselect_data.c[s.data.province][0];
    };
    // 取得省市信息
    s.setCity = function (event) {
      s.data.city = $.trim($(event.target).text());
    };
  
    // 推荐标签
    s.rectagNames = [
      '通讯数码',
      '家居生活',
      'O2O',
      '移动互联网',
      '电子商务',
      '在线教育',
      '影音娱乐',
      '互联网医疗',
      '互联网金融',
      '企业服务'
    ];
    // 判断某个标签是否为选中标签
    s.isSelected = function (tagname) {
      for (var i = 0; i < s.data.rectag.length; i++) {
        if (tagname == s.data.rectag[i]) {
          return true;
        }
      }
      return false;
    };
    // 选中一个推荐标签
    s.selectTags = function (event) {
      var tagname = $.trim($(event.target).text());
      if (s.isSelected(tagname)) {
        for (var i = 0, n = 0; i < s.data.rectag.length; i++) {
          if (s.data.rectag[i] != tagname) {
            s.data.rectag[n++] = s.data.rectag[i];
          }
        }
        s.data.rectag.length -= 1;
      } else if (s.data.rectag.length < 2) {
        s.data.rectag.push(tagname);
      } else {
        s.modal.show = true;
      }
    };
  
    // 模态框-错误提示
    s.modal = {
      show: false
    };
    s.switchModal = function (index) {
      s.modal.show = !s.modal.show;
    };
}