import {
  jobCategory,
  salary,
  exprience,
  education,
  getTrade,
  pagination
} from '../../data/data.js';

export default function FbzpCrtl($http) {
  var vm = this;
  
  vm.jobCategory = jobCategory;
  vm.salary = salary;
  vm.exprience = exprience;
  vm.education = education;

  getTrade($http, (res) => 
    vm.trade = res.result
  );
  
  this.submit = () => {
    $http.post('/SrdzFb/srfb', vm.data);
  };
}
