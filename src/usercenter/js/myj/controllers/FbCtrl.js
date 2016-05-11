export default function FbCtrl($http) {
  var vm = this;
  vm.data = {};
  vm.photos = [{}];
  vm.data.images = [];
  vm.data.content = [];
  $http.post('/Sys/o2o/Product/type').success((data) => {
    vm.type = data.result;
  })
  vm.submit = function () {
    vm.data.images.push(vm.data.img1)
    if (vm.data.img2) {
      vm.data.images.push(vm.data.img2)
    }
    if (vm.data.img3) {
      vm.data.images.push(vm.data.img3)
    }
    if (vm.data.img4) {
      vm.data.images.push(vm.data.img3)
    }
    for (var i = 0, len = vm.photos.length; i < len; i++) {
      if (vm.photos[i].url) {
        vm.data.content.push(vm.photos[i].url + '_960x960.jpg');
      }
    }
    delete vm.data.img1, vm.data.img2, vm.data.img3, vm.data.img4;
    var para = Object.assign({}, vm.data);
    para.imagesize = '60x60_400x400';
    $http.post('/Sys/o2o/Product/add', para).success((data) => {
      if (data.success === true) {
        console.log(1);
      } else {
        alert(data.msg)
      }
    })
  }
}
