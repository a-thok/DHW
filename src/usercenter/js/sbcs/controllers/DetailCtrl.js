export default function DetailCtrl($scope, $http, $stateParams) {
  var vm = this;
  vm.data = {};
  vm.photos = [];
  var id = $stateParams.id;
  $http.post('/dict/trademarktype').success(function(data) {
    vm.type = data.result;
  })
  $http.post('/Sys/rshop/Trademark/Get', { id: id }).success((data) => {
    vm.data = data.result;
    for (var i = 0, len = JSON.parse(data.result.content).length; i < len; i++) {
      vm.photos.push({})
      vm.photos[i].url = data.result.content[i];
      if (vm.data.tradetype === 1) {
        $('#tradetype_zr').attr('checked', 'checked')
      }
      if (vm.data.tradetype === 2) {
        $('#tradetype_sq').attr('checked', 'checked')
      }
      if (vm.data.negotiable === 1) {
        $('#negotiable_yes').attr('checked', 'checked')
      }
      if (vm.data.negotiable === 2) {
        $('#negotiable_no').attr('checked', 'checked')
      }
    }
    for(i = 0, len = vm.type.length; i < len; i++) {
      if(data.result.pcode === vm.type[i].code) {
        vm.data.code = vm.type[i]
        vm.secType = vm.type[i].types;
      }
    }
    setTimeout(function() {
      for(var i = 0, len = vm.data.type.length; i < len; i++){
        for(var j = 0, leng = $('.multipleSelect_type').length; j < leng; j++) {
          if($('.multipleSelect_type').eq(j).text() === vm.data.type[i].name) {
            $('.multipleSelect_type').eq(j).addClass('multipleSelect_type-selected')
          }
        }
      }
    });
  })
  vm.addphoto = function() {
    if (vm.photos.length < 5) {
      vm.photos.push({});
    } else {
      alert('最多只能上传5张图片！');
    }
  }

  vm.delphoto = function(index) {
    vm.photos.splice(index, 1);
  }
  vm.area = [ '中国内地' ]
  vm.count = [];
  for (var i = 0; i < 100; i++) {
    vm.count.push(i)
  }
  // 小类的读取
  vm.change = function() {
    for (var i = 0, len = vm.type.length; i < len; i++) {
      if (vm.data.code.id === vm.type[i].id) {
        vm.secType = vm.type[i].types;
      }
    }
  }
  // 小类的选择和删除
  vm.data.type = [];
  vm.typeSelect = function(event, item) {
    var elem = event.target;
    if ($(elem).hasClass('multipleSelect_type-selected')) {
      vm.data.type.forEach((value, index, array) => {
        if ($(elem).text() === value.name) {
          array.splice(index, 1)
        }
      })
      $(elem).removeClass('multipleSelect_type-selected')
    } else {
      $(elem).addClass('multipleSelect_type-selected')
      vm.data.type.push(item)
    }
  }
  // 开始年的计算
  $scope.date;
  $scope.$watch('date', function(newValue, oldValue) {
    if (newValue) {
      $('#date2').removeAttr('disabled')
    }
  })

  // 提交数据
  vm.submit = function() {
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
        vm.data.content.push(vm.photos[i].url);
      }
    }
    vm.data.pcode = vm.data.code.code;
    vm.data.pcodeName = vm.data.code.name;
    vm.data.content = angular.toJson(vm.data.content)
    vm.data.type = angular.toJson(vm.data.type)
    var para = Object.assign({}, vm.data);
    $http.post('/Sys/rshop/Trademark/Edit', para).success(function() {

    })
  }
}
