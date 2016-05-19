export default function DetailCtrl($http, $stateParams) {
  var vm = this;
  var id = $stateParams.id;
  vm.data = {};
  vm.photos = [];
  vm.secType;
  $http.post('/Sys/o2o/Product/type').success((data) => {
    vm.type = data.result;
  })
  $http.post('/Sys/o2o/Product/get', { id: id }).success((data) => {
    vm.data = data.result;
    vm.data.img1 = data.result.images[0];
    vm.data.img2 = data.result.images[1];
    vm.data.img3 = data.result.images[2];
    vm.data.img4 = data.result.images[3];
    vm.data.firType = data.result.type.substring(0, 2)
    for (var i = 0, len = vm.type.length; i < len; i++) {
      if (vm.data.firType === vm.type[i].id) {
        vm.secType = vm.type[i].items;
      }
    }
    if (data.result.content) {
      for (var i = 0, len = data.result.content.length; i < len; i++) {
        vm.photos.push({});
        vm.photos[i].url = data.result.content[i];
      }
    }
    if (data.result.state === 0 || data.result.state === 1 || data.result.state === 9) {
      vm.isDisabled = false;
    } else {
      vm.isDisabled = true;
    }
  })
  vm.proOff = () => {
    var conf = confirm('确定要下架吗？');
    if (conf === true) {
    $http.post('/Sys/o2o/Product/UnShelve', {id: id}).success((data) => {
      alert('下架成功！');
      location.href = '#/yfb/yxj'
    })
    }
  }

  vm.addphoto = function () {
    if (vm.photos.length < 5) {
      vm.photos.push({});
    } else {
      alert('最多只能上传5张图片！');
    }
  };

  vm.delphoto = function (index) {
    vm.photos.splice(index, 1);
  };
  $http.post('/Sys/o2o/Product/type').success((data) => {
    vm.type = data.result;
  })
  vm.change = function () {
    for (var i = 0, len = vm.type.length; i < len; i ++) {
      if (vm.data.firType === vm.type[i].id) {
        vm.secType = vm.type[i].items;
      }
    }
  }
  vm.submit = function () {
    vm.isDisabled = true;
    vm.data.images = [];
    vm.data.content = [];
    vm.data.images.push(vm.data.img1)
    if (vm.data.img2) {
      vm.data.images.push(vm.data.img2)
    }
    if (vm.data.img3) {
      vm.data.images.push(vm.data.img3)
    }
    if (vm.data.img4) {
      vm.data.images.push(vm.data.img4)
    }
    for (var i = 0, len = vm.photos.length; i < len; i++) {
      if (vm.photos[i].url) {
        vm.data.content.push(vm.photos[i].url + '_960x960.jpg');
      }
    }
    var para = Object.assign({}, vm.data);
    delete para.img1, para.img2, para.img3, para.img4, para.firType;
    para.imagesize = '400x400';
    $http.post('/Sys/o2o/Product/edit', para).success((data) => {
      if (data.success === true) {
        location.href = '#/yfb/all'
      } else {
        alert(data.msg)
      }
    })
  }
}