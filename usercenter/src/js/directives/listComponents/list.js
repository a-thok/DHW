import {dhw} from '../../data/data.js'
export default function list() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
          <div class="listWrap">
            <ul class="titleList clearfix">
              <li class="titleList_item" ng-repeat="item in ${attrs.vm}.list" ng-style="{width: item.width}">{{item.name}}</li>
              <li ng-if="${attrs.operate}" class="titleList_item" style="width:10%">操作</li>
              <li ng-if="${attrs.orderstate}" class="titleList_item" style="width:15%">操作</li>
            </ul>
            <ul class="list">
              <li class="list_item"
                ng-repeat="item in vm.data"
                data-vm="${attrs.vm}"
                data-datekey="${attrs.datekey}"
                data-operate="${attrs.operate}"
                data-operation="${attrs.operation}"
                data-func="${attrs.func}"
                data-delkey="${attrs.delkey}"
                data-del="${attrs.del}"
                data-editurl="${attrs.editurl}"
                data-datekey="${attrs.datekey}"
                data-datekeytxt="${attrs.datekeytxt}"
                data-toptxt="${attrs.toptxt}"
                data-orderstate="${attrs.orderstate}"
                data-imgurl="${attrs.imgurl}"
                data-projectname="${attrs.projectname}"
                data-operate2="${attrs.operate2}"
                data-operation2="${attrs.operation2}"
                data-func2="${attrs.func2}"
                data-editurl2="${attrs.editurl2}"
                data-operate3="${attrs.operate3}"
                data-editurl3="${attrs.editurl3}"
                data-operation3="${attrs.operation3}"
                data-func3="${attrs.func3}"
                data-link="${attrs.link}"
                data-area="${attrs.area}"
                data-addre="${attrs.addre}"
                data-return="${attrs.return}"
                data-returnurl="${attrs.returnurl}"
              list-item>
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
    controller: ['$http', '$attrs', '$window', '$scope', function ($http, $attrs, $window, $scope) {
      var vm = this;
      vm.dhw = dhw;
      let params;
      if (!$attrs.params) {
        params = {};
      } else {
        params = JSON.parse($attrs.params);
      }
      
      let getData = (pageIndex) => {
        $http.post($attrs.api, Object.assign({}, {
          pageIndex: pageIndex,
          pageSize: 5,
          id: parseInt($scope.$parent[$attrs.vm].id)
        }, params)).success(res => {
          vm.total = res.result.total;
          if(res.result.data) {
            vm.data = res.result.data;
          }else {
            vm.data = res.result;
          }
          
        });
      };

      getData(1);

      vm.pageChanged = () => {
        getData(vm.currentPage);
        $window.scrollTo(0, 0);
      };

      vm.delItem = (key) => {

        $http.post($attrs.delapi, { id: key }).success(res => {
          getData(1)
        })
      }
      vm.isArray = (function () {
        if (Array.isArray) {
          return Array.isArray;
        }
        var objectToStringFn = Object.prototype.toString,
          arrayToStringResult = objectToStringFn.call([]);

        return function (subject) {
          return objectToStringFn.call(subject) === arrayToStringResult;
        };
      } ());


    }],
    controllerAs: 'vm'
  };
}