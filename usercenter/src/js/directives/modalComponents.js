import angular from 'angular';
import modal from './modalComponents/modal.js';

let app = angular.module('modalComponents', []);
app
   .directive('modal',modal);   //表单信息提示弹出框 
 
 
export default app;

// 庄狄泽
// 简单调用说明
// data-show : 是否此提示框
// data-success : 判断是否提交成功
// data-url : 成功之后跳转的地址
// data-error : 后台返回的错误信息
// <div modal
//      data-show="fbzpVm.showModal"
//      data-error="fbzpVm.errorMsg"
//      data-success="fbzpVm.isSubmitSuccess"
//      data-url="/zplb"
// ></div>

// 控制器里这样写

// vm.showModal = false;

// this.submit = () => {
//   $http.post('/SrdzFb/srfb', vm.data).success(res => {
//     if (res.successs) {
//       vm.isSubmitSuccess = true;
//     } else {
//       vm.isSubmitSuccess = false;
//       vm.errorMsg = res.msg;
//     }
//     vm.showModal = true;
//   }).error(() => {
//     vm.isSubmitSuccess = false;
//     vm.showModal = true;
//   });
// };