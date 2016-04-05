import { dhw } from '../../data/data.js';
export default function replaylist() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
          <div class="listWrap">
            <ul class="titleList clearfix">
              <li class="titleList_item" ng-repeat="item in ${attrs.vm}.list" ng-style="{width: item.width}">{{item.name}}</li>
              <li ng-if="${attrs.operate}" class="titleList_item" style="width:10%">操作</li>
            </ul>
            <ul class="list">
              <li class="list_item"
                ng-repeat="item in vm.data"
                data-vm="${attrs.vm}"
                data-operate="${attrs.operate}"
                data-operation="${attrs.operation}"
                data-func="${attrs.func}"
                data-delkey="${attrs.delkey}"
                data-del="${attrs.del}"
                data-datekey="${attrs.datekey}"
                data-datekeytxt="${attrs.datekeytxt}"
                data-toptxt="${attrs.toptxt}"
              replaylist-item>
              </li>
            </ul>
            <div class="list_item_none" ng-if="vm.total === 0">
              暂无相关数据
            </div>
            <div class="paginationWrap" ng-if="vm.total > 5">
              <div class="pagination" uib-pagination
                boundary-links="true"
                total-items="vm.total"
                items-per-page="5"
                max-size="10"
                force-ellipses="true"
                previous-text="&lsaquo;"
                next-text="&rsaquo;"
                first-text="&laquo;"
                last-text="&raquo;"
                ng-model="vm.currentPage"
                ng-change="vm.pageChanged()"
              ></div>
            </div>
          </div>
        `;
    },
    controller: ['$http', '$attrs', '$scope', '$window', function ($http, $attrs, $scope, $window) {
      var vm = this;
      vm.dhw = dhw;
      let getData = (pageIndex) => {
        $http.post($attrs.api, Object.assign({}, {
          pageIndex: pageIndex,
          pageSize: 5,
        })).success(res => {
          vm.total = res.result.data;
          if (res.result.data) {
            vm.data = res.result.data;
          } else {
            vm.data = res.result;
          }
        });
      };
      getData(1);
      vm.pageChanged = () => {
        getData(vm.currentPage);
        $window.scrollTo(0, 0);
      };
      vm.replay = (duid, jobid) => {
        $scope.$parent[$attrs.vm].data.duid = duid;
        $scope.$parent[$attrs.vm].data.jobid = jobid;
      };
    }],
    link: function (scope, elem, attrs) {
      elem.on('click', '#replay', function () {
        var c = parseInt(this.offsetTop);
        scope.$apply(function() {
          scope.$parent.style.top = c + 50 + 'px';
          scope.$parent.style.left = '675px';
          scope.$parent.style.display = 'block';
        });
      });
    },
    controllerAs: 'vm'
  };
}
