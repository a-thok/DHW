import partialController from './partialController.js';

export default function selectDoubleNumbers() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel" for="${attrs.first}">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            
            <div class="formGroup_display" ng-show="vm.isPlain">
              {{${attrs.vm}.data.${attrs.first}.${attrs.part} || ${attrs.vm}.data.${attrs.first}}}
              -
              {{${attrs.vm}.data.${attrs.second}.${attrs.part} || ${attrs.vm}.data.${attrs.second}}}
              <a class="formSwitch" href="javascript:;" ng-click="vm.edit(${attrs.vm}.data.${attrs.first}, ${attrs.vm}.data.${attrs.second})">修改</a>
            </div>
            
            <div class="formGroup_edit"  ng-show="!vm.isPlain">
              <select class="formSelect formSelect--multiple" id="${attrs.first}" name="${attrs.first}"
                ng-model="${attrs.vm}.data.${attrs.first}"
                ng-options="item for item in vm.firstNumbers"
                ng-change="vm.getSecondNumbers(${attrs.vm}.data.${attrs.first});${attrs.vm}.data.${attrs.second}=''"
                ng-required="${attrs.required}"
              >
              </select>
              <div class="formSelectDiv"> - </div>
              <select class="formSelect formSelect--multiple" id="${attrs.second}" name="${attrs.second}"
                ng-model="${attrs.vm}.data.${attrs.second}"
                ng-options="item for item in vm.secondNumbers"
                ng-required="${attrs.required}"
              >
              </select>
              <a class="formSwitch" href="javascript:;" ng-show="${attrs.switch}" ng-click="vm.save()">保存</a>
              <a class="formSwitch" href="javascript:;" ng-show="${attrs.switch}" ng-click="vm.cancle()">取消</a>
            </div>
          </div>
        </div>
      `;
    },
    controller: ['$scope', '$attrs', '$http','$stateParams',function($scope, $attrs,$http,$stateParams) {
      let vm = this;
      partialController($scope, $attrs,$http,$stateParams, vm);
      
      // 计算一组数字
      let cal = (start) => {
        let arr = [];
        for (let i = start; i <=65; i++) {
          arr.push(i);
        }
        return arr;
      };
      
      // 第一组数字
      vm.firstNumbers = cal(18);
      
      // 选择第一组数字后，计算第二组数字
      vm.getSecondNumbers = (firtNumber) => {
        vm.secondNumbers = cal(firtNumber);
      };

      
    }],
    controllerAs: 'vm'
  };
}