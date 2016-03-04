import {
  brand
}from '../../data/data.js'
export default function CfbCtrl($http) {
  let vm = this;
  vm.data = {};
  vm.brand = brand; 
   vm.selectTrans = function (event, transNum) {
    vm.data.transaction = transNum;
    console.log(vm.data.transaction)
    $(event.target).parents('.formSet').find('.formInputSet_radio').css({
      "background-position": "0 0"
    })
    $(event.target).css({
      "background-position": "0 -20px"
    });
  };
  
   // 获取数据
  // $http.post("/Zbfb/Get").success(function (data) {
  //   vm.data.realnameauth = data.result.realnameauth;
  // });
}