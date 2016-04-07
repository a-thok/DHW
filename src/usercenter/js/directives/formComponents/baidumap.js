export default function baidumap() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
      <div class="formGourp clearfix" style="position:relative">
          <div class="formGourp_wrap">
            <label class="formLabel" for="">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            <div class="formGroup_edit">
              <input class="formInput" id="detailaddress" name="${attrs.name}" type="text" ng-disabled="${attrs.disabled}"
                ng-model="${attrs.vm}.data.${attrs.name}"
                ng-pattern="${attrs.pattern}"
                ng-required="${attrs.required}"
              >
              <button class="formSwitch" type="button" ng-show="${attrs.switch}" ng-click="vm.save()" ng-disabled="${attrs.form}.${attrs.name}.$invalid">保存</button>
              <button class="formSwitch" type="button" ng-show="${attrs.switch}" ng-click="vm.cancle()">取消</a>
            </div>
          </div>
          <label class="formTip formTip--error"
            ng-show="${attrs.form}.${attrs.name}.$invalid && !${attrs.form}.${attrs.name}.$error.required"
          >
            <span class="formTip_text">${attrs.error}</span>
          </label>
          <label class="formTip formTip--error"
            ng-show="${attrs.form}.${attrs.name}.$dirty && ${attrs.form}.${attrs.name}.$error.required"
          >
            <span class="formTip_text">${attrs.label}不能为空</span>
          </label>
          <div id="allmap" style="position:absoulte;top:20px;left:274px;width:500px;height:300px;"></div>
      </div>
      `;
    },
    controller: ['$scope', '$attrs', '$http', function ($scope, $attrs, $http) {
        var detailaddress = document.getElementById("detailaddress");
       var pointall;
       var mapcity1;
        // 有用的代码
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398, 39.897445);
        map.centerAndZoom(point, 12);
        // 创建地址解析器实例
        var myGeo = new BMap.Geocoder();
        // 将地址解析结果显示在地图上,并调整地图视野
        var address;
        setTimeout(() => {
            mapcity1 = $scope.$parent[$attrs.vm].mapcity;
           address = $scope.$parent[$attrs.vm].address1;
           console.log(mapcity1)
          myGeo.getPoint(address, function (point) {
            if (point) {
              pointall = point.lng + ',' + point.lat;
              $scope.$parent[$attrs.vm].data.addrBDMap = pointall;
              map.centerAndZoom(point, 16);
              map.addOverlay(new BMap.Marker(point));
            } else {
              
            }
          }, mapcity1);
        },100);
          
  detailaddress.onblur = function() {
       address = detailaddress.value;
       mapcity1 = $scope.$parent[$attrs.vm].mapcity;
       myGeo.getPoint(address, function (point) {
            if (point) {
              pointall = point.lng + ',' + point.lat;
              $scope.$parent[$attrs.vm].data.addrBDMap = pointall;
              map.centerAndZoom(point, 16);
              map.addOverlay(new BMap.Marker(point));
            } else {
              alert("您选择地址没有解析到结果!");
            }
          }, mapcity1);
  }
        function showMark(e) {
          var pointone = e.point;
          pointall = pointone.lng + ',' + pointone.lat;
          $scope.$parent[$attrs.vm].data.addrBDMap = pointall;
          map.addOverlay(new BMap.Marker(pointone));
        }
        map.addEventListener('click', showMark);
        map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
    }],
    controllerAs: 'vm'
  };
}
