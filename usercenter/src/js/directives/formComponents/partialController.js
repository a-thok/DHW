export default function partialController($scope,$attrs,$http,$stateParams,vm ){
  vm.isPlain = $scope.$eval($attrs.switch);

  vm.edit = (model, anotherModel) => {
    vm.tempValue = model;
    if (anotherModel) {
      vm.anotherTempValue = anotherModel;
    }
    vm.isPlain = false;
  };

  vm.save = () => {
    vm.isPlain = true;
    let isdata = $scope.$parent[$attrs.vm].data;
    let isid = $stateParams.id;
    //console.log($scope.$parent[$attrs.vm]);
    console.log(isdata);
    console.log(isid);
    //这里是提交数据
    $http.post($attrs.editapi,Object.assign({}, { id : isid },isdata)).success((d) => {
      console.log(d);
    })
  };

  vm.cancle = () => {
    if (vm.anotherTempValue) {
      $scope.$parent[$attrs.vm].data[$attrs.first] = vm.tempValue;
      $scope.$parent[$attrs.vm].data[$attrs.second] = vm.anotherTempValue;
    } else {
      $scope.$parent[$attrs.vm].data[$attrs.name] = vm.tempValue;
    }
    vm.isPlain = true;
  };
}