
import $ from 'jquery';
export default function addFd() {
  return {
    replace: true,
    scope: true,
    template(elem, attrs) {
      return `<div class="formGourp formGourp--submit clearfix">
        <input class="formBtn formBtn--submit" type="submit" value="保存修改" ng-if="${attrs.vm}.index"
          ng-disabled="${attrs.form}.$invalid"
        >
        <input class="formBtn formBtn--submit" type="submit" value="新增"  ng-if="!${attrs.vm}.index"
          ng-disabled="${attrs.form}.$invalid"
        >
        <input class="formBtn formBtn--submit" type="button" value="取消"  ng-if="${attrs.vm}.index" ng-click="vm.cancelEdit()"
          ng-disabled="${attrs.form}.$invalid"
        >
      </div>`;
    },
    controller: ['$scope', '$http', '$attrs', function Ctrl($scope, $http, $attrs) {
      var vm = this;
      var dataApi;
      var para = {

      };
      var editdata = {

      };
      $scope[$attrs.vm].submit = () => {
        // 得到省市区数据
        var content = $scope[$attrs.vm].draft.basic();
        para = $.extend(vm.data, content);
        // 判断用户是新增还是保存修改操作
        if ($scope[$attrs.vm].index) {
          // 修改功能
          editdata.company = $scope[$attrs.vm].data.company;
          editdata.addr = $scope[$attrs.vm].data.company;
          editdata.phone = $scope[$attrs.vm].data.phone;
          editdata.addrBDMap = $scope[$attrs.vm].data.addrBDMap;
          para.child = editdata;
          para.id = $scope[$attrs.vm].data.id;
          $scope[$attrs.vm].index = undefined;
          dataApi = $attrs.modifyapi;
        } else {
          // 新增功能
          var newdata = $.extend({}, $scope[$attrs.vm].data);
          para.child = newdata;
          // $scope[$attrs.vm].listdata.push(para);
          dataApi = $attrs.addapi;
        }
        $http.post(dataApi, para).success((d) => {
          if (d.success) {
            alert('提交成功');
            $scope.$parent[$attrs.vm].index = 0;
            $scope.$parent[$attrs.vm].data = {};
            $scope.addfdForm.$setPristine(true);
            document.forms[0].reset();
            $http.post($attrs.postapi).success((d) => {
              if (d.success) {
                $scope.$parent[$attrs.vm].listdata = d.result;
              }
            });
          } else {
            alert('提交失败,请检查信息是否填写完整（包括地图坐标信息）');
          }
        });
      };
      // 取消编辑
      vm.cancelEdit = () => {
        $scope.$parent[$attrs.vm].index = 0;
        $scope.$parent[$attrs.vm].data = {};
        $scope.addfdForm.$setPristine(true);
        document.forms[0].reset();
       // $scope.$parent[$attrs.vm].clearEditdata();
      };
    }],
    controllerAs: 'vm'
  };
}
