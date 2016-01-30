export default function selectSimple() {
  return {
    template: function (elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel" for="${attrs.name}">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            <select class="formSelect" id="${attrs.name}" name="${attrs.name}"
              ng-model="${attrs.this}.${attrs.name}"
              ng-pattern="${attrs.pattern}"
              ng-options="${attrs.options}"
              ng-required="${attrs.required}"
            >
              <option value="">请选择</option>
            </select>
          </div>
        </div>
      `;
    },
    replace: true
  }
}