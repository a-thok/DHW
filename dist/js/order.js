!function(e){function d(a){if(t[a])return t[a].exports;var i=t[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,d),i.loaded=!0,i.exports}var t={};return d.m=e,d.c=t,d.p="//cdn.dreamhiway.com/static/",d(0)}({0:function(e,d,t){e.exports=t(94)},94:function(e,d){"use strict";function t(e){var d=$("#province").val(),t=$("#province").attr("data-code"),o=$("#city").val(),c=$("#city").attr("data-code"),n=$("#county").val(),r=$("#county").attr("data-code"),s=$("#address").val(),l=$("#code").val(),m=$("#name").val(),u=$("#mobile").val(),v=$("#quhao").val(),f=$("#phone").val(),_=$("#fenji").val(),h=v+f+_;if($("#default").is(":checked"))var p=!0;else p=!1;var y={province:{name:d,code:t},city:{name:o,code:c},district:{name:n,code:r}};i.model.name=m,i.model.code=l,i.model.address=s,i.model.mobile=u,i.model.tel=h,i.model.area=y,i.model.isDefault=p,$.ajax({url:e,type:"POST",contentType:"application/json",data:JSON.stringify(i),success:function(){$(".model").hide(),$(".model_bg").hide(),$.post("/useraddr/list").success(function(e){a=e.result;var d=template("addressTem",e);$(".address_tem").html(d)})}})}$(".model_cancel").click(function(){$(".orderFinish_model").hide(),$(".orderFinish_model_bg").hide()}),$(".model_cancel").click(function(){$(".model").hide(),$(".model_bg").hide()});var a=[],i={model:{}},o=1;$.post("/useraddr/list").success(function(e){a=e.result;var d=template("addressTem",e);$(".address_tem").html(d),$(".address_tem").on("click","#modify",function(){var e=$(this).attr("data-id");i.model.id=e,$(".newaddrForm_btn").removeClass("addNewAddr").addClass("addrModify");for(var e=parseInt($(this).attr("data-id")),d=0,t=a.length;t>d;d++)if(e===a[d].id){if($("#province").val(a[d].province_name),$("#city").val(a[d].city_name),$("#county").val(a[d].district_name),$("#province").attr("data-code",a[d].province_code),$("#city").attr("data-code",a[d].city_code),$("#county").attr("data-code",a[d].district_code),$("#address").val(a[d].address),$("#code").val(a[d].code),$("#name").val(a[d].name),$("#mobile").val(a[d].mobile),a[d].tel){var o=a[d].tel.split("-");$("#quhao").val(o[0]),$("#phone").val(o[1]),$("#fenji").val(o[2])}a[d].isDefault===!0&&$("#default").attr("checked","checked")}})}),$(".invoice").click(function(){var e=$(this).index();$(".invoice i").removeClass("selected_icon").eq(e).addClass("selected_icon"),$(".notNeed_invo").hasClass("selected_icon")&&$(".invoiceInput").attr("disabled","disabled"),$(".need_invo").hasClass("selected_icon")&&$(".invoiceInput").removeAttr("disabled")}),$(".address_tem").on("mouseover",".areaSelect",function(){$(this).addClass("selected_addr")}),$(".address_tem").on("mouseout",".areaSelect",function(){return $(this).hasClass("confirm")?!1:void $(this).removeClass("selected_addr")}),$(".address_tem").on("click",".areaSelect",function(){var e=$(this).index();$(".areaSelect").removeClass("confirm selected_addr").eq(e).addClass("confirm selected_addr")});var c=[],n=[];$.getJSON(dhw.urlmain+"/Dict/city2?callback=?",function(e){for(var d=e.result,t=0,a=d.length;a>t;t++){var i=d[t].name,o=d[t].code,r='<li data-code="'+o+'">'+i+"</li>";$(".addr_province").append(r)}$(".addr_province li").click(function(){c=[],$(".addr_city").empty();var e=$(this).html();$("#province").val(e);for(var t=0,a=d.length;a>t;t++)e===d[t].name&&(c=d[t].citys);for(var t=0,i=c.length;i>t;t++){var o=c[t].name,n=c[t].code,r='<li data-code="'+n+'">'+o+"</li>";$(".addr_city").append(r)}$(".addr_province").hide(),$(".addr_city").show(),$("#province").attr("data-code",$(this).attr("data-code"))}),$(".addr_city").on("click","li",function(){n=[],$(".addr_county").empty();var e=$(this).html();$("#city").val(e);for(var d=0,t=c.length;t>d;d++)e===c[d].name&&(n=c[d].districts);for(var d=0,a=n.length;a>d;d++){var i=n[d].name,o=n[d].code,r='<li data-code="'+o+'">'+i+"</li>";$(".addr_county").append(r)}$(".addr_city").hide(),$(".addr_county").show(),$("#city").attr("data-code",$(this).attr("data-code"))}),$(".addr_county").on("click","li",function(){var e=$(this).html();$("#county").val(e),$(".addr_county").hide(),$("#county").attr("data-code",$(this).attr("data-code"))}),$("#province").click(function(){$(".addr_province").show(),$("#city").val(""),$("#county").val("")}),$("#city").click(function(){$(".addr_city").show()}),$("#county").click(function(){$(".addr_county").show()})}),$(".address_tem").on("click","#modify",function(){$(".model_bg").show(),$(".model").show()}),$(".orderfill_cont").on("click",".newAddr",function(){$(".model_bg").show(),$(".model").show(),document.getElementById("addrForm").reset()}),$(".address_tem").on("click","#delete",function(){var e=confirm("是否确定删除?");if(e){var d=$(this).siblings("#modify").attr("data-id");$.post("/useraddr/del",{id:d}).success(function(){$.post("/useraddr/list").success(function(e){a=e.result;var d=template("addressTem",e);$(".address_tem").html(d)})})}}),$(".address_tem").on("click",".operate_items_grey",function(){var e=$(this).siblings("#modify").attr("data-id");$.post("/useraddr/setdefault",{id:e}).success(function(){})}),$(".orderfill_cont").on("click",".newAddr",function(){$(".newaddrForm_btn").removeClass("addrModify").addClass("addNewAddr")}),$(".model_cont").on("click",".addrModify",function(){t("/useraddr/edit")}),$(".model_cont").on("click",".addNewAddr",function(){t("/useraddr/add")}),$(".nextBtn_btn").click(function(){var e,d=$(".confirm"),t=d.find(".orderfill_name").html(),a=d.find(".orderfill_phone").html(),i=d.find(".orderfill_addr").text(),c=d.find(".district_name").attr("data-code"),n=$(".invoiceInput").val(),r=$(".invoiceInput_long").val();$(".need_invo").hasClass("selected_icon")&&(e=!0),$(".notNeed_invo").hasClass("selected_icon")&&(n=null,e=!1);var s={model:{receiveName:t,receivePhone:a,receiveAddress:i,districtCode:c,remark:r,ttid:o}};$.ajax({url:"/sys/rshop/OrderBuyer/Add",type:"POST",contentType:"application/json",data:JSON.stringify(s),success:function(e){var d=e.result.id;$.post("/order/rshop1/add",{projectID:d}).success(function(e){var d=e.result.number;window.location.href="/pay2/"+d})}})}),$(".model_cancel").click(function(){$(".model").hide(),$(".model_bg").hide()}),$(".model_cancel").click(function(){$(".orderFinish_model").hide(),$(".orderFinish_model_bg").hide()})}});
//# sourceMappingURL=order.js.map