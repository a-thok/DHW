import partialController from './partialController.js';

export default function textArea() {
  return {
    replace: true,
    scope: true,
    template(elem, attrs) {
      return `<div class="formGourp clearfix">
        <div class="formGourp_wrap">
          <label class="formLabel" for="${attrs.name}">
            <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
          </label>
          <div class="formGroup_display" ng-show="vm.isPlain">
            {{${attrs.vm}.data.${attrs.name}}}
            <button class="formSwitch" type="button" ng-click="vm.edit(${attrs.vm}.data.${attrs.name})">修改</button>
          </div>
          <div class="formGroup_edit"  ng-show="!vm.isPlain">
            <textarea class="formTextarea" id="${attrs.name}" name="${attrs.name}" type="text" placeholder="${attrs.placeholder || ''}"
              ng-disabled="${attrs.disabled}"
              ${
                attrs.repeatitem ?
                'ng-model="' + attrs.repeatitem + '.' + attrs.name + '"'
                :
                'ng-model="' + attrs.vm + '.data.' + attrs.name + '"'
              }
              ng-pattern="${attrs.pattern}"
              ng-required="${attrs.required}"
            ></textarea>
            <button class="formSwitch" type="button" ng-show="${attrs.switch}" ng-click="vm.save()" ng-disabled="${attrs.form}.${attrs.name}.$invalid">保存</button>
            <button class="formSwitch" type="button" ng-show="${attrs.switch}" ng-click="vm.cancle()">取消</a>
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
      </div>`;
    },
    controller: ['$scope', '$attrs', '$http', '$stateParams', function Ctrl($scope, $attrs, $http, $stateParams) {
      let vm = this;
      partialController($scope, $attrs, $http, $stateParams, vm);
    }],
    controllerAs: 'vm'
  };
}
