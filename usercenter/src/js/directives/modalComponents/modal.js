export default function modal() {
  return {
    replace : true,
    template: function (elem, attrs) {
      return `
        <div ng-show="${attrs.show}">
          <div class="modal_mask"></div>
          <div class="modal">
            <div class="modal_header">
            <button class="modal_close" type="button" ng-hide="${attrs.success}" ng-click="${attrs.show}=false">×</button>
            <h4 class="modal_title">系统提示</h4>
          </div>
          <div class="modal_body">
            <p class="modal_body_text modal_body_text--success" ng-show="${attrs.success}">提交成功，系统正在自动转跳...</p>
            <p class="modal_body_text" ng-hide="${attrs.success} && !${attrs.error}">{{${attrs.error}}}</p>
            <p class="modal_body_text" ng-hide="${attrs.success} || !!${attrs.error}">对不起，系统处理您的提交时出现错误，请稍后重试。</p>
          </div>
          <div class="modal_footer">
            <button type="button" class="modal_confirm" ng-hide="${attrs.success}" ng-click="${attrs.show}=false">确认</button>
          </div>
        </div>
      `;
    },
    link: function(scope, elem, attrs){
      let successMsg = elem.find('.modal_body_text--success');
      setTimeout(function() {
        if (!elem.is('.ng-hide') && !successMsg.is('.ng-hide')) {
          location.hash = attrs.url;
        }
      }, 6000)
    }
  };
}
