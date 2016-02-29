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
    //取得城市的数据
    s.getCitys = (province) => {
        s.citys = s.$parent.areaData.filter((item) => { 
          return item.type === 'city' && item.code.slice(0, 2) === province.code.slice(0, 2); 
        });
        //当选中省份的时候把选中的值赋值到model上面
        s.data.city = s.citys[0].name
        s.data.province = province.name
        s.data.country = '';
        s.province = {code : province.code,name: s.data.province};
        s.city = {code: s.citys[0].code ,name: s.data.city};
        s.district = {code: '', name: ''};
        s.data.area = {
          province: s.province,
          city: s.city,
          district:s.district
        }
     };
     
    // 取得市信息
    s.setCity = function (citys) {
      // console.log(citys);
      // s.data.city = $.trim($(event.target).text());
      s.countrys = s.$parent.areaData.filter((item) => {
        return item.type === 'district' && item.code.slice(0,4) === citys.code.slice(0,4);
      });
      //设置区县的ng-model
      s.data.country = s.countrys[0].name;
      s.data.city = citys.name
      
      s.city = {code: citys.code, name:citys.name};
      s.district = {code: s.countrys[0].code, name: s.data.country}
      
      s.data.area = {
          province: s.province,
          city: s.city,
          district:s.district
        }
    };
    //点击区县的时候赋值model
    s.setCountry = function(countrys) {
      s.data.country = countrys.name
      
      s.district = {code : countrys.code, name:s.data.country}
      s.data.area = {
        province: s.province,
        city: s.city,
        district:s.district
      }
    }
  
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