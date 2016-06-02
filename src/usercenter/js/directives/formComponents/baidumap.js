import BMap from 'b-map';

export default function baidumap() {
  return {
    replace: true,
    scope: true,
    template(elem, attrs) {
      return `<div class="formGourp clearfix" style="position:relative">
        <div class="formGourp_wrap">
          <label class="formLabel" for="">
            <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
          </label>
          <div class="formGroup_edit">
            <input class="formInput" id="detailaddress" name="${attrs.name}" type="text" ng-disabled="${attrs.disabled}"
              ng-model="${attrs.vm}.data.${attrs.name}"
              ng-pattern="${attrs.pattern}"
              ng-required="${attrs.required}"
              ng-keyup="${attrs.vm}.getAddress()"
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
      </div>`;
    },
    controller: ['$scope', '$attrs', '$http', function Ctrl($scope, $attrs) {
      // var vm = this;
      var pointall;
      var mapcity1;
      var newAddress;
      var address;
      // 百度地图API功能
      var map = new BMap.Map('allmap');
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);
      var options = {
        renderOptions: { map },
        onSearchComplete(result) {
           // 将搜索的结果给后台数据
          if (result.wr.length !== 0) {
            var resutltpoint = result.wr[0].point;
            pointall = resutltpoint.lng + ',' + resutltpoint.lat;
            $scope.$parent[$attrs.vm].data.addrBDMap = pointall;
          }
        }
      };
      var local = new BMap.LocalSearch(map, options);
      // 首次加载问题
      setTimeout(() => {
        mapcity1 = $scope.$parent[$attrs.vm].mapcity;
        address = $scope.$parent[$attrs.vm].data.addr;
        // 拼凑成新的地址
        newAddress = mapcity1 + address;
        local.search(newAddress);
      }, 800);

      $scope.$parent[$attrs.vm].getAddress = () => {
        // 读取详细地址
        address = $scope.$parent[$attrs.vm].data.addr;
        if (address) {
        // 读取市
          mapcity1 = $scope.$parent[$attrs.vm].mapcity;
        // 拼凑成新的地址
          newAddress = mapcity1 + address;
          local.search(newAddress);
        }
      };
      // 点击事件获取坐标
      function showMark(e) {
        map.clearOverlays();
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
