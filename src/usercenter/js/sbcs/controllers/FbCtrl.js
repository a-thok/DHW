import $ from 'jquery';
import angular from 'angular';
export default function FbCtrl($http, $scope) {
  var vm = this;
  vm.data = {};
  vm.photos = [{}];
  vm.isRepeat = false;
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

  $http.post('/dict/trademarktype').success((data) => {
    vm.type = data.result;
  });
  vm.area = [
    { code: '01', name: '中国内地' }
  ];
  vm.count = [];
  for (var i = 0; i < 100; i++) {
    vm.count.push(i);
  }
  // 小类的读取
  vm.change = function () {
    for (var i = 0, len = vm.type.length; i < len; i++) {
      if (vm.data.code.id === vm.type[i].id) {
        vm.secType = vm.type[i].types;
      }
    }
  };
  // 小类的选择和删除
  vm.data.type = [];
  vm.typeSelect = function (event, item) {
    var elem = event.target;
    if ($(elem).hasClass('multipleSelect_type-selected')) {
      vm.data.type.forEach((value, index, array) => {
        if ($(elem).text() === value.name) {
          array.splice(index, 1);
        }
      });
      $(elem).removeClass('multipleSelect_type-selected');
    } else {
      $(elem).addClass('multipleSelect_type-selected');
      vm.data.type.push(item);
    }
  };
  // 开始年的计算
  $scope.date = '';
  $scope.$watch('date', (newValue) => {
    if (newValue) {
      $('#date2').removeAttr('disabled');
    }
  });

  // 提交数据
  vm.submit = function () {
  vm.isRepeat = true;
    vm.data.content = [];
    if ($('#tradetype_zr').is(':checked')) {
      vm.data.tradetype = 1;
    }
    if ($('#tradetype_sq').is(':checked')) {
      vm.data.tradetype = 2;
    }
    if ($('#negotiable_yes').is(':checked')) {
      vm.data.negotiable = 1;
    }
    if ($('#negotiable_no').is(':checked')) {
      vm.data.negotiable = 2;
    }
    for (var i = 0, len = vm.photos.length; i < len; i++) {
      if (vm.photos[i].url) {
        vm.data.content.push(vm.photos[i].url + '_947x474.jpg');
      }
    }
    vm.data.pcode = vm.data.code.code;
    vm.data.pcodeName = vm.data.code.name;
    vm.data.content = angular.toJson(vm.data.content);
    vm.data.type = angular.toJson(vm.data.type);
    var para = Object.assign({}, vm.data);
    delete para.code;
    para.img = para.img + '_185x121.jpg';
    $http.post('/Sys/rshop/Trademark/Add', para).success((data) => {
      if (data.success === true) {
        window.location.href = '#/splb/all';
      } else {
        vm.isRepeat = false;
      }
      
    });
  };
}
