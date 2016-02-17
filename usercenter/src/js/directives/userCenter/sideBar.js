export default function sideBar() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
      <div class="ucSidebar">
      <dl class="ucSidebar_menu">
        <dt class="ucSidebar_menu_title">
          {{ mainVm.routes.title }}
        </dt>
        <dd class="ucSidebar_menu_list" ng-cloak>
          <a ng-repeat="route in mainVm.routes.items"
             class="ucSidebar_menu_list_item"
             ng-class="{'ucSidebar_menu_list_item--active': route.active}"
             ng-click="vm.changeRoute($index)"
             ui-sref="{{route.url}}"
          >{{route.text}}</a>
        </dd>
      </dl>
    </div>
      `
    },
    controller: ['$scope', '$location', function ($scope, $location) {
      var vm = this;

      vm.changeRoute = (index) => {
        $scope.$parent.mainVm.routes.items.forEach((route, i) => {
          if (i === index) {
            route.active = true;
          } else {
            route.active = false;
          }
        });
      };
  
      // 首次进入时，判断当前路由，应用改变高亮的方法
      (function () {
        let index;

        let currentPath;
        var lastIndex = $location.path().lastIndexOf('/');
        if (lastIndex !== 0) {
          currentPath = $location.path().substring(1, lastIndex);
        } else {
          currentPath = $location.path().substring(1);
        }
        
        $scope.$parent.mainVm.routes.items.forEach((route, i) => {
          if (route.url.indexOf('.') !== -1 && route.url.slice(0, route.url.indexOf('.')) === currentPath) {
            index = i;
          } else if (route.url.slice(0) === currentPath) {
            index = i;
          }
        });

        vm.changeRoute(index);
      })();
    }],
    controllerAs: 'vm'
  }
}