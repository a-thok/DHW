import angular from 'angular';
import WangEditor from '../../data/wangEditor';

export default function richText() {
  return {
    require: 'ngModel',
    scope: true,
    replace: true,
    template(elem, attrs) {
      return `<div class="formGourp clearfix">
        <div class="formGourp_wrap">
          <label class="formLabel">
            <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
          </label>
          <div class="formGourp_editor_text">
            <textarea id="editor"
            ${
        attrs.repeatitem ?
          'ng-model="' + attrs.repeatitem + '.' + attrs.name + '"'
          :
          'ng-model="' + attrs.vm + '.data.' + attrs.name + '"'
        }
            ng-required="${attrs.required}" style="min-height:400px;max-height:500px;"></textarea>
          </div>
        </div>
      </div>`;
    },
    link(scope, elem, attrs, ngModel) {
      var editor = new WangEditor('editor');
      if (!attrs.ismyj) {
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
          // 'fullscreen'
        ];
      } else {
        editor.config.menus = [
          'bold',
          'underline',
          'italic',
          'strikethrough',
          'eraser',
          'forecolor',
          'bgcolor',
          '|',
          'fontsize',
          'head',
          'unorderlist',
          'orderlist',
          'alignleft',
          'aligncenter',
          'alignright',
          '|',
          'undo',
          'redo',
        ];
      }
      editor.config.menuFixed = false;
      editor.config.uploadImgFileName = 'file';
      // onchange 事件
      editor.config.uploadImgUrl = dhw.imguploadurl + '?key=' + attrs.keyname + '&t=' + attrs.size;
      editor.config.uploadImgFns.onload = (resultText) => {
        var resultTextJson = angular.fromJson(resultText);
        var resultTextJsona = dhw.imgurl + resultTextJson.path + resultTextJson.name + '.jpg';
        editor.command(null, 'insertHtml', '<img src="' + resultTextJsona + '" style="max-width:100%;"/>');
      };
      editor.onchange = () => {
        scope.$apply(() => {
          ngModel.$setViewValue(editor.$txt.html());
        });
      };
      scope.$on('$destroy', () => {
        editor.destroy();
      });
      editor.create();
      // editor.$txt.html(scope.$parent[attrs.vm]);
      // console.log(ngModel.$viewValue);
      ngModel.$render = () => {
        editor.$txt.html(ngModel.$viewValue);
      };
    }
  };
}
