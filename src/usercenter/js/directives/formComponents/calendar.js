import partialController from './partialController.js';

export default function calendar() {
  return {
    replace: true,
    scope: true,
    template: function(elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel" for="${attrs.name}">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            <div class="formGroup_display" ng-show="vm.isPlain">
              {{${attrs.vm}.data.${attrs.name}}}
              <button class="formSwitch" type="button" ng-click="vm.edit(${attrs.vm}.data.${attrs.name})">修改</button>
            </div>
            <div class="formGroup_edit"  ng-show="!vm.isPlain">
              <input class="formInput formInput--readonly" id="${attrs.name}" name="${attrs.name}" type="text"
                ng-model="${attrs.vm}.data.${attrs.name}"
                ng-focus="vm.show()"
                ng-required="${attrs.required}"
                ng-change="${attrs.change}"
                ng-disabled="${!!attrs.issecond}"
              readonly>
              <button class="formSwitch" type="button" ng-show="${attrs.switch}" ng-click="vm.save()" ng-disabled="${attrs.form}.${attrs.name}.$invalid">保存</button>
              <button class="formSwitch" type="button" ng-show="${attrs.switch}" ng-click="vm.cancle()">取消</a>
            </div>
          </div>
          <div class="clndr" ng-show="vm.isShow">
            <div class="clndr_close" ng-click="vm.hide()">×</div>
            <div class="clndr_y">
              <button class="clndr_y_btn" type="button" ng-click="vm.prevYear()">-</button>
              <span>{{vm.year}}</span>
              <button class="clndr_y_btn" type="button" ng-click="vm.nextYear()">+</button>
            </div>
            <div class="clndr_body clearfix">
              <ul class="clndr_m">
                <li class="clndr_m_item"
                  ng-repeat="month in vm.months"
                  ng-class="{
                    current:vm.isCurrentMonth(month),
                    disabled:vm.isLessThanMonth(month),
                    active: vm.isSelectedMonth(month)
                  }"
                  ng-click="vm.selectMonth($event, month)"
                >{{month}}月</li>
              </ul>
              <ul class="clndr_d">
                <li class="clndr_d_item"
                  ng-repeat="date in vm.dates"
                  ng-class="{
                    current:vm.isCurrentDate(date),
                    disabled:vm.isEarlierDate(date),
                    active: vm.isSelectedDate(date)
                  }"
                  ng-click="vm.selectDate($event, date);${attrs.vm}.data.${attrs.name}=vm.result"
                >{{date}}</li>
              </ul>
            </div>
          </div>
        </div>
      `;
    },
    controller: ['$scope', '$attrs', '$http', '$stateParams', function($scope, $attrs, $http, $stateParams) {
      let vm = this;
      partialController($scope, $attrs, $http, $stateParams, vm);
<<<<<<< af5567fa9ff286b0dbf47853e20facc5c66493e6:src/usercenter/js/directives/formComponents/calendar.js
=======

>>>>>>> 个人中心 商标超市除商标修改外所有功能:usercenter/src/js/directives/formComponents/calendar.js
      // 日历显示切换
      vm.isShow = false;
      vm.show = () => {
        vm.isShow = true;
      };
      vm.hide = () => {
        vm.isShow = false;
<<<<<<< af5567fa9ff286b0dbf47853e20facc5c66493e6:src/usercenter/js/directives/formComponents/calendar.js
      };
      // 日历数据
      vm.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      vm.dates = []; // 动态赋值
=======
      }
>>>>>>> 个人中心 商标超市除商标修改外所有功能:usercenter/src/js/directives/formComponents/calendar.js

      // 日历数据
      vm.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      vm.dates = []; // 动态赋值

      // 当天
      const today = new Date();
      vm._year = today.getFullYear();
      vm._month = today.getMonth();
      vm._date = today.getDate();
      /* * 年 * */

      vm.year = vm._year;

      // 上一年
      vm.prevYear = () => {
        if (!$attrs.issecond) {
          vm.year--;
          vm.setDates(vm.month);
        }
      };
      // 下一年
      vm.nextYear = () => {
        vm.year++;
        vm.setDates(vm.month);
      };

      /* * 月 * */
      vm.month = vm.months[vm._month];
      // 是否当前月
      vm.isCurrentMonth = (month) => {
        if (vm.year === vm._year && +month - 1 === vm._month) {
          return true;
        }
      };
      // 是否是选中月
      vm.isSelectedMonth = (month) => {
        if (vm.year === vm.selectedYear && month === vm.month) {
          return true;
        }
<<<<<<< af5567fa9ff286b0dbf47853e20facc5c66493e6:src/usercenter/js/directives/formComponents/calendar.js
      };
=======
      }
>>>>>>> 个人中心 商标超市除商标修改外所有功能:usercenter/src/js/directives/formComponents/calendar.js
      // 是否小于当前月
      // vm.isLessThanMonth = (month) => {
      //   if (vm.year <= vm._year && (month - 1) < vm._month) {
      //     return true;
      //   }
      // };
      // 选择月
      vm.selectMonth = (e, month) => {
        if (e.target.className.indexOf('disabled') === -1) {
          vm.selectedYear = vm.year;
          vm.month = month;
          vm.setDates(month);
        }
<<<<<<< af5567fa9ff286b0dbf47853e20facc5c66493e6:src/usercenter/js/directives/formComponents/calendar.js
      };
=======
      }
>>>>>>> 个人中心 商标超市除商标修改外所有功能:usercenter/src/js/directives/formComponents/calendar.js

      /* * 日 * */
      vm.date = (vm._date < 10) ? '0' + vm._date : vm._date + '';
      // 是否当前日
      vm.isCurrentDate = (date) => {
        if (vm.year === vm._year && +vm.month - 1 === vm._month && +date === vm._date) {
          return true;
        }
      };
      // 是否是选中日
      vm.isSelectedDate = (date) => {
        if (vm.year === vm.selectedYear && vm.month === vm.selectedMonth && date === vm.date) {
          return true;
        }
      };
      // 是否小于当前日
      vm.isEarlierDate = (date) => {
        if (vm.year === vm._year && +vm.month - 1 === vm._month && +date < vm._date) {
          return true;
        }
      };
      // 选择日
      vm.selectDate = (e, date) => {
        if (e.target.className.indexOf('disabled') === -1) {
          vm.selectedYear = vm.year;
          vm.selectedMonth = vm.month;
          vm.date = date;
          if (!$attrs.issecond) {
            $scope.$parent.date = vm.year;
          }
          vm.result = vm.year + '-' + vm.month + '-' + vm.date;
          vm.hide();
        }
<<<<<<< af5567fa9ff286b0dbf47853e20facc5c66493e6:src/usercenter/js/directives/formComponents/calendar.js
      };

      if ($attrs.issecond) {
        $scope.$parent.$watch('date', (newV) => {
          vm.year = newV
        })
      }

=======

      }

      if ($attrs.issecond) {
        $scope.$parent.$watch('date', (newV) => {
          vm.year = newV
        })
      }

>>>>>>> 个人中心 商标超市除商标修改外所有功能:usercenter/src/js/directives/formComponents/calendar.js
      // 计算不同月的合法日期
      vm.setDates = (month) => {

        function calDates(last) {
          let arr = [];
          for (let i = 1; i <= last; i++) {
            arr.push((i < 10) ? '0' + i : i + '');
          }
          vm.dates = arr;
        }
        switch (month) {
          // 大月
          case '01':
          case '03':
          case '05':
          case '07':
          case '08':
          case '10':
          case '12':
            calDates(31);
            break;
          // 小月
          case '04':
          case '06':
          case '09':
          case '11':
            calDates(30);
            break;
          // 2月
          case '02':
            // 是否是闰年
            if (0 == vm.year % 4 && ((vm.year % 100 != 0) || (vm.year % 400 == 0))) {
              calDates(29);
            } else {
              calDates(28);
            }
            break;
        }
      };

      vm.setDates(vm.month);
    }],
    controllerAs: 'vm'
  };
}
