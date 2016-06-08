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
              ng-class="{'ucSidebar_menu_list_item--active': vm.isactive(route.url)}"              
              ui-sref="{{route.url}}"
            >{{route.text}}</a>
          </dd>
        </dl>
        </div>
       </div>      
      `;
    },
    controller: ['$scope', '$location', '$state', function ($scope, $location, $state) {
      let vm = this;
      vm.isactive = (name) => {
        return $state.is(name);
      }
    }],
    controllerAs: 'vm'
  };
}
