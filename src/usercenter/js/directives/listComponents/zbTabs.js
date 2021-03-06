export default function zbTabs() {
  return {
    replace: true,
    scope: true,
    template(elem, attrs) {
      return `<ul class="titleTabs clearfix">
        <a  ng-repeat="${attrs.repeat}" javascript:;>
          <li class="titleTab"
          data-url="{{item}}"
          ng-class="{ active: vm.isActive($index) }"
          ng-click="vm.tabChanged($index,item.id,item.name)"
            >{{item.name}}</li>
        </a>
      </ul>`;
    },
    controller: ['$location', '$attrs', '$scope', function Ctrl($location, $attrs, $scope) {
      let vm = this;
      // 当前选中标签，默认第一个
      let currentTab = 0;
      // let arr = $scope.$parent[$attrs.vm].listTabs;
      // let path = $location.path().lastIndexOf('/');
      // let url = '.' + $location.path().substring(path + 1);
      // arr.forEach((currentValue, index) => {
      //   if (url === currentValue.url) {
      //     currentTab = index;
      //   }
      // });
      // 用$index判断每个标签是不是当前标签
      vm.isActive = index => index === currentTab;
      // 点击标签时，根据当前标签的$index改变currentTab的值
      vm.tabChanged = (index, id, name) => {
        currentTab = index;
        $scope.$parent[$attrs.vm].id = id;
        if ($attrs.vm === 'jxgyzVm') {
          $scope.$parent[$attrs.vm].tradeName = name;
        }
        $scope.$parent[$attrs.vm].getData(1);
        console.log(name);
      };
    }],
    controllerAs: 'vm'
  };
}
