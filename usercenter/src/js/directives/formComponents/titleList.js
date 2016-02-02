export default function titleList() {
  return {
    replace: true,
    scope: true,
    template: function(elem, attrs) {
      return `
        <ul class="titleTabs clearfix">
          <li class="titleTab" 
            ng-class="{ active: vm.isActive($index) }"
            ng-click="vm.tabChanged($index)"
            ng-repeat="${attrs.repeat}">{{item}}</li>
        </ul>
      `
    },
    controller: function() {
      let vm = this;
      // 当前选中标签，默认第一个
      vm.currentTab = 0;
      // 用$index判断每个标签是不是当前标签
      vm.isActive = index => index === vm.currentTab;
      // 点击标签时，根据当前标签的$index改变currentTab的值
      vm.tabChanged = index => vm.currentTab = index;
    },
    controllerAs: 'vm'
  }
}