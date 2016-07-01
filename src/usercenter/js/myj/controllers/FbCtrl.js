import $ from 'jquery';
export default function FbCtrl($http) {
  var vm = this;
  vm.selectedItems = {};
  vm.data = {
    // props: [{ lev: 0, name: '规格1', propEnum: [{ index: 0 }] }],
    props: [],
    sku: [],
    sellprov: []
  };
  // 判断是否需要库存 必填
  vm.needkc = false;
  // vm.secType;
  vm.photos = [{}];
  vm.isDisabled = false;
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
  });
  vm.change = function () {
    for (var i = 0, len = vm.type.length; i < len; i++) {
      if (vm.data.firType === vm.type[i].id) {
        vm.secType = vm.type[i].items;
      }
    }
  };
  vm.submit = function () {
    vm.isDisabled = true;
    vm.data.images = [];
    vm.data.content = [];
    vm.data.images.push(vm.data.img1);
    if (vm.data.img2) {
      vm.data.images.push(vm.data.img2);
    }
    if (vm.data.img3) {
      vm.data.images.push(vm.data.img3);
    }
    if (vm.data.img4) {
      vm.data.images.push(vm.data.img4);
    }
    for (var i = 0, len = vm.photos.length; i < len; i++) {
      if (vm.photos[i].url) {
        vm.data.content.push(vm.photos[i].url + '_960x960.jpg');
      }
    }

    const selectedItems = vm.getSelectedItems();
    selectedItems.forEach((item) => {
      vm.data.sellprov.push(item.code);
    });

    var para = Object.assign({}, vm.data);
    if (para.props.length === 0) {
      vm.needkc = true;
    } else {
      vm.needkc = false;
    }
    para.props.forEach((prop, i) => {
      prop.lev = i;
      prop.propEnum.forEach((item, _i) => {
        item.index = _i;
      });
    });
    delete para.img1, para.img2, para.img3, para.img4, para.firType;
    para.imagesize = '400x400';
    $http.post('/Sys/o2o/Product/add', para).success((data) => {
      if (data.success === true) {
        alert('提交成功');
        location.href = '#/yfb/all';
      } else {
        vm.isDisabled = false;
        alert(data.msg);
      }
    });
  };
}
