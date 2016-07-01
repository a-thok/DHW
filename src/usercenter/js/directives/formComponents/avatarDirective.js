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
          <span class="avatarBtn" id="accountAvatar" ng-model="data.logo"  data-keyname="uc"  bind-img>上传头像</span>
        </div>
        <div ng-show="data.logo">
          <div class="avatarUpload clearfix"
            ng-jcrop="obj.src"
            ng-jcrop-config-name="upload"
            selection="obj.selection"
            thumbnail="obj.thumbnail">
          </div>
          <div class="formSet formSet-avatar clearfix">
            <button class="submitBtn" type="button" ng-disabled="!data.logo" ng-click="submit()">保存修改</button>
          </div>
        </div>
      </form>`;
    },
    controller: ['$scope', '$http', function Ctrl($scope, $http) {
      $scope.dhw = dhw;
      $scope.data = {
        x: 0,
        y: 0,
        w: 100,
        h: 100
      };
      $http.post('/UserAccount/Img').success((data) => {
        $scope.avatar = data.result.logo;
      });
      $scope.obj = { src: '', selection: [], thumbnail: true };
      // $scope.obj.selection = [0, 0, 200, 200, 200, 200];

      $scope.$watch('data.logo', (newValue) => {
        var url = dhw.imgurl + newValue + '.jpg';
        if ($scope.data.logo) {
          $('.jcrop-holder').find('img').attr('ng-src', url);
          $('.jcrop-holder').find('img').attr('src', url);
          $scope.obj.src = url;
        }
      });

      $scope.submit = () => {
        $scope.data.x = $scope.obj.selection[0];
        $scope.data.y = $scope.obj.selection[1];
        $scope.data.w = $scope.obj.selection[4];
        $scope.data.h = $scope.obj.selection[5];
        console.log($scope.obj.selection);

        var params = $.extend({}, $scope.data);

        params.logo = (params.logo);
        params.t = '100x100_200x200';
        params.action = 'cut';
        $.getJSON(dhw.imgcuturl + '?callback=?', params, (data) => {

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
      };
    }]
  };
}
