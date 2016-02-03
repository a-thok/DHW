export default function selectDoubleNumbers() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
        <div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel" for="${attrs.first}">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            <select class="formSelect formSelect--multiple" id="${attrs.first}" name="${attrs.first}"
              ng-model="${attrs.vm}.data.${attrs.first}"
              ng-pattern="${attrs.pattern}"
              ng-options="item for item in vm.firstNumbers"
              ng-change="vm.getSecondNumbers(${attrs.vm}.data.${attrs.first});${attrs.vm}.data.${attrs.second}=''"
              ng-required="${attrs.required}"
            >
            </select>
            <div class="formSelectDiv"> - </div>
            <select class="formSelect formSelect--multiple" id="${attrs.second}" name="${attrs.second}"
              ng-model="${attrs.vm}.data.${attrs.second}"
              ng-pattern="${attrs.pattern}"
              ng-options="item for item in vm.secondNumbers"
              ng-required="${attrs.required}"
            >
            </select>
          </div>
        </div>
      `;
    },
    controller: function() {
      let vm = this;
      
      // 计算一组数字
      let cal = (start) => {
        let arr = [];
        for (let i = start; i <=65; i++) {
          arr.push(i);
        }
        return arr;
      };
      
      // 第一组数字
      vm.firstNumbers = cal(18);
      
      // 选择第一组数字后，计算第二组数字
      vm.getSecondNumbers = (firtNumber) => {
        vm.secondNumbers = cal(firtNumber);
      };
      
    },
    controllerAs: 'vm'
  };
}