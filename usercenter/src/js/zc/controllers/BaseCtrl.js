// 基本信息控制器
export default function BaseCtrl(s,$http) {
   /*** 数据 ***/
    // 核心数据
    s.dataP = {
      sercont: 1,
      ptid: 3,
    };
    s.dataC = {
      sercont: 1,
      ptid: 3,
    }
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
    s.$parent.getDraft('basic', function (draft) {
      $.extend(s, draft);
      if (s.dataP.city) {
        s.prov = s.dataP.city.split(',')[0];
        s.city = s.dataP.city.split(',')[1];
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
  
    /*** 行为 ***/
    // 根据省选择市
    // s.getCitys = function (event) {
    //   s.prov = $.trim($(event.target).text());
    //   s.citys = _areaselect_data.c[s.prov];
    //   s.city = _areaselect_data.c[s.prov][0];
    // };
    s.getCitys = (province) => {
        s.citys = s.$parent.areaData.filter((item) => { 
          return item.type === 'city' && item.code.slice(0, 2) === province.code.slice(0, 2); 
        });
        //初始化选中城市的选择
        s.city = s.citys[0].name;
        s.prov = province.name
        /**
         * s.code = province.code
         * s.dataP.area = '福建，2300,泉州,2303,惠安,2304'
         * s.getXian = function(city) {
         *   s.xian = s.$parent.areaData.filter((item) => {
         *     return item.type === '' && item.code.slice(0,2) === city.code.slice(0,2)
         *  })
         * 
         * }
         */
        s.dataP.city = s.prov + "," + s.city;
     };
  
    // 取得省市信息
     s.setCity = function (event) {
      s.city = $.trim($(event.target).text());
      s.dataP.city = s.prov + "," + s.city;
    };
  
    // 项目类型
    s.zctypes = [
      { 'name': '公益', 'id': 3 },
      { 'name': '科技', 'id': 4 },
      { 'name': '工业', 'id': 5 },
      { 'name': '农业', 'id': 6 },
      { 'name': '家电', 'id': 7 },
      { 'name': '设计', 'id': 8 },
      { 'name': '娱乐', 'id': 9 },
      { 'name': '出版', 'id': 10 },
      { 'name': '房产', 'id': 11 },
      { 'name': '其它', 'id': 12 }
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