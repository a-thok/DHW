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
            <select class="formSelect" id="${attrs.name}" name="${attrs.name}"
              ng-model="${attrs.vm}.data.${attrs.name}"
              ng-options="${attrs.options}"
              ng-required="${attrs.required}"
            >
            </select>
          </div>
        </div>
      `;
    }
  };
}