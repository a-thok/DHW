//信息提示弹窗
import $ from 'jquery';

export default function poPup() {
  return {
    replace : true,
    scope :  true,
    template: function (elem, attrs) {
      return `
      <div>
           <div class="modal_bg"></div>
               <div class="modal_cont model_pos">
                <div class="modal_cont_t">
                  <h1>确认提示</h1><span class="modal_cont_t_close">×</span>
                 </div>
                 <p class="modal_cont_text">${attrs.message}</p>
              <div class="modal_cont_button">
              <button type="button" class="modal_cont_button_conf">确认</button>
             </div>
       </div>
        `
    },
    link: function(scope, elem, attrs, transulte){
       if (attrs.success) {
         $(".modal_cont_button_conf").click( () => {
           location.href = attrs.url ;
         });
          setTimeout(function () {
            location.href = attrs.url;
          }, 3000);
          $(".modal_bg").fadeIn();
          $(".modal_cont").fadeIn();
        } else {
          $(".modal_cont_button_conf").click(() => {
            $(".modal_bg").fadeOut();
            $(".modal_cont").fadeOut();
          });
          $(".modal_bg").fadeIn();
          $(".modal_cont").fadeIn();

        }
    },
    controllerAs : 'vm'
  }
}
/*
庄狄泽
简单调用说明
data-success : 判断是否提交成功
data-url : 成功之后跳转的地址
data-message : 返回的提示信息
<div po-pup
     data-success="vm.message"
     data-url="/fbzb"
     data-message="失败！！"
></div>

 */