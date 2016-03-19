export default function JlbjCtrl(s, h, $location) {
  s.dhw = window.dhw;
  
  $(function() {
  /** 表单取消删除 **/
  $(".rsmM_box").on("click", ".delCancel", function() {
    $(this).parents(".rsm_form_ctrl_model").hide();
  });
  $(".rsmM_box").on("click", ".rsm_form_ctrl_model", function(event) {
    var e = event || window.event;
    e.stopPropagation();
  });
  $(".rsmM_box").on("click", ".rsm_form_ctrl_delete", function(event) {
    var e = event || window.event;
    e.stopPropagation();
  });
  
  /** 下拉控件共用 **/
  // 显示下拉菜单
  $(".rsmM_box").on("click", ".rsm_select_btn", function(event) {
    var e = event || window.event;
    e.stopPropagation();
    // 判断当前list在点击前可不可见
    var list = $(this).next();
    var isListVisible = list.is(":visible");
    // 关闭其它list，切换当前list的可见状态
    $(".rsm_select_lists").hide();
    isListVisible? list.hide() : list.show();
  });
  // 点击外部任意地方关闭下拉菜单
  $(document).click(function() {
    $(".rsm_select_lists").hide();
    // 关闭表单删除框
    $(".rsm_form_ctrl_model").hide();
  });
  $(".rsmM_box").on("click", ".rsm_select_lists", function(event) {
    var e = event || window.event;
    e.stopPropagation();
  });
  // 点击下拉菜单子项
  $(".rsmM_box").on("click", ".rsm_select_lists-normal li", function() {
    $(this).parents(".rsm_select_lists").hide();
  });
  // 点击双列下拉菜单左列
  $(".rsmM_box").on("click", ".rsm_select_list-left li", function() {
    $(this).siblings().removeClass("active")
            .end().addClass("active");
    $(".rsm_select_list-right li").removeClass("active");
  });
  // 点击双列下拉菜单右列
  $(".rsmM_box").on("click", ".rsm_select_list-right li", function() {
    $(this).siblings().removeClass("active")
            .end().addClass("active");
    $(this).parents(".rsm_select_lists").hide();
  });
  
  /** 性别选择 **/
  $(".rsm_inputGroup_gender").click(function() {
    $(this).siblings().removeClass("active")
            .end().addClass("active");
  });
  
  // 右边栏
  // $(".rsmS_item").click(function() {
  //   $(".rsmS_item").removeClass("current");
  //   $(this).addClass("current");
  // });
  
  // var fixed_top = $(".rsmS_fixed").offset().top;
  // var fixed_right = $(".rsmS_fixed").offset().right;
  // var fixed_top_foot = $('.footer').offset().top;
  
  // $(".rsmS_fixed").css("right", fixed_right);
  // $(window).scroll(function() {
  //   var page_scrollTop = $(document).scrollTop();
    
  //   if (page_scrollTop >= fixed_top) {
  //     if(fixed_top_foot - page_scrollTop > 516) {
  //       $(".rsmS_fixed").css("position", "fixed");
  //     }else {
  //       var top = 516 - (fixed_top_foot - page_scrollTop);
  //       $(".rsmS_fixed").css({"position": "fixed", 'top': -top});
  //     }
  //   } else  {
  //     $(".rsmS_fixed").css({"position": "static", 'top': 0});
  //   }
  // });
  
  // 右边栏添加与删除按钮
  $(".rsmS_item_btn").mouseenter(function() {
    $(this).siblings(".rsmS_item").addClass("hover");
  }).mouseout(function() {
    $(this).siblings(".rsmS_item").removeClass("hover");
  })
  $(".rsmS_item_btn").click(function() {
    if($(this).hasClass("add")) {
      $(this).siblings(".rsmS_item").trigger("click");
    }
  });
  
  // 头像上传
  // $(".avatarUploadBtn").mouseenter(function() {
  //   $(this).addClass("hover");
  // }).mouseleave(function() {
  //   $(this).removeClass("hover");
  // });
});
  
  /** 数据交互 **/

  // 读取数据
  h.post('/HRFbjl/GetDetail').success(function (data) {
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
      //定义类型和内容
      var _type = items[i].type;
      var _content = items[i].content;
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



    // 简历完成百分比
    s.getPercentage();

    // 隐藏所有表单，显示所有展示
    setTimeout(function () {
      $('.rsm_form').hide();
      $('.rsm_result').show();
    });


  });

  // 存储数据
  s.setData = function (boxID) {
    var para = {};
    para.resumeID = s.resumeID;
    // 保存数据
    if (boxID == 'intent') {
      para.situation = s.intentTemp.situation;
      $.post('/HRFbjl/SaveDetail', para, function () {
      });
    } else {
      para.type = parseInt(s[boxID].type);
      para.content = s[boxID].content;
      $.post('/HRFbjl/SaveDetailSub', para, function () {
      });
    }
  }


  /** 通用 **/

  // 用来知道当前的盒子是哪个盒子的方法
  function whichBox(elem) {
    var box = elem.parents('.rsmM_box');
    return box.attr('id');
  }

  // 添加
  s.add = function (event) {
    var boxID = whichBox($(event.target));
    // 添加一项
    s[boxID + 's'].push({});
    // 使添加按钮无效
    $('#' + boxID).find('.rsmM_box_ttl_r').attr('disabled', 'disabled');
  };

  // 编辑
  s.temp = { orignal: true };
  s.edit = function (event, index) {
    var boxID = whichBox($(event.target));

    // 找到当前盒子的展示部分和表单部分
    var box;
    if ($(event.target).is('.outerEdit')) {
      box = $(event.target).parents('.rsmM_box');
    } else {
      box = $(event.target).parents('.rsm_template');
    }
    box.find('.rsm_result').hide();
    box.find('.rsm_form').show();

    if (index < 0) {
      for (var prop in s[boxID + 'Temp']) {
        s.temp[prop] = s[boxID + 'Temp'][prop];
      }
    } else {
      // 把s[boxID+'s'][index]的当前值存储在s.temp
      for (var prop in s[boxID + 's'][index]) {
        s.temp[prop] = s[boxID + 's'][index][prop];
      }
    }
    s.temp.orignal = false;
  };

  // 保存
  s.save = function (event, index) {
    var boxID = whichBox($(event.target));

    // 判断触发事件的是否是保存按钮
    var isSave = $(event.target).is('.hl');
    // 取得相关元素
    var box = $(event.target).parents('.rsm_template');
    var result = box.find('.rsm_result');
    var form = box.find('.rsm_form');

    if (isSave) {// 保存按钮
      // 简历完成百分比
      s.getPercentage();
      // 存储数据
      s[boxID].content = angular.toJson((index < 0) ? s[boxID + 'Temp'] : s[boxID + 's']);
      s.setData(boxID);
      // 改变视图
      form.hide();
      result.show();
    } else {// 取消按钮
      if (!(index < 0) && s.temp.orignal) {// 新创建的数组型表单，减去数组一个项，自动转换视图
        s[boxID + 's'].splice(index, 1);
      } else {// 其它
        // 把保存在s.temp里的临时值赋回给s[boxID+'s'][index]
        for (var prop in s.temp) {
          (index < 0) ?
            s[boxID + 'Temp'][prop] = s.temp[prop]
            :
            s[boxID + 's'][index][prop] = s.temp[prop];
        }
        // 改变视图
        form.hide();
        result.show();
      }
    }
    // 把s.temp重置回默认值
    s.temp = { orignal: true };
    // 使添加按钮生效
    $('#' + boxID).find('.rsmM_box_ttl_r').prop('disabled', false);
  };

  // 保存求职意向（主表）
  s.intentSave = function () {
    var para = {};
    para.resumeID = s.resumeID;
    para.situation = s.intentTemp.situation;
    $.post('/HRFbjl/SaveDetail', para, function () {
    })
  }

  // 删除
  s.del = function (event) {
    $(event.target).next().show();
    return false;
  };
  // 确认删除
  s.delConfirm = function (event, index) {
    var boxID = whichBox($(event.target));
    s[boxID + 's'].splice(index, 1);
    // 如果是技能评价 把skills数组恢复默认状态
    if (boxID == 'evaluation') {
      s.skills = [{}];
    }
    // 存储数据
    s[boxID].content = angular.toJson((index < 0) ? s[boxID + 'Temp'] : s[boxID + 's']);
    s.setData(boxID);
  };
  // 右边栏删除
  s.delSider = function (rsmArray, typeNum) {
    s[rsmArray] = [];
    // 如果是技能评价，把skills数组恢复默认状态
    if (rsmArray = 'evaluations') {
      s.skills = [{}];
    }
    // 存储数据
    var para = {};
    para.resumeID = s.resumeID;
    para.type = typeNum;
    $.post('/HRFbjl/DelDetailSub', para, function () {
    });
  };
  // 编辑时，清空输入框里的名字和介绍的默认值
  s.delDflt = function (prop, text) {
    var boxID = whichBox($(event.target));
    if (s[boxID + 'Temp'][prop] == text) {
      s[boxID + 'Temp'][prop] = '';
    }
  };


  /** 定义各个盒子的数据 **/
  // 盒子显示与隐藏
  s.show = {
    'info': false,
    'project': false,
    'presentation': false,
    'expectation': false,
    'evaluation': false
  };
  // 名字
  s.username = {
    'type': 8
  };
  s.usernameTemp = {
    'name': '请输入姓名'
  };
  // 介绍
  s.userintro = {
    'type': 9
  };
  s.userintroTemp = {
    'intro': '请介绍你自己'
  };
  // 基本信息
  s.info = {
    'type': 1
  };
  s.infoTemp = {};
  // 实习经历
  s.internship = {
    'type': 3
  };
  s.internships = [];
  // 教育经历
  s.education = {
    'type': 2
  };
  s.educations = [];
  // 项目经验
  s.project = {
    'type': 4
  };
  s.projects = [];
  // 自我描述
  s.presentation = {
    'type': 5
  };
  s.presentations = [];
  // 期望工作
  s.expectation = {
    'type': 10
  };
  s.expectations = [];
  // 技能评价
  s.evaluation = {
    'type': 7
  };
  s.evaluations = [];
  s.skills = [{}];
  s.skillAdd = function () {
    s.skills.push({});
  }
  s.skillDel = function (index) {
    if (index == 0) {
      s.evaluations = [];
      s.skills = [{}];
    } else {
      s.skills.splice(index, 1);
    }
  }
  // 求职意向
  s.intentTemp = {
    'situation': '我目前已离职，可快速到岗'
  };

  /** 简历完成度 **/
  s.percentage;
  s.getPercentage = function () {
    var per = 0;
    if (s.usernameTemp.name != '请输入姓名') per += 6;
    if (s.userintroTemp.intro != '请介绍你自己') per += 6;
    for (var prop in s.infoTemp) {
      if (s.infoTemp != {}) per += 2;
    }
    if (s.internships.length != 0) per += 12;
    if (s.educations.length != 0) per += 12;
    if (s.projects.length != 0) per += 12;
    if (s.presentations.length != 0) per += 12;
    if (s.expectations.length != 0) per += 12;
    if (s.evaluations.length != 0) per += 12;
    s.percentage = per;
  }
  s.getPercentage();


  /** 下拉控件 **/
  // 时间内数据
  s.date = {
    today: function () {
      var date = new Date();
      var temp = {};
      temp.year = date.getFullYear();
      temp.month = date.getMonth() + 1;
      return temp;
    },
    wokrYear: function () {
      var year = [];
      var startYear = s.date.today().year - 26;
      for (var i = startYear; i < s.date.today().year + 1; i++) {
        year[i - startYear] = i;
      }
      return year;
    },
    birthYear: function () {
      var year = [];
      var startYear = s.date.today().year - 45;
      for (var i = startYear; i < s.date.today().year - 15; i++) {
        year[i - startYear] = i;
      }
      return year;
    },
    gradYear: function () {
      var year = [];
      var startYear = s.date.today().year - 26;
      for (var i = startYear; i < s.date.today().year + 3; i++) {
        year[i - startYear] = i;
      }
      return year;
    },
    month: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  };
  // 其它数据
  s.listData = {
    // 最高学历
    degree: ['大专', '本科', '硕士', '博士', '其它'],
    // 工作年限
    experience: ['应届毕业生', '1年', '2年', '3年', '4年', '5年', '6年', '7年', '8年', '9年', '10年', '10年以上'],
    // 工作性质
    nature: ['全职', '兼职', '实习'],
    // 期望月薪
    salary: ['2k以下', '2k-5k', '5k-10k', '10k-15k', '15k-25k', '25k-50k', '50k以上'],
    // 技能评价
    level: ['了解', '熟悉', '掌握', '精通', '专家'],
    // 求职意向
    intent: ['我目前已离职，可快速到岗', '我目前正在职，正考虑换个新环境', '我暂时不想找工作', '我是应届毕业生'],
    // 省份
    provs: [],
    // 城市，默认为热门城市
    citys: ['北京', '上海', '广州', '深圳', '杭州', '成都', '西安', '南京', '厦门', '武汉'],
    getCitys: function (prov) {
      switch (prov) {
        // 热门城市                                                                                                   
        case '热门城市':
          s.listData.citys = ['北京', '上海', '广州', '深圳', '杭州', '成都', '西安', '南京', '厦门', '武汉'];
          break
        // 如果是直辖市，不显示市下面具体的区
        case '北京':
        case '天津':
        case '上海':
        case '重庆':
          s.listData.citys = [prov + "市"];
          break;
        // 如果是一般省份，取得省下的城市                                                                                                   
        default:
          for (var prop in _areaselect_data.c) {
            if (prop.indexOf(prov) >= 0) {
              s.listData.citys = _areaselect_data.c[prop];
            }
          }
          break;
      }
    }
  }
 // 取得省份，即给s.listData.provs赋值
  s.getProvs = function () {
    s.listData.provs = _areaselect_data.p.map(function (value) {
      if (value.indexOf('黑龙江') >= 0) {
        return value.substring(0, 3);
      }
      return value.substring(0, 2);
    })
  } ();

  // 下拉控件数据操作
  s.selectData = function (event, prop, index) {
    var elem = $(event.target) // 相当于this
    var boxID = whichBox(elem);
    var select_box = elem.parents('.rsm_select');

    var isCalender = elem.parent().is('.rsm_select_list-month');
    var isSkill = elem.is('.skill');

    var data;
    if (isCalender) {
      var left = select_box.find('.rsm_select_list-left .active').text();
      var right = elem.text();
      data = left + '.' + right;
    } else {
      data = elem.text();
    }

    if (isSkill) {
      s.skills[index].level = data;
      s.evaluations[0].skill = s.skills;
    } else {
      (index < 0) ? (s[boxID + 'Temp'][prop] = data) : (s[boxID + 's'][index][prop] = data);
    }

  };

  /** 性别选择 **/
  s.selectGerder = function (event) {
    event = ($(event.target).is('i')) ? $(event.target).parent() : $(event.target);
    var gender = $(event).text();
    $('.formInfo_gender').val(gender);
    s.infoTemp.gender = gender;
  };
  s.JobID = $location.search().JobID;
  s.table = $location.search().table;
  // var JobID = $location.search().JobID;
  s.tzcg = function () {
    $.post('/HRDelivery/Delivery', { JobID: s.JobID, ResumeID: s.resumeID });
  }
}