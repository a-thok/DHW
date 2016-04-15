// 添加图片的指令
import angular from 'angular';
export default function addPhoto() {
  return {
    repalce: true,
    scope: true,
    template: function (elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div ng-repeat="photo in vm.photos" class="addphoto">
              <div web-uploader
                   data-vm="${attrs.vm}"
                   data-label="${attrs.label}"
                   data-name="${attrs.name}"
                   data-key="${attrs.key}"
                   data-size="${attrs.size}"
                   data-repeatitem="${attrs.repeatitem}"
                   data-isrepeatitem="${attrs.isrepeatitem}"
                   data-sy="${attrs.sy}"
                   ng-model="${attrs.model}"
              ></div>
              <button class="formSet_input_btn addphoto_del_btn" ng-hide="$index===0" ng-click="vm.delphoto($index)">删除</button>         
          </div>
        </div>
         <button class="formBtn formBtn--submit addphoto_add_btn" ng-click="vm.addphoto()" type="button">添加新图片</button>   
        <div class="formGourp formGourp--submit clearfix">
          <button class="formBtn formBtn--submit" type="button" ng-click="vm.submit()">保存修改</button>
        </div>
      `;
    },
    controller:['$scope', '$http', '$attrs', function ($scope, $http, $attrs) {
      var vm = this;
      let id = $scope.$parent[$attrs.vm].type;
      vm.photos = [{}];
      $http.post('/CompanyHomeEdit/PhotoList', { type: id }).success((data) => {
        if (data.result.length == 0) {
          vm.photos = [{}];
        } else {
          vm.photos = data.result;
        }
      });
      vm.addphoto = function () {
        if (vm.photos.length < 5) {
          vm.photos.push({});
        } else {
          alert('最多只能上传5张图片！');
        }
      };
      vm.delphoto = function (index) {
        vm.photos.splice(index, 1);
      };
      vm.submit = function () {
        var newArr = [];
        for (var i = 0, len = vm.photos.length; i < len; i++) {
          if (vm.photos[i].url) {
            newArr.push(vm.photos[i]);
          }
        }
        newArr = angular.toJson(newArr);
        $http.post('/CompanyHomeEdit/PhotoSave',{
          type: id,
          imgs: newArr
        }).success((d) => {
          if (d.success) {
            alert('上传成功');
          }
        });
      };
    }],
    controllerAs: 'vm'
  };
}
