import WebUploader from 'web-uploader';

export default function multipleUploader() {
  // 模板中的图片地址需要修改！
  return {
    // require: 'ngModel',
    replace: true,
    scope: true,
    template(elem, attrs) {
      return `<div class="formGourp clearfix">
        <div class="formGourp_wrap">
          <label class="formLabel" for="${attrs.name}">
            <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
          </label>
          <div class="formUploadImg clearfix">
            <div class="formUploadImg_preview">
              <img src='//cdn.dreamhiway.com/static/dimg/updefaultlogo.png'>
              <span class="formUploadImg_result"></span>
            </div>
            <div class="formUploadImg_preview">
              <img src='//cdn.dreamhiway.com/static/dimg/updlogo.png'>
              <span class="formUploadImg_result"></span>
            </div>
            <div class="formUploadImg_preview">
              <img src = '//cdn.dreamhiway.com/static/dimg/updefaultlogo.png'>
              <span class="formUploadImg_result"></span>
            </div>
            <div class="formUploadImg_preview">
              <img src='//cdn.dreamhiway.com/static/dimg/updefaultlogo.png'>
              <span class="formUploadImg_result"></span>
            </div>
            <div class="filePicker" id="filePicker">选择图片</div>
          </div>
        </div>
      </div>`;
    },
    link(scope, elem, attrs) {
      scope.dhw = dhw;
      console.log(elem);
      let $pick = elem.find('.filePicker');
      let $img = elem.find('img');
      console.log($img);
      let $result = elem.find('.formUploadImg_result');
      let uploader = WebUploader.create({
        auto: true,
        swf: '//cdn.dreamhiway.com/static/lib/Uploader.swf',
        server: dhw.imguploadurl + '?key=' + attrs.key + '&t=' + attrs.size + '&keyword=' + attrs.sy,
        pick: $pick[0],
        accept: {
          title: 'Images',
          extensions: 'gif,jpg,jpeg,bmp,png',
          mimeTypes: 'image/*'
        },
        resize: false,
        compress: false
      });
      // 添加图片
      var i = -1;
      var postArr = [];
      uploader.on('fileQueued', (file) => {
        console.log(file);
        uploader.makeThumb(file, (error, src) => {
          // console.log(src);
          if (error) {
            $img.replaceWith('<span>不能预览</span>');
            return;
          }
          ++ i;
          // console.log(i);
          // 
          // console.log($($img[i]).attr('src'));
          $($img[i]).attr('src', src).parent().show();
        }, 100, 100);
        $($result[i]).text('正在上传…').show();
      });
      // 上传成功
      uploader.on('uploadSuccess', (file, res) => {
        $result.text('上传成功');
        if (i < 5) {
          postArr.push(res.path + res.name);
          console.log(postArr);
        } else {
          alert('已经满了');
        }
        // scope.$apply(() => {
        //   ngModel.$setViewValue(res.path + res.name);
        // });
      });
      // 上传失败
      uploader.on('uploadError', () => {
        $result.text('上传出错');
      });
    }
  };
}
