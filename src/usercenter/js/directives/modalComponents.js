import angular from 'angular';
import modal from './modalComponents/modal.js';
import commentmodal from './modalComponents/commentmodal.js';
import replaymodal from './modalComponents/replaymodal.js';
import fjmodal from './modalComponents/fjmodal.js';
import myjmodal from './modalComponents/myjmodal.js';
let app = angular.module('modalComponents', []);
app
   .directive('modal', modal)
   .directive('commentmodal', commentmodal)
   .directive('replaymodal', replaymodal)
   .directive('fjmodal', fjmodal)
   .directive('myjmodal', myjmodal);
export default app;
