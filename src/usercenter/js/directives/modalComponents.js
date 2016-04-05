import angular from 'angular';
import modal from './modalComponents/modal.js';
import commentmodal from './modalComponents/commentmodal.js';
import replaymodal from './modalComponents/replaymodal.js';
let app = angular.module('modalComponents', []);
app
   .directive('modal', modal)
   .directive('commentmodal', commentmodal)
   .directive('replaymodal', replaymodal);
export default app;
