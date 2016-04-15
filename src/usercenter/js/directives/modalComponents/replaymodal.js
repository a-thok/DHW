export default function replaymodal() {
  return {
    scope: true,
    replace: true,
    template: function (elem, attrs) {
      return `
      <div>
       <form name="commentForm">
        <div class="replay_box" ng-style="style">
          <div class="replay_content">
            <span class="box_close" ng-click="vm.close()"></span>
            <div class="replay_area">
              <textarea name="" id="" cols="30" rows="10" ng-model="${attrs.vm}.data.${attrs.name}" required></textarea>
              <span class="replay_num">500字</span>
              <div class="form-footer clearfix">
                <button type="button" class="confirm_btn formBtn--submit" ng-click="vm.submit()" ng-disabled="commentForm.$invalid">确认</button>
              </div>
            </div>
            <span class="replay-arrow1"></span>
            <span class="replay-arrow2"></span>
          </div>
        </div>
       </form>
       </div>
      `;
    },
    controller: ['$http', '$attrs', '$scope', function ($http, $attrs, $scope) {
      var vm = this;
      vm.submit = () => {
        var para = $scope.$parent[$attrs.vm].data;
        $http.post($attrs.replayapi, para).success((d) => {
          if (d.success) {
            alert('提交成功');
            location.reload();
          } else {
            alert('提交失败');
            location.reload();
          }
        });
      };
      vm.close = function () {
        $scope.$parent.style.top = '-9999px';
        $scope.$parent.style.left = '-9999px';
      };
    }],
    controllerAs: 'vm'
  };
}
