expport default function (edit) {
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
    var para = Object.assign({}, vm.data);
    para.props.forEach((prop, i) => {
      prop.lev = i;
      prop.propEnum.forEach((item, _i) => {
        item.index = _i;
      });
    });
    delete para.img1, para.img2, para.img3, para.img4, para.firType;
    para.imagesize = '400x400';

    if (edit) m.data.sellprov = [];
    const selectedItems = vm.getSelectedItems();
    selectedItems.forEach((item) => {
      vm.data.sellprov.push(item.code);
    });
 
    $http.post('/Sys/o2o/Product/edit', para).success((data) => {
      if (data.success === true) {
        location.href = '#/yfb/all';
      } else {
        alert(data.msg);
      }
    });
  };