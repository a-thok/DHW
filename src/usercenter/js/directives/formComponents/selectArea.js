import partialController from './partialController.js';

export default function selectArea() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel" for="${attrs.name}.province">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            
            <div class="formGroup_display" ng-show="vm.isPlain">
              {{${attrs.vm}.data.${attrs.name}.province.name}}
              -
              {{${attrs.vm}.data.${attrs.name}.city.name}}
              -
              {{${attrs.vm}.data.${attrs.name}.district.name}}
              <button class="formSwitch" type="button" ng-click="vm.edit(${attrs.vm}.data.${attrs.name})">修改</button>
            </div>
            
            <div class="formGroup_edit"  ng-show="!vm.isPlain">
              <select class="formSelect formSelect--multiple" id="${attrs.name}.province" name="${attrs.name}.province"
                ng-model="${attrs.vm}.data.${attrs.name}.province"
                ng-options="item.name for item in vm.provinces"
                ng-change="vm.getCities(${attrs.vm}.data.${attrs.name}.province);${attrs.vm}.data.${attrs.name}.city='';${attrs.vm}.data.${attrs.name}.district=''"
                ng-required="${attrs.required}"
              >
              </select>
              <select class="formSelect formSelect--multiple" id="${attrs.name}.city" name="${attrs.name}.city"
                ng-model="${attrs.vm}.data.${attrs.name}.city"
                ng-options="item.name for item in vm.cities"
                ng-change="vm.getDistricts(${attrs.vm}.data.${attrs.name}.city);${attrs.vm}.data.${attrs.name}.district=''"
                ng-required="${attrs.required}"
                ng-show="vm.isShowCities"
              >
              </select>
              <select class="formSelect formSelect--multiple" id="${attrs.name}.district" name="${attrs.name}.district"
                ng-model="${attrs.vm}.data.${attrs.name}.district"
                ng-options="item.name for item in vm.districts"
                ng-required="${attrs.required}"
                ng-show="vm.isShowDistricts"
              >
              </select>
              <button class="formSwitch" type="button" ng-show="${attrs.switch}" ng-click="vm.save()" ng-disabled="${attrs.form}.${attrs.name}.$invalid">保存</button>
              <button class="formSwitch" type="button" ng-show="${attrs.switch}" ng-click="vm.cancle()">取消</a>
            </div>
          </div>
        </div>
      `;
    },
    controller: ['$scope', '$attrs', '$http', '$stateParams', function ($scope, $attrs, $http, $stateParams) {
      let vm = this;
      partialController($scope, $attrs, $http, $stateParams, vm);
      // 市、县显示切换
      vm.isShowCities = false;
      vm.isShowDistricts = false;
      // 省、市、县数据
      vm.areaData = [];
      // 获取省
      vm.provinces = (() => {
        $http.post('/Dict/city').success((res) => {
          vm.areaData = res.result;
          vm.provinces = vm.areaData.filter((item) => {
            return item.type === 'province';
          });
        });
      })();
      // 点击省获取市
      vm.getCities = (province) => {
        vm.cities = vm.areaData.filter((item) => { 
          return item.type === 'city' && item.code.slice(0, 2) === province.code.slice(0, 2); 
        });
        vm.isShowCities = true; // 显示市
        vm.isShowDistricts = false; // 隐藏县
      };
      // 点击市获取县
      vm.getDistricts = (city) => {
        vm.districts = vm.areaData.filter((item) => { 
          return item.type === 'district' && item.code.slice(0, 4) === city.code.slice(0, 4); 
        });
        vm.isShowDistricts = true; // 显示县
      };
    }],
    controllerAs: 'vm'
  };
}
