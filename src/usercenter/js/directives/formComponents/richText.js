// import $ from 'jquery';
import { dhw } from '../../data/data.js';
import angular from 'jquery';
export default function richText() {
  return {
    require: 'ngModel',
    replace: true,
    template: function (elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            <div class="formGourp_editor_text">
             <div id="editor" ng-model="${attrs.vm}.data.${attrs.name}" ng-required="${attrs.required}" style="min-height:400px;max-height:500px;"></div>
            </div>
          </div>
        </div>
      `;
    },
    link: function (scope, elem, attrs, ngModel) {
      var editor = new wangEditor('editor');
      editor.config.menus = [
        'source',
        '|',
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        'bgcolor',
        '|',
        'quote',
        'fontfamily',
        'fontsize',
        'head',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'link',
        'unlink',
        'table',
        '|',
        'img',
        '|',
        'undo',
        'redo',
        'fullscreen'
       ];
      // onchange 事件
      editor.config.uploadImgUrl = dhw.imguploadurl + '?key=' + attrs.keyname + '&t=' + attrs.size;
      editor.config.uploadImgFns.onload = function (resultText, xhr) {
        var resultTextJson = angular.fromJson(resultText);
        var resultTextJsona = dhw.imgurl + resultTextJson.path + resultTextJson.name + '.jpg';
        editor.command(null, 'insertHtml', '<img src="' + resultTextJsona + '" style="max-width:100%;"/>');
      };
      editor.onchange = function () {
        scope.$apply(() => {
          ngModel.$setViewValue(editor.$txt.html());
        });
      };
      scope.$on('$destroy', () => {
        editor.destroy();
      });
      editor.create();
    }
  };
}
