export default function fjmodal() {
  return {
    scope: true,
    replace: true,
    template: function(elem, attrs) {
      return `
       <form>
         <div class="comment_modal" ng-style="${attrs.vm}.style">
           <div class="comment_bg"></div>
           <div class="comment_area" style="height:280px;margin-top:-140px">
             <div class="comment_title clearfix">
               <span class="comment_close" style="cursor:pointer" ng-click="${attrs.vm}.${attrs.close}"></span>
             </div>
             <div class="comment_operate">
               <div file-uploader
                    data-vm="${attrs.vm}"
                    data-label="上传附件"
                    data-name="fjname"
                    data-pathname="fj"
                    data-required="false"
                    data-keyname="zb"
               ></div>
               <div class="formGourp formGourp--submit clearfix">
                 <button class="formBtn formBtn--submit" type="button" ng-click="${attrs.vm}.${attrs.commitfj}">提交</button>
               </div>
             </div>
           </div>
         </div>
       </form>
      `;
    },
    
  };
}
