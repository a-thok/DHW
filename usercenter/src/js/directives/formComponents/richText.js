import 'trumbowyg';
import 'trumbowyg/dist/plugins/colors/trumbowyg.colors.js';
import 'trumbowyg/dist/langs/zh_cn.min.js';
import $ from 'jquery';

export default function richText() {
  return {
    require: 'ngModel',
    replace: true,
    template: function(elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            <textarea id="editor" ng-model="${attrs.vm}.data.${attrs.name}" ng-required="${attrs.required}"></textarea>
          </div>
        </div>
      `;
    },
    link: function(scope, elem, attrs, ngModel) {
      let editor = $('#editor');
      
      editor.trumbowyg({
         btnsDef : {
          image : {
            dropdowm :['insertImage','upload'],
          }
        },
        btns: [
          'viewHTML',
          '|', 'formatting', 'btnGrp-design', 'foreColor', 'backColor',
          '|', 'link', 'insertImage',
          '|', 'btnGrp-justify',
          '|', 'btnGrp-lists',
          '|', 'removeformat'
        ],
        fullscreenable: false,
        lang: 'zh_cn'
      }).on('tbwchange', () => {
          scope.$apply(() => {
            ngModel.$setViewValue(editor.trumbowyg('html'))
          });
        });
        
      scope.$on('$destroy', () => {
        editor.trumbowyg('destroy');
      });
    }
  }
}