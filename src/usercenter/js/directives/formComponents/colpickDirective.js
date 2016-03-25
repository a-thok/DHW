// colpick颜色选择插件 指令
import $ from 'jquery';
export default function colpickDirective() {
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
             <div class="formGroup_edit formGroup_colpick">
               <input class="formInput" id="picker" name="${attrs.name}" type="text" ng-model="${attrs.vm}.data.${attrs.name}">
             </div>
           </div>
        </div>
      `;
    },
    link: function (scope, elem, attrs) {
      $('#picker').colpick({
        layout: 'hex',

        submit: 0,

        colorScheme: 'dark',

        onChange: (hsb, hex, rgb, el, bySetColor) => {

          $(el).css('border-color', '#' + hex);
          if (!bySetColor) $(el).val(hex);
          scope.$parent[attrs.vm].data.themes.themeColor = '#' + hex;
          scope.$digest();
        }
      }).keyup(() => {
        $(this).colpickSetColor(this.value);
      });
    }
  };
}
