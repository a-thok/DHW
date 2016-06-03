import $ from 'jquery';

export default function avatarDirective() {
  return {
    scope: true,
    replace: true,
    template() {
      return `<form>
        <div class="avatarWrap">
          <img ng-src="{{avatar ? dhw.imgurl + avatar : 'http://cdn.dreamhiway.com/usercenter/images/iconfont-touxiang.png'}}">
          <div style="text-align:center;color:#000;font-size:16px;margin:20px;">请上传200*200规格的图片</div>
        </div>
        <div class="avatarWrap_upload_btn">
          <span class="avatarBtn" id="accountAvatar" ng-model="data.logo" ng-click="clear()" data-keyname="uc"  bind-img>上传头像</span>
        </div>
        <div ng-show="data.logo">
          <div class="avatarUpload clearfix"
            ng-jcrop="obj.src"
            ng-jcrop-config-name="upload"
            selection="obj.selection"
            thumbnail="obj.thumbnail">
            <div class="avatarPre">
              <img ng-src="{{data.logo ? dhw.imgurl + data.logo  + '.jpg' : ''}}" id="preview">
            </div>
          </div>
          <div class="formSet formSet-avatar clearfix">
            <button class="submitBtn" type="button" ng-disabled="!data.logo" ng-click="submit()">保存修改</button>
          </div>
        </div>
      </form>`;
    },
    controller: ['$scope', '$http', function Ctrl($scope, $http) {
      $scope.dhw = dhw;
      // var ieMode = document.documentMode;
      // var isIE = !!window.ActiveXObject;
      // var isIE8 = isIE && ieMode == 8;
      // var isIE9 = isIE && ieMode == 9;
      $scope.data = {
        x: 0,
        y: 0,
        w: 100,
        h: 100
      };
      $http.post('/UserAccount/Img').success((data) => {
        $scope.avatar = data.result.logo;
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
      $scope.obj = { src: '', selection: [], thumbnail: true };

      // console.log(s.obj.selection);

      $scope.$watch('data.logo', (newValue) => {
        var url = dhw.imgurl + newValue + '.jpg';
        if ($scope.data.logo) {
          $('.jcrop-holder').find('img').attr('ng-src', url);
          $('.jcrop-holder').find('img').attr('src', url);
          $scope.obj.src = url;
        }
      });

      $scope.submit = () => {
        if ($scope.obj.selection[0] && $scope.obj.selection[1] && $scope.obj.selection[4] && $scope.obj.selection[5]) {
          $scope.data.x = $scope.obj.selection[0];
          $scope.data.y = $scope.obj.selection[1];
          $scope.data.w = $scope.obj.selection[4];
          $scope.data.h = $scope.obj.selection[5];
        }
        var params = $.extend({}, $scope.data);

        params.logo = (params.logo);
        params.t = '100x100_200x200';
        params.action = 'cut';
        $.getJSON(dhw.imgcuturl + '?callback=?', params, (data) => {
          // console.log('我是后台返回的数据' + data);
          $scope.$apply(() => {
            $scope.avatar = data.path + '100x100.jpg';
            $scope.data.logo = '';
          });
          $http.post('/UserAccount/ImgEdit', { logo: $scope.avatar, imagesize: '100x100_200x200' }).success((d) => {
            if (d.success) {
              console.log(1);
            }
          });
        });
        // $.post(dhw.imgcuturl, params, (data) => {
        //   s.$apply(() => {
        //     s.avatar = data.path + '100x100.jpg';
        //     s.data.logo = '';
        //   });
        //   h.post('/UserAccount/ImgEdit', { logo: s.avatar }).success((d) => {
        //     if (d.success) {
        //       console.log(1);
        //     }
        //   });
        // }, 'json');
      };
    }]
  };
}
