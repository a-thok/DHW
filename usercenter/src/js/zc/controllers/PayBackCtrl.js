// 回报设置控制器
export default function PayBackCtrl(s,$http) {
    /*** 数据 ***/
    // 核心数据
    s.data = {
      hb: [{ type: 1 }]
    };
    // 视图数据
    s.isEdit = [true]
  
    // 载入草稿和验证
    s.$parent.getDraft('payback', function (draft) {
      $.extend(s, draft);
    });

    
    // 保存草稿数据到根作用域
    s.$parent.draft.payback = function () {
      var draft = {};
      draft.data = s.data;
      draft.isEdit = s.isEdit;
      return angular.toJson(draft);
    };
  
    /*** 行为 ***/
    // 移动
    s.move = function (index, direction) {
      // 0表示向上移动，1表示向下移动
      if (direction == 0) {
        // 已经是第一项
        if (index == 0) {
          return false;
        } else {
          // 存储arr[index-1]的值
          var prev = s.data.hb[index - 1];
          var _prev = s.isEdit[index - 1];
          // 把arr[index]变成一个空项，把原arr[index]的值赋给arr[index-1]
          s.data.hb[index - 1] = s.data.hb.splice(index, 1, {})[0];
          s.isEdit[index - 1] = s.isEdit.splice(index, 1, {})[0];
          // 把原arr[index-1]的值赋给arr[index]，完成交换
          s.data.hb[index] = prev;
          s.isEdit[index] = _prev;
        }
      } else if (direction == 1) {
        // 已经是最后一项
        if (index == (s.data.hb.length - 1)) {
          return false;
        } else {
          var next = s.data.hb[index + 1];
          var _next = s.isEdit[index + 1];
          s.data.hb[index + 1] = s.data.hb.splice(index, 1, {})[0];
          s.isEdit[index + 1] = s.isEdit.splice(index, 1, {})[0];
          s.data.hb[index] = next;
          s.isEdit[index] = _next;
        }
      }
    };

    // 模态框-删除功能
    s.modal = {
      show: false
    };
    s.switchModal = function (index) {
      s.modal.show = !s.modal.show;
      // 存储要删除的项的下标
      s.modal.index = index ? index : null;
    };
    s.del = function () {
      // 删除一项回报
      s.data.hb.splice(s.modal.index, 1);
      // 删除对应的视图数据
      s.isEdit.splice(s.modal.index, 1);
      s.modal.show = !s.modal.show;
      setTimeout(function () {
        s.$parent.setValid('return', true);
      });
    };
}