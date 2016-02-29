// 项目详情描述控制器
export default function DetailCtrl(s,$http) {
   /*** 数据 ***/
    // 核心数据
    s.data = {
      video: "",
      text: [
        {
          type: 1,
          title: '请在这里输入段落的标题，可点击右侧“添加文本”添加多个！',
          content: '请在这里输入段落的正文，例如：介绍自己，介绍项目内容。为什么需要大家支持，项目进度等等!'
        },
        { type: 2 }
      ]
    };
    // 视频视图数据与临时核心数据
    s.video = {
      isEdit: true,
    }
    // 文本（与图像）视图数据
    s.isEdit = [false, false]
  
    // 载入草稿和验证
    s.$parent.getDraft('detail', function (draft) {
      $.extend(s, draft);
    });
    
    // 保存草稿数据到根作用域
    s.$parent.draft.detail = function () {
      var draft = {};
      draft.data = s.data;
      draft.video = s.video;
      draft.isEdit = s.isEdit;
      return angular.toJson(draft);
    };
  
    /*** 行为 ***/
    // 视频保存与取消（改变视图）
    s.videoSwitch = function () {
      s.data.video = s.video.isEdit ? s.video.temp : '';
      s.video.isEdit = !s.video.isEdit;
    };
    // 移动文本与图像
    s.move = function (index, direction) {
      // 0表示向上移动，1表示向下移动
      if (direction == 0) {
        // 已经是第一项
        if (index == 0) {
          return false;
        } else {
          // 存储arr[index-1]的值
          var prev = s.data.text[index - 1];
          var _prev = s.isEdit[index - 1];
          // 把arr[index]变成一个空项，把原arr[index]的值赋给arr[index-1]
          s.data.text[index - 1] = s.data.text.splice(index, 1, {})[0];
          s.isEdit[index - 1] = s.isEdit.splice(index, 1, {})[0];
          // 把原arr[index-1]的值赋给arr[index]，完成交换
          s.data.text[index] = prev;
          s.isEdit[index] = _prev;
        }
      } else if (direction == 1) {
        // 已经是最后一项
        if (index == (s.data.text.length - 1)) {
          return false;
        } else {
          var next = s.data.text[index + 1];
          var _next = s.isEdit[index + 1];
          s.data.text[index + 1] = s.data.text.splice(index, 1, {})[0];
          s.isEdit[index + 1] = s.isEdit.splice(index, 1, {})[0];
          s.data.text[index] = next;
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
      s.data.text.splice(s.modal.index, 1);
      // 删除对应的视图数据
      s.isEdit.splice(s.modal.index, 1);
      s.modal.show = !s.modal.show;
    };
}