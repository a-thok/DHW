// 项目预览的控制器
import $ from 'jquery';
export default function PreviewCtrl(s, h) {
  s.dhw = window.dhw;
  s.project = {
    // data: {
    //   rectag: [],
    //   diytag: []
    // }
  };
  s.detail = {};
  s.payback = {};
  // 用来把标识类型的数字转换成对应的类型
  s.zstype = ['', '', '', '公益', '科技', '工业', '农业', '家电', '设计', '娱乐', '出版', '房产', '其它'];
  s.loadPreview = (function () {
    h.post('/AppDraft/GetSubs', {
      mainmark: s.$parent.mainmark,
      type: 'crowdfunding'
    }).success((data) => {
      $(data.result).each(function () {
        var minor = $(this)[0].minor;
        $.extend(s[minor], $(this)[0].content);
        switch (minor) {
          case 'basic':
            var ptid = $(this)[0].content.showPersonal ? $(this)[0].content.dataP.ptid : $(this)[0].content.dataC.ptid;
            s.ptid = s.zstype[ptid]
            break;
          case 'project':
            if (s.project.data.diytag) {
              s.project.data.diytag = s.project.data.diytag.split(' ');
            }
            break;
          default:
            break;
        }
      });
    });
  }());
}
