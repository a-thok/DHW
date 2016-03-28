import {
 homesex,
 education
} from '../../../data/data.js';
export default function PzhpersonCtrl($http) {
  var vm = this;
  vm.sex = homesex;
  vm.education = education;
  vm.data = {};

  $http.post('/UserAccount/Detail').success((d) => {
    if (d.success) {
      vm.data = d.result;
    }
  });
  $http.post('/LoginService/Certify').success((d) => {
    console.log(d);
  });
}
