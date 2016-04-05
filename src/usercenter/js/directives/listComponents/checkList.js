import $ from 'jquery';
export default function checkList() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
          <div class="listWrap">
            <ul class="titleList clearfix">
              <li class="titleList_item" ng-if="${attrs.checkbox}" style="width:5%"><input type="checkbox" name="allchecked" ng-click="vm.checked($event)"></li>
              <li class="titleList_item" ng-repeat="item in ${attrs.vm}.list" ng-style="{width: item.width}">{{item.name}}</li>
              <li ng-if="${attrs.operate}" class="titleList_item" style="width:10%">操作</li>
            </ul>
            <ul class="list">
              <li class="list_item"
                ng-repeat="item in ${attrs.vm}.listData"
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
                data-imgurl="${attrs.imgurl}"
                data-projectname="${attrs.projectname}"
                data-id="${attrs.id}"
                data-checkbox="${attrs.checkbox}"
                data-projectname="${attrs.projectname}"
                data-operate2="${attrs.operate2}"
                data-operation2="${attrs.operation2}"
                data-func2="${attrs.func2}"
                data-editurl2="${attrs.editurl2}"
              check-listitem>
              </li>
            </ul>
            <div class="functionBtn" ng-if="vm.total !== 0">
              <button type="button" ng-if="${attrs.hasread}" ng-click="vm.hasread()">标记为已读</button>
              <button type="button" ng-click="vm.multidel()">删除</button>
            </div>
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
      let vm = this;
      let params;
      let para;
      let arrid = $scope.$parent[$attrs.vm].arrid;
      if (!$attrs.params) {
        params = {};
      } else {
        params = JSON.parse($attrs.params);
      }

      let getData = (pageIndex) => {
        $http.post($attrs.api, Object.assign({}, {
          pageIndex: pageIndex,
          pageSize: 5,
          id: parseInt($scope.$parent[$attrs.vm].id),
        }, params)).success(res => {
          vm.total = res.result.total;
          $scope.$parent[$attrs.vm].listData = res.result.data;
        });
      };

      getData(1);
      vm.pageChanged = () => {
        getData(vm.currentPage);
        $window.scrollTo(0, 0);
      };

      vm.delItem = (key) => {
        $http.post($attrs.delapi, { id: key }).success(() => {
          getData(1);
        });
      };
      vm.isArray = (function () {
        if (Array.isArray) {
          return Array.isArray;
        }
        var objectToStringFn = Object.prototype.toString;
        var arrayToStringResult = objectToStringFn.call([]);

        return function (subject) {
          return objectToStringFn.call(subject) === arrayToStringResult;
        };
      }());
      // 多选删除
      vm.multidel = () => {
        if (arrid.length === 0) {
          alert('您并未选中任何邮件');
        } else {
          if (!$attrs.delparams) {
            para = {};
          } else {
            para = $scope.$eval($attrs.delparams);
          }
          var conf = confirm('是否确定删除?');
          if (conf === true) {
            $http.post($attrs.multidel, Object.assign({}, {
              arrid: $scope.$parent[$attrs.vm].arrid
            }, para)).success(res => {
              if (res.success) {
                var allchecked = document.getElementsByName('allchecked');
                allchecked.checked = false;
                getData(1)
              }
            });
          }
        }
      };
      // 多选已读
      vm.hasread = () => {
        if (arrid.length === 0) {
          alert('您并未选中任何邮件')
        } else {
          var allchecked = document.getElementsByName('allchecked');
          allchecked.checked = false;
          para = {
            state: 23,
            arrid: arrid
          }
          $http.post($attrs.multidel, para).success(res => {
            if (res.success) {
              var allchecked = document.getElementsByName('allchecked');
              allchecked.checked = false;
              getData(1);
            }
          });
        }
      };

      // 选中全部
      vm.checked = (event) => {
        var elem = event.target;
        var checkbox = document.getElementsByName('checkbox');
        for (let i = 0, len = checkbox.length; i < len; i++) {
          if ($(elem).is(':checked')) {
            checkbox[i].checked = true;
            arrid.push(parseInt(checkbox[i].getAttribute('data-id')));
          } else {
            checkbox[i].checked = false;
            arrid = [];
          }
        }
      };
    }],
    controllerAs: 'vm'
  };
}
