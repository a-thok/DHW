import angular from 'angular';
import modal from './modalComponents/modal.js';

let app = angular.module('modalComponents', []);
app
   .directive('modal', modal);
export default app;
