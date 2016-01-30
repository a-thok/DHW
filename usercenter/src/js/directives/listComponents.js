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
  });
  
  export default app;