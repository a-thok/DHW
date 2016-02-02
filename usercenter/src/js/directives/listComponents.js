import angular from 'angular';

let app = angular.module('listComponents', []);
app
  .directive('listHeader', function () {
    return {
      template: function (elem, attrs) {
        return `
          <thead class="listThead">
            <tr>
              <th ng-repeat="${attrs.repeat}">{{item}}</th>
            </tr>
          </thead>
        `
      },
      replace: true,
      scope: true
    }
  })
  .directive('listColGroup', function () {
    return {
      template: function (elem, attrs) {
        return `
          <colgroup>
            <col ng-repeat="${attrs.repeat}" width="auto">
          </colgroup>
        `
      },
      replace: true,
      scope: true
    }
  })
  .directive('listContent', function () {
    return {
      template: function (elem, attrs) {
        return `
          <tr ng-repeat="${attrs.repeat}">
            <td>{{items.position}}</td>
            <td>{{items.money}}</td>
            <td>{{items.gznx}}</td>
            <td>{{items.xl}}</td>
            <td>{{items.city}}</td>
            <td><a href="#">查看详情</a></td>
          </tr>
        `
      },
      replace: true,
      scope: true
    }
  })
  .directive('ucList', function() {
    return {
      template: function(elem, attrs) {
        return `
          <div>
            <table>
              <colgroup>
                <col ng-repeat="${attrs.repeat}" width="auto">
              </colgroup>
              <thead class="listThead">
                <tr>
                  <th ng-repeat="${attrs.repeat}">{{item}}</th>
                </tr>
              </thead>
              <tbody>
                <tr ng-repeat="item in vm.data">
                  <td ng-repeat="prop in vm.props">{{item[prop]}}</td>
                </tr>
              </tbody>
            </table>
            
            <div class="paginationWrap">
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
        `
      },
      controller: ['$http', '$attrs', function($http, $attrs) {
        let vm = this;
        
        let getData = (pageIndex) => {
          $http.post($attrs.api, {
            pageIndex: pageIndex,
            pageSize: 5
          }).success(res => {
            vm.total = res.result.total;
            vm.data = res.result.data;
            vm.props = Object.keys(vm.data[0]);
          });
        };
        
        getData(1);
        
        vm.pageChanged = () => {
          getData(vm.currentPage)
        }
        
      }],
      controllerAs: 'vm'
    }
  });
  
  export default app;
  
  
// 指令用法
// 在控制器里定义一个数组，内容为这个表的各个th的名字，下例为fbzpVm.temp
// 然后只需要把这个数组，以及相应的接口传入即可

// <div uc-list
//   data-repeat="item in fbzpVm.temp"
//   data-api="/HRTdjl/List"
// ></div>