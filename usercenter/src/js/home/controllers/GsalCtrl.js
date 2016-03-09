// export default function GsalCtrl($scope,$http,$stateParams,$location) {
//   var vm=this;
//     vm.para = {
//       ccid: $stateParams.ccid
//     }
//     vm.loaddata = function () {
//       //获取Json数据，根据参数设置值
//       $http.post('/CompanyHomeEdit/CaseDetail', vm.para).success( (d)=> {
//         if (d.success) {
//           vm.data = d.result;

//         }
//       });
//     };
//     //加载数据
//     vm.loaddata();
//     var para = $.extend({}, vm.data);
//     function close() {
//       $(".modal_bg").fadeOut();
//       $(".modal_cont").fadeOut();
//     }
//     $(".modal_cont_t_close").click( ()=> {
//       close();
//     });
    // vm.submit = function () {
    //   $http.post('/CompanyHomeEdit/CaseEdit', $.extend({}, vm.data, vm.para)).success(function (data) {
    //     if (data.success) {
    //       $(".modal_cont_button_conf").click(function () {
    //         location.hash = '#/caseslist';
    //       });
    //       vm.popupText = "3秒后自动返回,或点击确认返回";
    //       setTimeout(function () {
    //         location.hash = '#/caseslist';
    //       }, 3000);
    //       $(".modal_bg").fadeIn();
    //       $(".modal_cont").fadeIn();
    //     } else {
    //       $(".modal_cont_button_conf").click(function () {
    //         close();
    //       });
    //       $(".modal_bg").fadeIn();
    //       $(".modal_cont").fadeIn();
    //       vm.popupText = data.msg;
    //     }
    //   })
    // };
//}