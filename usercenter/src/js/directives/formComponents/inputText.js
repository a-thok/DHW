export default function inputText() {
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
            <input class="formInput" id="${attrs.name}" name="${attrs.name}" type="text"
              ng-model="${attrs.vm}.data.${attrs.name}"
              ng-pattern="${attrs.pattern}"
              ng-required="${attrs.required}"
            >
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
    }
  };
}