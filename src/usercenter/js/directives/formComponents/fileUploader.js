import WebUploader from 'web-uploader';
import { dhw } from '../../data/data.js';
import $ from 'jquery';
export default function fileUpLoader() {
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
            <div class="wu-example formUploadImg">
              <!--用来存放文件信息-->
              <div class="uploader-list" style="float:right"></div>
              <div class="btns">
                  <div class="picker">选择文件</div>
              </div>
            </div>
          </div>
        </div>
      `;
    },
    link: function (scope, elem, attrs) {
      var uploader = WebUploader.create({
        auto: true,
        swf: '//cdn.dreamhiway.com/static/lib/Uploader.swf',
        server: dhw.fileuploadurl + '?key=' + attrs.keyname,
        pick: elem.find('.picker')[0],
        resize: false
      });
      elem.find('#ctlBtn').click(() => uploader.upload());
      uploader.on('fileQueued', (file) => {
        scope.$apply(() => {
          scope.$parent[attrs.vm].data[attrs.name] = file.name;
        });
        elem.find('.uploader-list').html('<div id="' + file.id + '" class="item" style="position:relative">' + '<span title="删除" style="position:absolute;left:130px;top:-7px;cursor:pointer;color:red" id="cancel' + file.id + '">x</span>' +
          '<h4 class="info">' + file.name + '</h4>' +
          '<p class="state">等待上传...</p>' +
          '</div>');
      });
      uploader.on('uploadProgress', (file, percentage) => {
        var $li = elem.find('#' + file.id);
        var $cancel = elem.find('#cancel' + file.id);
        var $percent = $li.find('.progress .progress-bar');

        // 避免重复创建
        if (!$percent.length) {
          $percent = $('<div class="progress progress-striped active">' +
            '<div class="progress-bar" role="progressbar" style="width: 0%">' +
            '</div>' +
            '</div>').appendTo($li).find('.progress-bar');
        }

        $li.find('p.state').text('上传中');
        $cancel.on('click', () => {
          uploader.removeFile(file, true);
          $li.remove();
        });
        $percent.css('width', percentage * 100 + '%');
      });

      uploader.on('uploadSuccess', (file, res) => {
        elem.find('#' + file.id).find('p.state').text('已上传');
        scope.$parent[attrs.vm].data[attrs.pathname] = res.path + res.name;
      });

      uploader.on('uploadError', (file) => {
        elem.find('#' + file.id).find('p.state').text('上传出错');
      });

      uploader.on('uploadComplete', (file) => {
        elem.find('#' + file.id).find('.progress').fadeOut();
      });
    }
  };
}
