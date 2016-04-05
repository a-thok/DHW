import WebUploader from 'web-uploader';
import { dhw } from '../../data/data.js';

export default function webUploader() {
  // 模板中的图片地址需要修改！
  return {
    require: 'ngModel',
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel" for="${attrs.name}">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            <input class="formInput" id="${attrs.name}" name="${attrs.name}" type="hidden"
               ${
                  attrs.repeatitem ?
                  'ng-model="' + attrs.repeatitem + '.' + attrs.name + '"'
                  :
                  'ng-model="' + attrs.vm + '.data.' + attrs.name + '"'
                }
              ng-required="${attrs.required}"
            >
            <div class="formUploadImg clearfix">
              <div class="formUploadImg_preview">
                <img ng-src="{{${attrs.vm}.data.${attrs.name} ? dhw.imgurl + ${attrs.vm}.data.${attrs.name} + '_${attrs.size}' + '.jpg' : '//cdn.dreamhiway.com/static/dimg/updefaultlogo.png'}}" ng-if="!${attrs.isrepeatitem}">
                <img ng-src="{{${attrs.repeatitem}.${attrs.name} ? dhw.imgurl + ${attrs.repeatitem}.${attrs.name} + '_${attrs.size}' + '.jpg' : ''}}" ng-if="${attrs.isrepeatitem}">
                <span class="formUploadImg_result"></span>
              </div>
              <div class="filePicker" id="filePicker">选择图片</div>
            </div>
          </div>
        </div>
      `;
    },
    link: function (scope, elem, attrs, ngModel) {
      scope.dhw = dhw;
      let $pick = elem.find('.filePicker');
      let $img = elem.find('img');
      let $result = elem.find('.formUploadImg_result');

      let uploader = WebUploader.create({
        auto: true,
        swf: '//cdn.dreamhiway.com/static/lib/Uploader.swf',
        server: dhw.imguploadurl + '?key=' + attrs.key + '&t=' + attrs.size,
        pick: $pick[0],
        accept: {
          title: 'Images',
          extensions: 'gif,jpg,jpeg,bmp,png',
          mimeTypes: 'image/*'
        }
      });
      // 添加图片
      uploader.on('fileQueued', (file) => {
        uploader.makeThumb(file, (error, src) => {
          if (error) {
            $img.replaceWith('<span>不能预览</span>');
            return;
          }
          $img.attr('src', src).parent().show();
        }, 100, 100);
        $result.text('正在上传…').show();
      });
      // 上传成功
      uploader.on('uploadSuccess', (file, res) => {
        $result.text('上传成功');
        scope.$apply(() => {
          ngModel.$setViewValue(res.path + res.name);
        });
      });
      // 上传失败
      uploader.on('uploadError', () => {
        $result.text('上传出错');
      });
    }
  };
}
