import WebUploader from 'web-uploader';
import { dhw } from '../../data/data.js';

export default function webUploader() {
  return {
    require: 'ngModel',
    template: function (elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel" for="${attrs.name}">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            <input class="formInput" id="${attrs.name}" name="${attrs.name}" type="hidden"
              ng-model="${attrs.this}.${attrs.name}"
              ng-required="${attrs.required}"
            >
            <div class="formUploadImg clearfix">
              <div class="formUploadImg_preview">
                <img>
                <span class="formUploadImg_result"></span>
              </div>
              <div class="filePicker" id="filePicker">选择图片</div>
            </div>
          </div>
        </div>
      `;
    },
    replace: true,
    link: function (scope, elem, attrs, ngModel) {

      var $pick = elem.find('.filePicker');
      var $img = elem.find('img');
      var $result = elem.find('.formUploadImg_result');

      var uploader = WebUploader.create({
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
      uploader.on('fileQueued', function (file) {
        uploader.makeThumb(file, function (error, src) {
          if (error) {
            $img.replaceWith('<span>不能预览</span>');
            return;
          }
          $img.attr('src', src).parent().show();
        }, 100, 100);
        $result.text('正在上传…').show()
      });
        
      // 上传成功
      uploader.on('uploadSuccess', (file, res) => {
        $result.text('上传成功');
        scope.$apply(function () {
          ngModel.$setViewValue(res.path + res.name);
        });
      });
        
      // 上传失败
      uploader.on('uploadError', function (file) {
        $result.text('上传出错');
      });

    }
  }
}