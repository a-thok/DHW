import WebUploader from 'web-uploader';
import { dhw } from '../../data/data.js';
export default function bindImg() {
 return {
   
      require: 'ngModel',
      scope: true,
     // replace: true,
      link: function (scope, element, attr, ngModel) {

        // let $pick = element;
        let uploader = WebUploader.create({
          auto: true,
          swf: '//cdn.dreamhiway.com/static/lib/Uploader.swf',
          server: dhw.imguploadurl + '?key=' + attr.keyname + '&t=' + attr.size,
          pick: element[0],
          accept: {
              title: 'Images',
              extensions: 'gif,jpg,jpeg,bmp,png',
              mimeTypes: 'image/*'
            }
        });
    //添加图片
    uploader.on('fileQueued', function (file) {
      uploader.makeThumb(file, function (error, src) {
        if(error) {
          return;
        }
      },100,100)
    });
    
    // 上传成功
    uploader.on('uploadSuccess', (file, res) => {
        // $result.text('上传成功');
        scope.$apply(function () {
          ngModel.$setViewValue(res.path + res.name);
        });
      });
      
        
      // 上传失败
      uploader.on('uploadError', function (file) {
      });
      
  }
  
 }
 
}
