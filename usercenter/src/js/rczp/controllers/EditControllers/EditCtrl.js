import {
  jobCategory,
  salary,
  exprience,
  education
} from '../../../data/data.js'
export default function EditCtrl($http, $stateParams, $location) {
   var vm = this;
   vm.statemc = $location.search().statemc;
   
   vm.jobCategory = jobCategory;
   vm.salary = salary;
   vm.exprience = exprience;
   vm.education = education
   vm.data = {};
   let id = $stateParams.id;
   
   $http.post('/HRZpcx/Detail', { id: id }).success( (d) => {
      if (d.success) {
           vm.data = d.result;
     }
   });
}