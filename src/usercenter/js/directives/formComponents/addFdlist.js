import angular from 'angular';
// 分店列表;
export default function addFdlist() {
  return {
    scope: true,
    replace: true,
    template(elem, attrs) {
      return `<table class="accountInfoTable">
        <thead>
          <tr>
            <td ng-repeat="title in ${attrs.vm}.listTitle">{{title.name}}</td>
            <td ng-if="${attrs.operate}" style="width:10%">操作</td>
          <tr>
        </thead>
        <tbody>
          <tr ng-repeat="item in ${attrs.vm}.listdata">
            <td ng-repeat="box in ${attrs.vm}.listTitle">
              <span ng-if="vm.isArray(box.key)">{{item[box.key[0].zikey]}}至{{item[box.key[1].zikey]}}</span>
              <span ng-if="!vm.isArray(box.key)">{{item[box.key]}}</span>
            </td>
            <td>
              <span ng-if="${attrs.operate}" ng-click="vm.del(item.id,$index)" style="cursor:pointer">删除 | </span>
              <span ng-if="${attrs.operate}" ng-click="vm.edit($index)" style="cursor:pointer">修改</span>
            </td>
          </tr>
        </tbody>
      </table>`;
    },
    controller: ['$scope', '$http', '$attrs', function Ctrl($scope, $http, $attrs) {
      var vm = this;
      // 首次加载列表数据
      $http.post($attrs.postapi).success((d) => {
        if (d.success) {
          $scope.$parent[$attrs.vm].listdata = d.result;
        }
      });
      // 删除操作
      vm.del = (id, index) => {
        $http.post($attrs.delapi, { id }).success((d) => {
          if (d.success) {
            alert('删除成功');
            $scope.$parent[$attrs.vm].listdata.splice(index, 1);
          }
        });
      };
      // 编辑读取数据--列表中提取
      vm.edit = (index) => {
        $scope.$parent[$attrs.vm].index = index + 1;
        Object.assign($scope.$parent[$attrs.vm].data, $scope.$parent[$attrs.vm].listdata[index]);
        $scope.$parent[$attrs.vm].getEditdata($scope.$parent[$attrs.vm].data.area);
      };
      // 判断是否为数组
      vm.isArray = angular.isArray;
    }],
    controllerAs: 'vm',
  };
}
