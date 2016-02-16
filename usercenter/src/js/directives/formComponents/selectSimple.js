import partialController from './partialController.js';

export default function selectSimple() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel" for="${attrs.name}">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            
            <div class="formGroup_display" ng-show="vm.isPlain">
              {{${attrs.vm}.data.${attrs.name}.${attrs.part} || ${attrs.vm}.data.${attrs.name}}}
              <a class="formSwitch" href="javascript:;" ng-click="vm.edit(${attrs.vm}.data.${attrs.name})">修改</a>
            </div>
            
            <div class="formGroup_edit"  ng-show="!vm.isPlain">
              <select class="formSelect" id="${attrs.name}" name="${attrs.name}"
                ng-model="${attrs.vm}.data.${attrs.name}"
                ng-options="${attrs.options}"
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
      partialController($scope, $attrs,$http,$stateParams,vm);
    }],
    controllerAs: 'vm'
  };
}