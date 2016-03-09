// // 个人信息的控制器
// import {
//  sex,
//  education
// } from '../../../data/data.js'
// export default function PersonCtrl($http) {
//    var vm = this;
//    vm.sex = sex;
//    vm.education = education;
//    vm.data = {};
   
//    $http.post('/UserAccount/Detail').success( (d) => {
//       if (d.success) {
//            vm.data = d.result;
//      }
//    });
// }