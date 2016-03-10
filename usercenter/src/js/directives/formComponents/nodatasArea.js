// 此版为没有省市区三个数据直接绑在 如 fbVm.data.city 上面 
export default function nodatasArea() {
  return {
    replace:true,
    scope:true,
    template: function(elem, attrs) {
      return `
       <div class="formSet">
        <div class="formSet-doubleWrap" class="clearfix">
          <label class="formLabel" for="${attrs.name}.province">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
          </label>
          <div class="SelectWrap SelectWrap-first">
            <input class="formSet_input" type="text" ng-model="prov" ng-click="showSelectCont($event)" placeholder="省份" readonly required>
            <ul class="selectCont">
              <li ng-repeat="prov in provs" ng-click="getCitys(prov)">{{prov.name}}</li>
            </ul>
          </div>
          <div class="SelectWrap SelectWrap-second">
            <input class="formSet_input" type="text" ng-model="citym" ng-click="showSelectCont($event)" placeholder="城市" readonly required>
            <ul class="selectCont">
              <li ng-repeat="citym in citys" ng-click="setCity(citym)">{{citym.name}}</li>
            </ul>
          </div>
          <div class="SelectWrap">
            <input class="formSet_input" type="text" ng-model="country" ng-click="showSelectCont($event)" placeholder="区/县" readonly required>
            <ul class="selectCont">
              <li ng-repeat="country in countrys" ng-click="setCountry(country)">{{country.name}}</li>
            </ul>
          </div>
        </div>
      </div> 
      `;
    },
  controller: ['$scope', '$http', '$attrs', function (s, $http, $attrs) {
      s.data = {};
      // 获取省份的数据
      s.provs;
      s.provinces = function () {
        $http.post('/Dict/city').success(function (res) {
          s.areaData = res.result;

          s.provs = s.areaData.filter(function (item) {
            return item.type === 'province';
          });
        });
      }();

      //提交成功之后获取后台返回给我们的数据
      s.$parent[$attrs.vm].getDraft(function (draft) {
        if (draft) {
          s.prov = draft.province.name;
          s.citym = draft.city.name;
          s.country = draft.district.name;
        }
      });
      //将数据保存到跟作用域上
      s.$parent[$attrs.vm].draft.basic = function () {
        var draft = {};
        draft.area = s.area;
        return draft;
        //return angular.toJson(draft);
      };

      //取得城市的数据
      s.getCitys = function (provinces) {
        //获取城市的数据
        s.citys = s.areaData.filter(function (item) {
          return item.type === 'city' && item.code.slice(0, 2) === provinces.code.slice(0, 2);
        });

        //初始化城市的第一个数据选择
        s.citym = s.citys[0].name;
        s.prov = provinces.name;
        //清空县区的数据
        s.country = '';
        //此操作为用户只进行选择省份的操作
        s.province = { code: provinces.code, name: provinces.name };
        s.city = { code: s.citys[0].code, name: s.citym };
        s.district = { code: '', name: '' };
        s.data.area = {
          province: s.province,
          city: s.city,
          district: s.district
        };
        $('.selectCont').hide();
      };
      // 取得县区的信息
      s.setCity = function (citys) {
        //获取区县的数据
        s.countrys = s.areaData.filter(function (item) {
          return item.type === 'district' && item.code.slice(0, 4) === citys.code.slice(0, 4);
        });

        s.country = s.countrys[0].name;
        s.citym = citys.name;

        s.city = { code: citys.code, name: citys.name };
        s.district = { code: s.countrys[0].code, name: s.country };

        s.area = {
          province: s.province,
          city: s.city,
          district: s.district
        };
        $('.selectCont').hide();
      };
      //设置县 区的model值
      s.setCountry = function (countrys) {
        s.country = countrys.name;
        s.district = { code: countrys.code, name: s.country };
        s.area = {
          province: s.province,
          city: s.city,
          district: s.district
        };
        $('.selectCont').hide();
      };
      // 显示下拉框的行为
      s.showSelectCont = function (event) {
        event.stopPropagation();
        $('.selectCont').hide();
        $(event.target).next().show();
      };
    }]
  }
}