import {
  dhw
} from '../../data/data.js';
import $ from 'jquery';
export default function avatarDirective() {
  return {
    scope: true,
    replace: true,
    template: function () {
      return `
        <form>
      <div class="avatarWrap">
        <img ng-src="{{avatar ? dhw.imgurl + avatar : 'http://cdn.dreamhiway.com/usercenter/images/iconfont-touxiang.png'}}">
        <div style="text-align:center;color:#000;font-size:16px;margin:20px;">请上传100*100规格的图片</div>
      </div>
      <div class="avatarWrap_upload_btn">
        <span class="avatarBtn" id="accountAvatar" ng-model="data.logo" ng-click="clear()" data-keyname="uc" data-size="600x600" bind-img>上传头像</span>
      </div>
      <div ng-show="data.logo">
        <div class="avatarUpload clearfix"
           ng-jcrop="obj.src"
           ng-jcrop-config-name="upload"
           selection="obj.selection"
           thumbnail="obj.thumbnail">
          <div class="avatarPre">
            <img ng-src="{{data.logo ? dhw.imgurl + data.logo + '_600x600' + '.jpg' : ''}}" id="preview">
          </div>
        </div>
        <div class="formSet formSet-avatar clearfix">
          <button class="submitBtn" type="button" ng-disabled="!data.logo" ng-click="submit()">保存修改</button>
        </div>
      </div>
    </form>
      `;
    },
    controller: ['$scope', '$http', function (s, h) {
      s.dhw = dhw;
      s.data = {
        x: 0,
        y: 0,
        w: 192,
        h: 192
      };
      h.post('/UserAccount/Img').success((data) => {
        s.avatar = data.result.logo;
      });
      // $(function () {
      //   $('#avatarImg').Jcrop({
      //     allowSelect: true,
      //     allowMove: true,
      //     allowResize: true,
      //     onChange: showPreview,
      //     onSelect: showPreview,
      //     aspectRatio: 1
      //   });
      //   function showPreview(coords) {
      //     s.data.x = coords.x;
      //     s.data.y = coords.y;
      //     s.data.w = coords.h;
      //     s.data.h = coords.w;
      //     var rx = 100 / coords.w;
      //     var ry = 100 / coords.h;
      //     $('#preview').css({
      //       width: Math.round(rx * 600) + 'px',
      //       height: Math.round(ry * 600) + 'px',
      //       marginLeft: '-' + Math.round(rx * coords.x) + 'px',
      //       marginTop: '-' + Math.round(ry * coords.y) + 'px'
      //     });
      //   }
      // });
      s.obj = { src: '', selection: [], thumbnail: true };
      
      // console.log(s.obj.selection);
      
      s.$watch('data.logo', (oldValue, newValue) => {
        var url = dhw.imgurl + s.data.logo + '_600x600' + '.jpg';
        if (s.data.logo) {
          $('.jcrop-holder').find('img').attr('ng-src', url);
          $('.jcrop-holder').find('img').attr('src', url);
          s.obj.src = url;
        }
      });

      s.submit = function () {
        s.data.x = s.obj.selection[0];
        s.data.y = s.obj.selection[1];
        s.data.w = s.obj.selection[4];
        s.data.h = s.obj.selection[5];
        var params = $.extend({}, s.data);
        params.logo = params.logo + '_600x600';
        params.t = '100x100';
        params.action = 'cut';
        $.post(dhw.imgcuturl, params, (data) => {
          s.$apply(() => {
            s.avatar = data.path + '100x100.jpg';
            s.data.logo = '';
          });
          h.post('/UserAccount/ImgEdit', { logo: s.avatar }).success(() => {
          });
        }, 'json');
      };
    }]
  };
}
