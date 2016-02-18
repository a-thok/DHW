import {
  jobCategory,
  salary,
  exprience,
  education
} from '../../data/data.js';

export default function FbzpCrtl($http) {
  var vm = this;
  
  vm.jobCategory = jobCategory;
  vm.salary = salary;
  vm.exprience = exprience;
  vm.education = education;
}
