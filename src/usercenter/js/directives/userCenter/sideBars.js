export default function sideBars() {
  return {
    replace: true,
    scope: true,
    template: function () {
      return `
      <div style="width:170px;">
      <div ng-repeat="routes in mainVm.routesArr" class="ucSidebar">
        <dl class="ucSidebar_menu">
          <dt class="ucSidebar_menu_title">
            {{ routes.title }}
          </dt>
          <dd class="ucSidebar_menu_list" ng-cloak>
            <a ng-repeat="route in routes.items"
              class="ucSidebar_menu_list_item"
              ng-class="{'ucSidebar_menu_list_item--active': route.active}"
              ng-click="vm.changeRoute($parent.$index,$index)"
              ui-sref="{{route.url}}"
            >{{route.text}}</a>
          </dd>
        </dl>
        </div>
       </div>
      
      `;
    },
    controller: ['$scope', '$location', function ($scope, $location) {
      let vm = this;
      vm.changeRoute = (level, index) => {
        $scope.$parent.mainVm.routesArr.forEach((routes, lev) => {
          routes.items.forEach((route, i) => {
            route.active = lev === level && i === index ? true : false;
          })
        });
      };
      $scope.$parent.$on('logintypechange', function (event, msg) {
        $scope.$parent.mainVm.routesArrBuild(); ini();
      });
      // 刷新页面时，判断当前路由，更改菜单高亮项
      var ini = function () {
        let index;
        let level;
        let currentPath;
        let lastIndex = $location.path().lastIndexOf('/');
        if (lastIndex !== 0) {
          currentPath = $location.path().substring(1, lastIndex);
        } else {
          currentPath = $location.path().substring(1);
        }
        $scope.$parent.mainVm.routesArr.forEach((routes, lev) => {
          routes.items.forEach((route, i) => {
            if (route.url.indexOf('.') !== -1 && route.url.slice(0, route.url.indexOf('.')) === currentPath) {
              index = i; level = lev;
            } else if (route.url.slice(0) === currentPath) {
              index = i; level = lev;
            }
          })
        });
        vm.changeRoute(level || 0, index === undefined ? 0 : index);
      }
      ini();
    }],
    controllerAs: 'vm'
  };
}
