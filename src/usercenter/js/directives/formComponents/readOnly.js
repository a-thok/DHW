export default function readOnly() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <label class="formLabel" for="${attrs.name}">
            ${attrs.label}
          </label>
          <span class="readSpan" ng-if="!${attrs.isarea}">{{${attrs.vm}.data.${attrs.name}}}</span>
          <textarea class="formTextarea" ng-if="${attrs.isarea}" ng-disabled="${attrs.disabled}">{{${attrs.vm}.data.${attrs.name}}}</textarea>
        </div>
      `;
    }
  };
}
