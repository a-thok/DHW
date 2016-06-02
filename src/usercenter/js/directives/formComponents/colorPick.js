// 颜色选择插件 指令
export default function colorPick() {
  return {
    replace: true,
    scope: true,
    template(elem, attrs) {
      return `<div class="formGourp clearfix">
        <div class="formGourp_wrap">
          <label class="formLabel" for="${attrs.name}">
            <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
          </label>
          <div class="formGroup_edit">
            <div class="colorPicker" color-picker ng-model="${attrs.vm}.data.${attrs.name}"></div>
            <input class="formInput" type="text" name="${attrs.name}" ng-model="${attrs.vm}.data.${attrs.name}">
          </div>
        </div>
      </div>`;
    }
  };
}
