import partialController from './partialController.js';

export default function textArea() {
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
              {{${attrs.vm}.data.${attrs.name}}}
              <a class="formSwitch" href="javascript:;" ng-click="vm.edit(${attrs.vm}.data.${attrs.name})">修改</a>
            </div>
            
            <div class="formGroup_edit"  ng-show="!vm.isPlain">
              <textarea class="formTextarea" id="${attrs.name}" name="${attrs.name}" type="text"
                ng-model="${attrs.vm}.data.${attrs.name}"
                ng-pattern="${attrs.pattern}"
                ng-required="${attrs.required}"
              ></textarea>
              <a class="formSwitch" href="javascript:;" ng-show="${attrs.switch}" ng-click="vm.save()">保存</a>
              <a class="formSwitch" href="javascript:;" ng-show="${attrs.switch}" ng-click="vm.cancle()">取消</a>
            </div>
          </div>
          <label class="formTip formTip--error"
            ng-show="${attrs.form}.${attrs.name}.$invalid && !${attrs.form}.${attrs.name}.$error.required"
          >
            <span class="formTip_text">${attrs.error}</span>
          </label>
          <label class="formTip formTip--error"
            ng-show="${attrs.form}.${attrs.name}.$dirty && ${attrs.form}.${attrs.name}.$error.required"
          >
            <span class="formTip_text">${attrs.label}不能为空</span>
          </label>
        </div>
      `;
    },
    controller: ['$scope', '$attrs', '$http','$stateParams',function($scope, $attrs,$http,$stateParams) {
      let vm = this;
      partialController($scope, $attrs,$http,$stateParams, vm);
    }],
    controllerAs: 'vm'
  };
}