// 此版为没有省市区三个数据直接绑在 如 fbVm.data.city
import $ from 'jquery';
export default function nodatasArea() {
  return {
    replace: true,
    scope: true,
    template(elem, attrs) {
      return `<div class="formSet">
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
      </div>`;
    },
    controller: ['$scope', '$http', '$attrs', function Ctrl($scope, $http, $attrs) {
      $scope.data = {};
      // 获取省份的数据
      $http.post('/Dict/city').success((res) => {
        $scope.areaData = res.result;
        $scope.provs = $scope.areaData.filter((item) => item.type === 'province');
      });
      // 提交成功之后获取后台返回给我们的数据
      $scope.$parent[$attrs.vm].getDraft((draft) => {
        if (draft) {
          $scope.prov = draft.province.name;
          $scope.citym = draft.city.name;
          $scope.country = draft.district.name;
          $scope.area = draft;
        }
      });
      if ($attrs.vm === 'addfdVm') {
        $scope.$parent[$attrs.vm].getEditdata = (draft) => {
          if (draft) {
            $scope.prov = draft.province.name;
            $scope.citym = draft.city.name;
            $scope.country = draft.district.name;
            $scope.area = draft;
          }
        };
        // $scope.$parent[$attrs.vm].clearEditdata = () => {
        //   $scope.prov = '';
        //   $scope.citym = '';
        //   $scope.country = '';
        //   $scope.area = {};
        // }
      }
      // 将数据保存到跟作用域上
      $scope.$parent[$attrs.vm].draft.basic = () => {
        var draft = {};
        draft.area = $scope.area;
        return draft;
      };
      // 取得城市的数据
      $scope.getCitys = (provinces) => {
        // 获取城市的数据
        $scope.citys = $scope.areaData.filter((item) =>
          item.type === 'city' && item.code.slice(0, 2) === provinces.code.slice(0, 2)
        );

        // 初始化城市的第一个数据选择
        $scope.citym = $scope.citys[0].name;
        $scope.prov = provinces.name;
        // 清空县区的数据
        $scope.country = '';
        // 此操作为用户只进行选择省份的操作
        $scope.province = { code: provinces.code, name: provinces.name };
        $scope.city = { code: $scope.citys[0].code, name: $scope.citym };
        $scope.district = { code: '', name: '' };
        $scope.area = {
          province: $scope.province,
          city: $scope.city,
          district: $scope.district
        };
        $('.selectCont').hide();
      };
      // 取得县区的信息
      $scope.setCity = (citys) => {
        // 获取区县的数据
        $scope.countrys = $scope.areaData.filter((item) => (
          item.type === 'district' && item.code.slice(0, 4) === citys.code.slice(0, 4)
        ));

        $scope.country = $scope.countrys[0].name;
        $scope.citym = citys.name;
        if ($attrs.map) {
          $scope.$parent[$attrs.vm].mapcity = $scope.citym;
        }
        $scope.city = { code: citys.code, name: citys.name };
        $scope.district = { code: $scope.countrys[0].code, name: $scope.country };

        $scope.area = {
          province: $scope.province,
          city: $scope.city,
          district: $scope.district
        };
        $('.selectCont').hide();
      };
      // 设置县 区的model值
      $scope.setCountry = (countrys) => {
        $scope.country = countrys.name;
        $scope.district = { code: countrys.code, name: $scope.country };
        $scope.area = {
          province: $scope.province,
          city: $scope.city,
          district: $scope.district
        };
        if ($attrs.map) {
          $scope.$parent[$attrs.vm].mapcity = $scope.country;
          $scope.$parent[$attrs.vm].getAddress();
        }
        $('.selectCont').hide();
      };
      // 显示下拉框的行为
      $scope.showSelectCont = (event) => {
        event.stopPropagation();
        $('.selectCont').hide();
        $(event.target).next().show();
      };
    }]
  };
}
