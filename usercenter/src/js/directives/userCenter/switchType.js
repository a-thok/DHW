export default function switchType() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
      <div class="switchType">
        <span ng-show="vm.isCorporate" ng-click="vm.switch(false)">切换到个人版</span>
        <span ng-show="!vm.isCorporate" ng-click="vm.switch(true)">切换到企业版</span>
      </div>
      `;
    },
    controller: ['$scope', '$location', function ($scope, $location) {
      let vm = this;
      let mainVm = $scope.$parent.mainVm;
      
      vm.isCorporate = dhwtempvar.isCoporate ? true : false;
      
      vm.switch = isCorporate => {
        vm.isCorporate = isCorporate;
        // 切换菜单
        mainVm.routes.items = isCorporate ? mainVm.routes_c : mainVm.routes_p;
        // 更改菜单第一项为高亮项
        mainVm.routes.items.forEach((route, i) => {
          route.active = i === 0 ? true : false;
        });
        // 路由定位到菜单第一项
        $location.path(mainVm.routes.items[0].url);
      }
    }],
    controllerAs: 'vm'
  }
}