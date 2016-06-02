// 个人中心基本信息教育经历--工作经历提交指令\
import $ from 'jquery';
export default function homebtnSubmit() {
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
      </div>`;
    },
    controller: ['$scope', '$http', '$attrs', function Ctrl($scope, $http, $attrs) {
      var vm = this;
      function fail() {
        $scope[$attrs.vm].isSubmitSuccess = false;
      }
      var dataApi;
      $scope[$attrs.vm].showModal = false;
      $scope[$attrs.vm].submit = () => {
        vm.isDisabled = true;
        var begindata = $scope[$attrs.vm].startyear + '-' + $scope[$attrs.vm].startmonth;
        var enddata = $scope[$attrs.vm].endyear + '-' + $scope[$attrs.vm].endmonth;
        $scope[$attrs.vm].data.begindate = begindata;
        $scope[$attrs.vm].data.enddate = enddata;
        var para = $.extend({}, $scope[$attrs.vm].data);
        if ($scope[$attrs.vm].index) {
          // 修改功能
          $scope[$attrs.vm].listdata[$scope[$attrs.vm].index] = para;
          $scope[$attrs.vm].index = undefined;
          dataApi = $attrs.modifyapi;
        } else {
          // 新增功能
          $scope[$attrs.vm].listdata.push(para);
          dataApi = $attrs.addapi;
        }
        $http.post(dataApi,
          para
          ).success(res => {
            if (res.success) {
              $scope[$attrs.vm].isSubmitSuccess = true;
            } else {
              $scope[$attrs.vm].errorMsg = res.msg;
              fail();
            }
            $scope[$attrs.vm].showModal = true;
          }).error(() => {
            fail();
            $scope[$attrs.vm].showModal = true;
          });
      };
    }],
    controllerAs: 'vm'
  };
}
