import angular from 'angular';
import $ from 'jquery';
import WebUploader from 'web-uploader';

import { dhw } from '../data/data.js';

let app = angular.module('formComponents', []);
app
  .directive('inputTextRequired', function () {
    return {
      template: function (elem, attrs) {
        return `
          <div class="formGourp clearfix">
            <div class="formGourp_wrap">
              <label class="formLabel" for="${attrs.name}">
                <span class="formRequired">*</span>${attrs.label}
              </label>
              <input class="formInput" id="${attrs.name}" name="${attrs.name}" type="text"
                ng-model="${attrs.this}.${attrs.name}"
                ng-pattern="${attrs.pattern}"
              required>
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
          </div>
        `
      },
      replace: true,
      scope: true
    }
  })
  .directive('inputText', function () {
    return {
      template: function (elem, attrs) {
        return `
          <div class="formGourp clearfix">
            <div class="formGourp_wrap">
              <label class="formLabel" for="${attrs.name}">${attrs.label}</label>
              <input class="formInput" id="${attrs.name}" name="${attrs.name}" type="text"
                ng-model="${attrs.this}.${attrs.name}"
                ng-pattern="${attrs.pattern}"
              >
            </div>
            <label class="formTip formTip--error"
              ng-show="${attrs.form}.${attrs.name}.$dirty && ${attrs.form}.${attrs.name}.$invalid"
            >
              <span class="formTip_text">${attrs.error}</span>
            </label>
          </div>
        `
      },
      replace: true,
      scope: true
    }
  })
  .directive('ngTextarea', function () {
    return {
      template: function (elem, attrs) {
        return `
          <div class="formGourp clearfix">
            <div class="formGourp_wrap">
              <label class="formLabel" for="${attrs.name}">${attrs.label}</label>
              <textarea class="formTextarea" id="${attrs.name}" name="${attrs.name}" type="text"
                ng-model="${attrs.this}.${attrs.name}"
                ng-pattern="${attrs.pattern}"
              ></textarea>
            </div>
            <label class="formTip formTip--error"
              ng-show="${attrs.form}.${attrs.name}.$dirty && ${attrs.form}.${attrs.name}.$invalid"
            >
              <span class="formTip_text">${attrs.error}</span>
            </label>
          </div>
        `
      },
      replace: true,
      scope: true
    }
  })
  .directive('selectSimple', function () {
    return {
      template: function (elem, attrs) {
        return `
          <div class="formGourp clearfix">
            <div class="formGourp_wrap">
              <label class="formLabel" for="${attrs.name}"><span class="formRequired">*</span>${attrs.label}</label>
              <select class="formSelect" id="${attrs.name}" name="${attrs.name}"
                ng-model="${attrs.this}.${attrs.name}"
                ng-pattern="${attrs.pattern}"
                ng-options="${attrs.options}"
              required>
                <option value="">请选择</option>
              </select>
            </div>
          </div>
        `
      },
      replace: true
    }
  })
  .directive('selectArea', function () {
    return {
      template: function (elem, attrs) {
        return `

        `
      }
    }
  })
  .directive('ngUploader', function () {
    return {
      template: function (elem, attrs) {
        return `
          <div class="formGourp clearfix">
            <div class="formGourp_wrap">
              <label class="formLabel" for="${attrs.name}">
                <span class="formRequired" ng-show="">*</span>${attrs.label}
              </label>
              <div class="formUploadImg clearfix">
                <div class="formUploadImg_preview">
                  <img>
                  <span class="formUploadImg_result"></span>
                </div>
                <div class="filePicker" id="filePicker">选择图片</div>
              </div>
            </div>
          </div>
        `
      },
      replace: true,
      link: function (scope, elem, attrs, ctrl) {

        var $pick = elem.find('.filePicker');
        var $img = elem.find('img');
        var $result = elem.find('.formUploadImg_result');

        var uploader = WebUploader.create({
          auto: true,
          swf: '//cdn.dreamhiway.com/static/lib/Uploader.swf',
          server: dhw.imguploadurl + '?key=' + attrs.key + '&t=' + attrs.size,
          pick: $pick[0],
          accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/*'
          }
        });
        
        // 添加图片
        uploader.on('fileQueued', function (file) {
          uploader.makeThumb(file, function (error, src) {
            if (error) {
              $img.replaceWith('<span>不能预览</span>');
              return;
            }
            $img.attr('src', src).parent().show();
          }, 100, 100);
          $result.text('正在上传…').show()
        });
        
        // 上传成功
        uploader.on('uploadSuccess', function (file, response) {
          $result.text('上传成功');
          console.log(response)
        });
        
        // 上传失败
        uploader.on('uploadError', function (file) {
          $result.text('上传出错');
        });

      }
    }
  })
  .directive('ngCalendar', [function () {
    return {
      template: function (elem, attrs) {
        return `
          <div class="formGourp clearfix">
            <div class="formGourp_wrap">
              <label class="formLabel" for="${attrs.name}">
                <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
              </label>
              <input class="formInput" id="${attrs.name}" name="${attrs.name}" type="text"
                ng-model="${attrs.this}.${attrs.name}"
                ng-focus="ctrl.show()"
              readonly ng-required="${attrs.required}">
            </div>
            <div class="clndr" ng-show="ctrl.isShow">
              <div class="clndr_close" ng-click="ctrl.hide()">X</div>
              <div class="clndr_y">
                <button class="clndr_y_btn" type="button" ng-click="ctrl.prevYear()">-</button>
                <span>{{ctrl.year}}</span>
                <button class="clndr_y_btn" type="button" ng-click="ctrl.nextYear()">+</button>
              </div>
              <div class="clndr_body clearfix">
                <ul class="clndr_m">
                  <li class="clndr_m_item"
                    ng-repeat="month in ctrl.months"
                    ng-class="{
                      current:ctrl.isCurrentMonth(month),
                      disabled:ctrl.isLessThanMonth(month),
                      active: ctrl.isSelectedMonth(month)
                    }" 
                    ng-click="ctrl.selectMonth($event, month)"
                  >{{month}}月</li>
                </ul>
                <ul class="clndr_d">
                  <li class="clndr_d_item"
                    ng-repeat="date in ctrl.dates"
                    ng-class="{
                      current:ctrl.isCurrentDate(date),
                      disabled:ctrl.isEarlierDate(date),
                      active: ctrl.isSelectedDate(date)
                    }"
                    ng-click="ctrl.selectDate($event, date);${attrs.this}.${attrs.name}=ctrl.result"
                  >{{date}}</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      },
      controller: function () {
        
        // 日历显示切换
        this.isShow = false;
        this.show = () => {
          this.isShow = true;
        }
        this.hide= () => {
          this.isShow = false;
        }
        
        // 日历数据
        this.months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        this.dates = []; // 动态赋值
        
        // 当天
        const today = new Date();
        this._year = today.getFullYear();
        this._month = today.getMonth();
        this._date = today.getDate();
        
        /* * 年 * */
        this.year = this._year;
        // 上一年
        this.prevYear = () => {
          if (this.year > this._year) {
            this.year--;
            this.setDates(this.month);
          }
        };
        // 下一年
        this.nextYear = () => {
          this.year++;
          this.setDates(this.month);
        };
        
        /* * 月 * */
        this.month = this.months[this._month];
        // 是否当前月
        this.isCurrentMonth = (month) => {
          if (this.year === this._year && +month - 1 === this._month) {
            return true;
          }
        };
        // 是否是选中月
        this.isSelectedMonth = (month) => {
          if (this.year === this.selectedYear && month === this.month) {
            return true;
          }
        }
        // 是否小于当前月
        this.isLessThanMonth = (month) => {
          if (this.year <= this._year && (month - 1) < this._month ) {
            return true;
          }
        };
        // 选择月
        this.selectMonth = (e, month) => {
          if (e.target.className.indexOf('disabled') === -1) {
            this.selectedYear = this.year;
            this.month = month;
            this.setDates(month);
          }
        }
        
        /* * 日 * */
        this.date = (this._date < 10) ? '0' + this._date : this._date + '';
        // 是否当前日
        this.isCurrentDate = (date) => {
          if (this.year === this._year && +this.month - 1 === this._month && +date === this._date) {
            return true;
          }
        };
        // 是否是选中日
        this.isSelectedDate = (date) => {
          if (this.year === this.selectedYear && this.month === this.selectedMonth && date === this.date) {
            return true;
          }
        }
        // 是否小于当前日
        this.isEarlierDate = (date) => {
          if (this.year === this._year && +this.month - 1 === this._month && +date < this._date) {
            return true;
          }
        };
        // 选择日
        this.selectDate = (e, date) => {
          if (e.target.className.indexOf('disabled') === -1) {
            this.selectedYear = this.year;
            this.selectedMonth = this.month;
            this.date = date;
            this.result = this.year + '-' + this.month + '-' + this.date;
            this.hide();
          }
        }
        // 计算不同月的合法日期
        this.setDates = (month) => {
          
          let calDates = function (last) {
            let arr = [];
            for (let i = 1; i <= last; i++) {
              arr.push((i < 10) ? '0' + i : i + '');
            }
            this.dates = arr;
          }.bind(this)

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
              if (0 == this.year % 4 && ((this.year % 100 != 0) || (this.year % 400 == 0))) {
                calDates(29);
              } else {
                calDates(28);
              }
              break;
          }
        };
        
        this.setDates(this.month);
      },
      controllerAs: 'ctrl'
    };
  }]);

export default app;