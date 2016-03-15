export default function switchType() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
      <div class="switchType" ng-if="vm.accountType == 2">
        <span ng-show="mainVm.logintype == 2" ng-click="vm.switch(1)">切换到个人版</span>
        <span ng-show="mainVm.logintype == 1" ng-click="vm.switch(2)">切换到企业版</span>
      </div>
      `;
    },
    controller: ['$scope', '$location', '$attrs', function ($scope, $location, $attrs) {
      let vm = this;
      let mainVm = $scope.$parent.mainVm;
      vm.accountType = mainVm.accountType;
      vm.switch = type => {
        document.cookie = 'logintype=' + type;
        mainVm.logintype = type;
        // 切换菜单
        mainVm.routes.items = type === 1 ? mainVm.routes_p : mainVm.routes_c;
        // 更改菜单第一项为高亮项
        mainVm.routes.items.forEach((route, i) => {
          route.active = i === 0 ? true : false;
        });
        // 路由定位到菜单第一项
        if($attrs.curl && $attrs.purl && mainVm.logintype === 2 ) {
          $location.path($attrs.curl);    
        }else if($attrs.curl && $attrs.purl && mainVm.logintype === 1) {
          $location.path($attrs.purl);
        }else {
         $location.path(mainVm.routes.items[0].url);
       }
      }
    }],
    controllerAs: 'vm'
  }
}