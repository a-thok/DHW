import {
  brand
}from '../../data/data.js'
export default function CyfbDetailCtrl($http,$stateParams) {
  var vm = this;
  vm.brand = brand;
  vm.data = {}
  let id = $stateParams.id;
  $http.post('/CysjFb/Detail',{id:id}).success((d) => {
    vm.data = d.result
  })
}