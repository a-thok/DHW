import $ from 'jquery';
export default function JlylCtrl(s, h, $location) {
  s.dhw = window.dhw;
  s.intentTemp = {};
  s.evaluations = [];
  s.show = {};

  // 读取数据
  h.post('/HRFbjl/GetDetail').success((data) => {
    // 取得简历ID
    s.resumeID = data.result.ent.resumeID;
    s.photo = data.result.ent.photo;
    // 取得主表信息
    s.intentTemp.situation = data.result.ent.situation;

    var obj_names = [
      'infoTemp',
      'educations',
      'internships',
      'projects',
      'presentations',
      '',
      'evaluations',
      'usernameTemp',
      'userintroTemp',
      'expectations',
    ];

    var items = data.result.items;
    // 循环获取的数据
    for (var i = 0; i < items.length; i++) {
      // 定义类型和内容
      var _type = items[i].type;
      var _content = items[i].content;
      if (_content === null) {
        continue;
      }
      // 把内容插入对应的对象或数组
      if (_type == 7) { // 技能评价
        s[obj_names[_type - 1]].push({});
        s.skills = _content[0].skill;
      } else { // 其它
        s[obj_names[_type - 1]] = _content;
      }

      // 根据类型，把应该显示的视图模块显示出来
      switch (_type) {
        case 1:
          s.show.info = true;
          break;
        case 4:
        case 5:
        case 7:
        case 10:
          var obj_name = obj_names[_type - 1].substring(0, obj_names[_type - 1].length - 1);
          s.show[obj_name] = true;
      }
    }
    setTimeout(() => {
      $('.rsm_result').show();
    });
  });
  s.JobID = $location.search().JobID;
  // s.table = $location.search().table;
  s.tzcg = function () {
    $.post('/HRDelivery/Delivery', { JobID: s.JobID, ResumeID: s.resumeID }).success((d) => {
      if (d.success) {
        alert('投递成功,点击可跳转到已投简历列表');
        $location.href = '#/ytjl';
      } else {
        alert(d.msg);
      }
    });
  };
}
