// 基本信息控制器
import $ from 'jquery';
import angular from 'angular';
export default function BaseCtrl(s) {
  s.dhw = window.dhw;
  // 核心数据
  s.dataP = {
    sercont: 1,
    ptid: 3,
  };
  s.dataC = {
    sercont: 1,
    ptid: 3,
  };
  // 视图数据
  s.showPersonal = true;
  // 当前应该处理的是哪个数据
  s.which_data = function () {
    var which_data;
    if (s.showPersonal) {
      which_data = 'dataP';
    } else {
      which_data = 'dataC';
    }
    return which_data;
  }

  // 载入草稿和验证
  s.$parent.$watch('mainmark', (newValue) => {
    if (newValue) {
      s.$parent.getDraft('basic', (draft) => {
        $.extend(s, draft);
        if (s.dataP.area) {
          s.dataP.area = angular.fromJson(s.dataP.area);
          s.prov = s.dataP.area.province.name;
          s.citym = s.dataP.area.city.name;
          s.country = s.dataP.area.district.name;
        }
      });
    }
  });
  // 保存草稿数据到根作用域
  s.$parent.draft.basic = function () {
    var draft = {};
    draft.dataP = s.dataP;
    draft.dataC = s.dataC;
    draft.showPersonal = s.showPersonal;
    return angular.toJson(draft);
  };

  // 取得城市的数据
  s.getCitys = (provinces) => {
    s.citys = s.$parent.areaData.filter((item) => {
      return item.type === 'city' && item.code.slice(0, 2) === provinces.code.slice(0, 2);
    });
    // 初始化城市的第一个数据选择
    s.citym = s.citys[0].name;
    s.prov = provinces.name;
    // 清空县区的数据
    s.country = '';
    // 此操作为用户只进行选择省份的操作
    s.province = { code: provinces.code, name: provinces.name };
    s.city = { code: s.citys[0].code, name: s.citym };
    s.district = { code: '', name: '' };
    s.dataP.area = {
      province: s.province,
      city: s.city,
      district: s.district
    }
  };
  // 取得县区的信息
  s.setCity = function (citys) {
    s.countrys = s.$parent.areaData.filter((item) => {
      return item.type === 'district' && item.code.slice(0, 4) === citys.code.slice(0, 4);
    });
    s.country = s.countrys[0].name;
    s.citym = citys.name;

    s.city = { code: citys.code, name: citys.name }
    s.district = { code: s.countrys[0].code, name: s.country }

    s.dataP.area = {
      province: s.province,
      city: s.city,
      district: s.district
    };
  };
  // 设置县 区的model值
  s.setCountry = function (countrys) {
    s.country = countrys.name;
    s.district = { code: countrys.code, name: s.country }
    s.dataP.area = {
      province: s.province,
      city: s.city,
      district: s.district
    }
  }

  // 项目类型
  s.zctypes = [
    { name: '公益', id: 3 },
    { name: '科技', id: 4 },
    { name: '工业', id: 5 },
    { name: '农业', id: 6 },
    { name: '家电', id: 7 },
    { name: '设计', id: 8 },
    { name: '娱乐', id: 9 },
    { name: '出版', id: 10 },
    { name: '房产', id: 11 },
    { name: '其它', id: 12 }
  ];
  // 判断是否是当前选中的类型
  s.isSelected = function (id) {
    var which_data = s.which_data();
    return (
      (id == s[which_data].ptid) ? true : false
    );
  };
  // 选中一个类型
  s.getType = function (event, id) {
    var which_data = s.which_data();
    s[which_data].ptid = id;
  };

  // 选择平台服务内容
  s.setSercont = function (event) {
    var which_data = s.which_data();
    var selected = $(event.target).is('.active');
    if (selected) {
      $(event.target).removeClass('active');
      s[which_data].sercont = 0;
    } else {
      $(event.target).addClass('active');
      s[which_data].sercont = 1;
    }
  };
}