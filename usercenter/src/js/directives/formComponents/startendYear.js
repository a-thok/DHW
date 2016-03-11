// 计算其实年月的指令

export default function startendYear() {
  return {
    replace : true,
    scope: true,
    template : function (elem, attrs){
      return `
          <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel" for="${attrs.first}">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            
            <div class="formGroup_display" ng-show="vm.isPlain">
              {{${attrs.vm}.data.${attrs.first}.${attrs.part} || ${attrs.vm}.data.${attrs.first}}}
              年
              {{${attrs.vm}.data.${attrs.second}.${attrs.part} || ${attrs.vm}.data.${attrs.second}}}
              月 至
              {{${attrs.vm}.data.${attrs.third}.${attrs.part} || ${attrs.vm}.data.${attrs.third}}}
              年
              {{${attrs.vm}.data.${attrs.fourth}.${attrs.part} || ${attrs.vm}.data.${attrs.fourth}}}
              <a class="formSwitch" href="javascript:;" ng-click="vm.edit(${attrs.vm}.data.${attrs.first}, ${attrs.vm}.data.${attrs.second},${attrs.vm}.data.${attrs.third},${attrs.vm}.data.${attrs.fourth})">修改</a>
            </div>
            
            <div class="formGroup_edit"  ng-show="!vm.isPlain">
              <select class="formSelect formSelect--multiple" id="${attrs.first}" name="${attrs.first}"
                ng-model="${attrs.vm}.${attrs.first}"
                ng-options="item for item in vm.list.startYears"
                ng-change="${attrs.vm}.setEndYear()"
                ng-required="${attrs.required}"
              > 
              </select>
              <div class="formSelectDiv"> 年 </div>
              <select class="formSelect formSelect--multiple" id="${attrs.second}" name="${attrs.second}"
                ng-model="${attrs.vm}.${attrs.second}"
                ng-change="${attrs.vm}.setEndMonth()"
                ng-options="item for item in vm.list.startMonths"
                ng-required="${attrs.required}"
              >
              </select>
               <div class="formSelectDiv"> 月 至 </div>
              <select class="formSelect formSelect--multiple" id="${attrs.third}" name="${attrs.third}"
                ng-model="${attrs.vm}.${attrs.third}"
                ng-options="item for item in vm.list.endYears"
                ng-change="${attrs.vm}.setEndMonth()"
                ng-required="${attrs.required}"
                ng-disabled="isChecked"
              >
              </select>
               <div class="formSelectDiv"> 月 </div>
              <select class="formSelect formSelect--multiple" id="${attrs.fourth}" name="${attrs.fourth}"
                ng-model="${attrs.vm}.${attrs.fourth}"
                ng-options="item for item in vm.list.endMonths"
                ng-required="${attrs.required}"
                ng-disabled="isChecked"
              >
              </select>
              <span>
                 <input type="checkbox" ng-click="vm.getToday($event)" ng-model="isChecked">至今
              </span>
              <a class="formSwitch" href="javascript:;" ng-show="${attrs.switch}" ng-click="vm.save()">保存</a>
              <a class="formSwitch" href="javascript:;" ng-show="${attrs.switch}" ng-click="vm.cancle()">取消</a>
            </div>
          </div>
        </div>
      `;
    },
    controller: ['$scope', '$attrs', '$http','$stateParams',function($scope,$attrs,$http,$stateParams){
      var  vm = this;
      //存储原始结束年月的变量
     var oldyear;
     var oldmonth;
       vm.list = {
        startYears : [],
        startMonths: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
        endYears: [],
        endMonths: []
      };
      // 计算起始年份
      (function () {
        var today = new Date();
        var thisYear = today.getFullYear();
        for (var i = thisYear - 50; i <= thisYear; i++) {
          vm.list.startYears.push(i + '');
        }
      })();
      
      
      $scope.$parent[$attrs.vm].setEndYear = function() {
        vm.list.endYears = vm.getEndYear();
      } 
      
      
     //根据起始年份来获得结束年份
      vm.getEndYear = function() {
        var today = new Date();
        var thisYear = today.getFullYear();
        for (var arr = [] , i = parseInt($scope.$parent[$attrs.vm].startyear); i <= thisYear; i++) {
          arr.push(i + '');
        }
        return arr;
      }
      //选择月份时判断如果年份选择同一年的情况
      $scope.$parent[$attrs.vm].setEndMonth = function() {
         vm.list.endMonths = vm.getEndMonth($scope.$parent[$attrs.vm].startyear,$scope.$parent[$attrs.vm].endyear,$scope.$parent[$attrs.vm].endyearTemp);
      }
      vm.getEndMonth = function(startYear, endYear, endYearTemp) {
        if(startYear && (endYear || endYearTemp)) {
          if(startYear == endYear) {
            for (var arr = [], i = parseInt($scope.$parent[$attrs.vm].startmonth); i< 12 ;i++) {
              arr.push(i < 10 ? '0' + i : i);
            }
            return arr;
          }else {
            return vm.list.startMonths;
          }
        }  
      }   
   
      
    vm.getToday = function (event) {
      var elem = event.target;
      if ($(elem).is(":checked")) {
        var today = new Date();
        //保存旧的结束年月
        oldyear = $scope.$parent[$attrs.vm].endyear;
        oldmonth = $scope.$parent[$attrs.vm].endmonth;
       
        $scope.$parent[$attrs.vm].endyear = today.getFullYear() + '';
        $scope.$parent[$attrs.vm].endmonth = today.getMonth() + 1;
      } else {
        //复选框未打钩时将旧年月重新赋值
        $scope.$parent[$attrs.vm].endyear = oldyear;
        $scope.$parent[$attrs.vm].endmonth = oldmonth;  
      }
    };
    }],
    controllerAs: 'vm'
  };
}