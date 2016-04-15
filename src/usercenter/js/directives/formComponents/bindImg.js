import WebUploader from 'web-uploader';
import { dhw } from '../../data/data.js';
export default function bindImg() {
  return {
    require: 'ngModel',
    scope: true,
    link: function (scope, element, attr, ngModel) {
      let uploader = WebUploader.create({
        auto: true,
        swf: '//cdn.dreamhiway.com/static/lib/Uploader.swf',
        server: dhw.imguploadurl + '?key=' + attr.keyname + '&t=' + (attr.size || ''),
        pick: element[0],
        accept: {
          title: 'Images',
          extensions: 'gif,jpg,jpeg,bmp,png',
          mimeTypes: 'image/*'
        }
      });
    // 添加图片
      uploader.on('fileQueued', (file) => {
        uploader.makeThumb(file, (error) => {
          if (error) {
            return;
          }
        }, 100, 100);
      });
    // 上传成功
      uploader.on('uploadSuccess', (file, res) => {
        // $result.text('上传成功');
        scope.$apply(() => {
          ngModel.$setViewValue(res.path + res.name);
        });
      });
     // 上传失败
      uploader.on('uploadError', () => {
      });
    }
  };
}
