import {
  jobCategory,
  salary,
  exprience,
  education
} from '../../data/data.js';

export default function FbzpCrtl($http) {
  var vm = this;
  vm.data = {};
  vm.draft = {};
  vm.jobCategory = jobCategory;
  vm.salary = salary;
  vm.exprience = exprience;
  vm.education = education;
  vm.getDraft = function(fn){
    $http.post('/HRZpxxFb/GetArea').success(function(d){
       fn(d.result[0].area);
    })
  }
 var content = vm.draft.basic
 console.log(content)
}
