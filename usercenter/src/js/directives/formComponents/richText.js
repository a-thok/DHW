// import $ from 'jquery';
import { dhw } from '../../data/data.js';
// var wangEditor = require('wangEditor.js')


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
            <div class="formGourp_editor_text">
             <div id="editor" ng-model="${attrs.vm}.data.${attrs.name}" ng-required="${attrs.required}" style="min-height:400px;max-height:500px;"></div>
            </div> 
          </div>
        </div>
      `;
    },
    link: function(scope, elem, attrs, ngModel) {
      var editor = new wangEditor('editor');
   
      // onchange 事件
   
      
        editor.config.uploadImgUrl = dhw.imguploadurl + '?key=' + attrs.keyname + '&t=' + attrs.size;
          editor.config.uploadImgFns.onload = function (resultText, xhr) {
            var b = angular.fromJson(resultText);
            var a  = dhw.imgurl +  b.path + b.name + '.jpg';
            editor.command(null, 'insertHtml', '<img src="' + a + '" style="max-width:100%;"/>');
        };
        editor.onchange = function () {
           scope.$apply(function() {
             ngModel.$setViewValue(editor.$txt.html());
           })
       };
       scope.$on('$destroy', () => {
        editor.destroy();;
       });
     
        editor.create();
    }
  }
}