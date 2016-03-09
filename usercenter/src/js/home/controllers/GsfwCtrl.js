// export default function GsfwCtrl($scope,$http,$stateParams,$location) {
//   var vm=this;
//     vm.data = {};
//     vm.typeids = [
//       { id: 1, text: '设计' },
//       { id: 2, text: '开发' },
//       { id: 3, text: '文案' },
//       { id: 4, text: '装修' },
//       { id: 5, text: '营销' },
//       { id: 6, text: '商务' },
//       { id: 7, text: '生活' },
//       { id: 8, text: '其他' }
//     ]
//     console.log(vm.typeids[0].text)
//     var ddid = $('.wdgz_main_cont_cz').attr('data-ddid')
//     var id = $stateParams.id;
//     $http.post('/CompanyHomeEdit/ServiceDetail', { id: id, ddid: ddid }).success( (data)=> {
//       vm.data = data.result
//     })
//     vm.submit = function () {
//       var para = $.extend({}, vm.data);
//       function close() {
//         $(".modal_bg").fadeOut();
//         $(".modal_cont").fadeOut();
//       }
//       $(".modal_cont_t_close").click( ()=> {
//         close();
//       });
//       var para = $.extend({}, vm.data);
//       $http.post('/CompanyHomeEdit/ServiceEdit', para).success( (data)=> {
//         if (data.success) {
//           $(".modal_cont_button_conf").click( ()=> {
//             location.hash = '#/serversList';
//           });
//           vm.popupText = "3秒后自动返回,或点击确认返回";
//           setTimeout( ()=> {
//             location.hash = '#/serversList';
//           }, 3000);
//           $(".modal_bg").fadeIn();
//           $(".modal_cont").fadeIn();
//         } else {
//           $(".modal_cont_button_conf").click(()=> {
//             close();
//           });
//           $(".modal_bg").fadeIn();
//           $(".modal_cont").fadeIn();
//           vm.popupText = data.msg;
//         }
//       })
//     }
// }