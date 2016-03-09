// // 公司信息控制器
// import {
//   companynum,
//   companytrade,
//   companynature
// } from '../../../data/data.js'
// export default function CompanyCtrl($http){
//   var vm = this;
//   vm.companynum = companynum;
//   vm.companytrade = companytrade;
//   vm.companynature = companynature;
//   vm.data = {};
//   $http.post('/UserAccount/Company').success((d) => {
//     if(d.success) {
//       vm.data = d.result; 
//     }
//   })
  
// }