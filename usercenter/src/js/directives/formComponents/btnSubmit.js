export default function btnSubmit() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
        <div class="formGourp formGourp--submit clearfix">
          <input class="formBtn formBtn--submit" type="submit" value="{{vm.submitText}}"
            ng-disabled="${attrs.form}.$invalid || vm.isDisabled"
          >
        </div>
      `
    },
    controller: ['$scope', '$http', '$attrs', function ($scope, $http, $attrs) {
      let vm = this;
      vm.submitText = '提交';
      vm.isDisabled = false;
      
      function fail() {
        $scope[$attrs.vm].isSubmitSuccess = false;
        vm.submitText = '提交';
        vm.isDisabled = false;
      }
      
      $scope[$attrs.vm].showModal = false;
      $scope[$attrs.vm].submit = () => {
        vm.submitText = '提交中';
        vm.isDisabled = true;

        $http.post($attrs.api, $scope[$attrs.vm].data).success(res => {
          if (res.successs) {
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