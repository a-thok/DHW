//省市联动测试控制器
export default function SsCtrl($scope,$http) {
  // $scope.data = {
    
  // }
  // $scope.province;
  //  $scope.city;
  //  $scope.district;
  $scope.result = {
    area : {
     city :{
       code : '9090',
       name : 'sdjif'
     },
     province : {
       code :'3201',
       name : '福建'
     },
     district:{
       code : '9090',
       name : 'kkkkk'
     }
    } 
  }
   //fn(data.result.content);
  // //$scope.data.area.province = $scope.result.area.province
  // console.log($scope.result.area.province.name);
   $scope.draft = {
    //  ll:"sdsdd",
    //  basic : function(){
    //    console.log("我是函数")
    //  }
   };
  //var current = "basic";
  // var content = $scope.draft["basic"];
  //console.log($scope.draft.basic);
  $scope.submit = function() {
    console.log("测试");
    var content = $scope.draft.basic();
    console.log(content);
  }
  // 显示下拉框的行为
    $scope.showSelectCont = function (event) {
      event.stopPropagation();
      $('.selectCont').hide();
      $(event.target).next().show();
    };
    // 隐藏下拉框
    $scope.hideSelectCont = function () {
      $('.selectCont').hide();
    };
    // 省市选择 默认省市
    // $scope.provs = _areaselect_data.p;
    // $scope.provs;
    //  $scope.provinces = (() => {
    //     $http.post('/Dict/city').success((res) => {
    //        $scope.areaData = res.result;
    //       // console.log("我是从后台拿取得数据" + $scope.areaData);
    //       $scope.provs = $scope.areaData.filter((item) => {
    //         return item.type === 'province';
    //       });
    //     });
    //   })();
}