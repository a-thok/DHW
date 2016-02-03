import angular from 'angular';
import poPup   from './popComponents/popup.js';

let app = angular.module('popComponents', []);
app
   .directive('poPup',poPup);   //表单信息提示弹出框 
 
 
export default app;   