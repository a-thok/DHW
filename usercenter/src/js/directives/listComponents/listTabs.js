export default function listTabs() {
  return {
    replace: true,
    scope: true,
    template: function(elem, attrs) {
      return `
        <ul class="titleTabs clearfix">
          <a  ng-repeat="${attrs.repeat}" ui-sref="{{item.url}}">
            <li class="titleTab" 
            ng-class="{ active: vm.isActive($index) }"
            ng-click="vm.tabChanged($index)"
             >{{item.name}}</li>
          </a>
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
/**zhuang  
 * 使用示例
 * <div list-tabs
 *      data-repeat='item in zplbVm.listtitle'
 * ></div>
 * listtititle = [{'name': '首页','url':'.index'},{'name':'第二页','.second'}]
 * '.index'  : 为路由嵌套
 */