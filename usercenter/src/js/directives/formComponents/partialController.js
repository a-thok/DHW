export default function partialController($scope, $attrs, vm) {
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