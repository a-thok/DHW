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
        <span class="avatarBtn" id="accountAvatar" ng-model="data.logo" ng-click="clear()" data-keyname="uc"  bind-img>上传头像</span>
      </div>
      <div ng-show="data.logo">
          <div style="width:500px;overflow:hidden;margin: 20px;">
            <img ng-src="{{data.logo ? dhw.imgurl + data.logo  + '.jpg' : ''}}" id="image">
          </div>
          <div class="avatarPre">
            
          </div>
        <div style="margin: 34px;text-align:center">
          <button class="submitBtn" type="button" ng-disabled="!data.logo" ng-click="submit()">保存修改</button>
        </div>
      </div>
    </form>
      `;
    },
    controller: ['$scope', '$http', '$timeout', function (s, h, $timeout) {
      s.dhw = dhw;
      s.data = {
        x: 0,
        y: 0,
        w: 100,
        h: 100
      };
      h.post('/UserAccount/Img').success((data) => {
        s.avatar = data.result.logo;
      });
      s.$watch('data.logo', (oldValue, newValue) => {
        // var url = dhw.imgurl + s.data.logo + '.jpg';
        if (s.data.logo) {
          // 解决初始化不能及时出现裁剪框
          $timeout(function () {
            $('#image').cropper({
              aspectRatio: 16 / 9,
              crop: function (e) {
                s.data.x = parseInt(e.x, 10);
                s.data.y = parseInt(e.y, 10);
                s.data.w = parseInt(e.width, 10);
                s.data.y = parseInt(e.height, 10);
              }
            });
          });
        }
      });

      s.submit = function () {
        var params = $.extend({}, s.data);
        params.logo = (params.logo);
        params.t = '100x100';
        params.action = 'cut';
        $.getJSON(dhw.imgcuturl + '?callback=?', params, (data) => {
          // console.log('我是后台返回的数据' + data);
          s.$apply(() => {
            s.avatar = data.path + '100x100.jpg';
            s.data.logo = '';
          });
          h.post('/UserAccount/ImgEdit', { logo: s.avatar }).success((d) => {
            if (d.success) {
              console.log(1);
            }
          });
        });
      };
    }]
  };
}
