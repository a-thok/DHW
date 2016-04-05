export default function modal() {
  return {
    replace: true,
    template: function (elem, attrs) {
      return `
        <div class="modalWrapper">
          <div class="modal_mask" ng-if="${attrs.vm}.showModal"></div>
          <div class="modal" ng-if="${attrs.vm}.showModal">
            <div class="modal_header">
            <button class="modal_close" type="button" ng-show="${attrs.vm}.isSubmitSuccess" ng-click="vm.hideModal()">×</button>
            <h4 class="modal_title">系统提示</h4>
          </div>
          <div class="modal_body">
            <p class="modal_body_text modal_body_text--success" ng-show="${attrs.vm}.isSubmitSuccess">提交成功...</p>
            <p class="modal_body_text" ng-show="!${attrs.vm}.isSubmitSuccess && ${attrs.vm}.errorMsg">{{${attrs.vm}.errorMsg}}</p>
            <p class="modal_body_text" ng-show="!${attrs.vm}.isSubmitSuccess && !${attrs.vm}.errorMsg">对不起，系统处理您的提交时出现错误，请稍后重试。</p>
          </div>
          <div class="modal_footer">
            <button type="button" class="modal_confirm"  ng-click="vm.hideModal()">确认</button>
          </div>
        </div>
      `;
    },
    controller: ['$scope', '$attrs', '$location', '$timeout', function ($scope, $attrs, $location, $timeout) {
      let vm = this;
      vm.hideModal = () => {$scope[$attrs.vm].showModal = false; };
      
      $scope.$watch($attrs.vm + '.isSubmitSuccess', (newValue) => {
        if (newValue) {
          $timeout(() => $location.path($attrs.url), 3000);
        }
      });
    }],
    controllerAs: 'vm'
  };
}
