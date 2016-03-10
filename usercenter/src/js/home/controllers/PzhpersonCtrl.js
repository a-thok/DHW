import {
 homesex,
 education
} from '../../data/data.js'
export default function PzhpersonCtrl($http) {
   var vm = this;
   vm.sex = homesex;
   vm.education = education;
   vm.data = {};
   
   $http.post('/UserAccount/Edit').success( (d) => {
      if (d.success) {
           vm.data = d.result;
          //  if(d.result.sex == 'male') {
          //    vm.data.sex = '男'
          //  }else if(d.result.sex == 'female') {
          //    vm.data.sex = '女'
          //  }
     }
   });
}