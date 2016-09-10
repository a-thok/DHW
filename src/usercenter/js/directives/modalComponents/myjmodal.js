export default function myjmodal() {
  return {
    scope: true,
    replace: true,
    template(elem, attrs) {
      return `
      <div ng-show=${attrs.vm}.visible>
        <div class="comment_bg"></div>
        <div style="
        position:absolute;
        top:50%;
        left:50%;
        width:900px;
        height:300px;
        padding: 20px 0px;
        margin-left:-450px;
        margin-top:-150px;
        border:1px solid #ccc;
        background-color:#fff;
        z-index:105">
          <span class="box_close" ng-click="${attrs.vm}.close()"></span>
          <form name="myjmodal">
           <div read-only
              data-form="myjmodal"
              data-vm="${attrs.vm}"
              data-label="订单号"
              data-name="number"
              data-required="true"
              data-switch="false"
            ></div>
            <div select-simple
              data-form="myjmodal"
              data-vm="${attrs.vm}"
              data-label="物流选择"
              data-name="shippercode"
              data-required="true"
              data-switch="false"
              data-options="item.id as item.name for item in ${attrs.codings}"
              ></div>
            <div input-text
              data-form="myjmodal"
              data-vm="${attrs.vm}"
              data-label="订单编号"
              data-name="logisticcode"
              data-required="true"
              data-switch="false"
              data-tip='请填写订单编号'
              data-pattern="/^[0-9]{1,50}$/"
              data-error="订单编号长度必须在1-50个数字之间"
            ></div>
            <div input-text
              data-form="myjmodal"
              data-vm="${attrs.vm}"
              data-label="卖家备注"
              data-name="sellernote"
              data-required="true"
              data-switch="false"
              data-tip='请填写卖家备注'
              data-pattern=""
              data-error="卖家备注长度必须在1-50个数字之间"
            ></div>
            <div class="formSet clearfix">
            <div class="formSetWrap">
              <button class="formBtn formBtn--submit" type="button" ng-disabled="myjmodal.$invalid || ${attrs.vm}.isDisabled" ng-click="${attrs.vm}.submit()">提交</button>
            </div>
            </div>
          </form>
        </div>
       </div> 
      `;
    }
  };
}
