import {
  jobCategory,
  salary,
  exprience,
} from '../../../data/data.js'
export default function EditCtrl($http,$stateParams) {
   var vm = this;
   vm.jobCategory = jobCategory;
   vm.salary = salary;
   vm.exprience = exprience;
   vm.data = {};
   let id = $stateParams.id;
   
   $http.post('/HRZpcx/Detail', { id: id }).success( (d) => {
      if (d.success) {
           vm.data = d.result;
     }
   });
}