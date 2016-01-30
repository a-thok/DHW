import angular from 'angular';
import $ from 'jquery';

let app = angular.module('formComponents', []);
app
  .directive('inputTextRequired', function() {
    return {
      template: function(elem, attrs) {
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
  .directive('inputText', function() {
    return {
      template: function(elem, attrs) {
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
  .directive('ngTextarea', function() {
    return {
      template: function(elem, attrs) {
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
  .directive('selectSimple', function() {
    return {
      template: function(elem, attrs) {
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
  .directive('selectAge',function() {
    return {
      template :function(ele, attrs) {
        return  `
          <div class="formGourp clearfix">
            <div class="formGourp_wrap">
              <label class="formLabel" for="${attrs.name}">${attrs.label}</label>
              <input class="formInput" id="${attrs.minage}" name="${attrs.minage}" type="text"
                ng-model="${attrs.this}.${attrs.minage}"
                ng-pattern="${attrs.pattern}"
              >
              <input class="formInput" id="${attrs.maxage}" name="${attrs.maxage}" type="text"
                ng-model="${attrs.this}.${attrs.maxage}" 
                ng-pattern="${attrs.pattern}"
              >
            </div>
            <label class="formTip formTip--error"
              ng-show="${attrs.form}.${attrs.minage}.$dirty  && ${attrs.form}.${attrs.maxage}.$dirty && (${attrs.this}.${attrs.minage}) > (${attrs.this}.${attrs.maxage})"
            >
              <span class="formTip_text">${attrs.error}</span>
            </label>
          </div>
        `
      }
    }
  })
  .directive('selectArea', function() {
    return {
      template: function(elem, attrs) {
        return `
          
        `
      }
    }
  });
  
export default app;