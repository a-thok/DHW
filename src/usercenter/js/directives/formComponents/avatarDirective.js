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
        <div ng-show="data.logo" style="position:relative">
          <div class="avatarUpload clearfix"
            ng-jcrop="obj.src"
            ng-jcrop-config-name="upload"
            selection="obj.selection"
            thumbnail="obj.thumbnail">
            <div class="avatarPre">
              <img ng-src="{{data.logo ? dhw.imgurl + data.logo  + '.jpg' : ''}}" id="preview">
            </div>
          </div>
          <div  class="wait_load" ng-show="visible"></div>
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
      $scope.visible = false;
      // 读取头像
      $http.post('/UserAccount/Img').success((data) => {
        $scope.avatar = data.result.logo;
      });

      // 剪裁插件配置对象
      $scope.obj = {
        src: '',
        selection: [0, 0, 500, 500, 500, 500],
        thumbnail: true
      };
      // 监听图像上传，检测到新上传图像后，处理好配置然后把图像地址写入剪裁插件配置对象
      $scope.$watch('data.logo', (newValue) => {
        $scope.visible = true;
        var url = dhw.imgurl + newValue + '.jpg';
        $('<img>').prop('src', url).on('load', (e) => {
          const width = e.target.width;
          const height = e.target.height;
          const minSize = Math.min(width, height, 500);
          $scope.obj.selection = [0, 0, minSize, minSize, minSize, minSize];
          // console.log($scope.obj.selection);
          $scope.$apply(() => { $scope.obj.src = url; });
          $scope.visible = false;
        });
      });

      // 剪裁后提交
      $scope.data = {
        x: 0,
        y: 0,
        w: 100,
        h: 100
      };

      $scope.submit = () => {
        // 准备参数
        $scope.data.x = $scope.obj.selection[0];
        $scope.data.y = $scope.obj.selection[1];
        $scope.data.w = $scope.obj.selection[4];
        $scope.data.h = $scope.obj.selection[5];

        var params = $.extend({}, $scope.data);
        params.logo = (params.logo);
        params.t = '100x100_200x200';
        params.action = 'cut';

        // 调用接口
        $.getJSON(dhw.imgcuturl + '?callback=?', params, (data) => {
          $scope.$apply(() => {
            $scope.avatar = data.path + '100x100.jpg';
            $scope.data.logo = '';
          });
          $http.post('/UserAccount/ImgEdit', {
            logo: $scope.avatar,
            imagesize: '100x100_200x200'
          }).success((d) => {
            if (!d.success) {
              console.log('头像保存失败！');
            }
          });
        });
      };
    }]
  };
}
