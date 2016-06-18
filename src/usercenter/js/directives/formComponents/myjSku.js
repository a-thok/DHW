export default function myjSku() {
  return {
    replace: true,
    scope: true,
    template(elem, attrs) {
      return `<div class="formGourp clearfix">
          <div class="formGourp_wrap">
            <label class="formLabel" for="${attrs.name}">
              <span class="formRequired" ng-show="${attrs.required}">*</span>${attrs.label}
            </label>
            <div class="formGroup_display">
              <div class="myjSku_prop" ng-repeat="prop in ${attrs.vm}.data.props">
                <ng-form name="innerForm">
                  <h4 class="myjSku_porp_title">
                    <input ng-pattern="/^.{1,10}$/" class="formInput" type="text" name="sizes" ng-model="prop.name" ng-required="true">
                    <button class="formBtn" type="button" ng-click="vm.delProp($index)">删除</button>
                    <span class="myjSku_error_info error-font" ng-show="innerForm.sizes && (innerForm.sizes.$invalid || innerForm.sizes.$error.required)">规格名称长度必须在1-10字符之间</span>
                  </h4>
                  <div class="myjSku_prop_item" ng-repeat="item in prop.propEnum">
                    <ng-form name="innerForm">
                      <input ng-pattern="/^.{1,10}$/" class="formInput" type="text" name="prop" placeholder="请输入产品的固有属性" ng-model="item.name" ng-required="$first || !$last">
                      <input ng-pattern="/^.{1,10}$/" class="formInput" type="text" name="remark" placeholder="备注（如偏深或偏浅）" ng-model="item.remark">
                      <button ng-hide="$first" class="formBtn" type="button" ng-click="vm.delPropItem($index, $parent.$index)">删除</button>
                      <p class="myjSku_error">
                        <span class="myjSku_error_info error-position" ng-show="innerForm.prop.$dirty && (innerForm.prop.$invalid || innerForm.prop.$error.required)">规格的值长度必须在1-10字符之间</span>
                        <span class="myjSku_error_info error-position remark_text" ng-show="innerForm.remark.$dirty && innerForm.remark.$invalid">备注长度必须在1-10字符之间</span>
                      </p>
                    </ng-form>
                  </div>
                  <div class="myjSku_prop_addItem">
                    <button class="formBtn" type="button" ng-click="vm.addPropItem($index)">添加属性</button>
                  </div>
                <ng-form>
              </div>
              <button ng-show="${attrs.vm}.data.props.length < 4" class="formBtn" type="button" ng-click="vm.addProp()">添加规格</button>
              <h4 class="myjSku_table_title" ng-show="${attrs.vm}.data.sku.length">价格</h4>
              <table class="myjSku_table" ng-show="${attrs.vm}.data.sku.length">
                <thead>
                  <th ng-repeat="prop in ${attrs.vm}.data.props">{{prop.name}}</th>
                  <th width="90">价格</th>
                </thead>
                <tbody>
                  <tr ng-repeat="sku in ${attrs.vm}.data.sku">
                    <td ng-repeat="point in sku.point track by $index" ng-show="!($parent.$index % vm.subitemCount($index+1))" rowspan={{vm.subitemCount($index+1)}}>
                      {{${attrs.vm}.data.props[$index].propEnum[point].name}}
                    </td>
                    <td>
                      <input class="formInput" type="text" ng-model="sku.price" ng-required="true">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>`;
    },
    controller: ['$scope', '$attrs', function ctrl($scope, $attrs) {
      let vm = this;
      let parentVm = $scope.$parent[$attrs.vm];

      // 添加/删除规格
      vm.addProp = () => {
        parentVm.data.props.push({ name: `规格${parentVm.data.props.length + 1}`, propEnum: [{ index: 0 }] });
        vm.getSkus();
      };
      vm.delProp = (index) => {
        parentVm.data.props.splice(index, 1);
        parentVm.data.props.forEach((prop, index) => { prop.lev = index; });
        vm.getSkus();
      };

      // 添加删除规格子项
      vm.addPropItem = (index) => {
        const items = parentVm.data.props[index].propEnum;
        items.push({ name: '', remark: '' });
        vm.skus = vm.getSkus(parentVm.data.props);
      };
      vm.delPropItem = (itemIndex, propIndex) => {
        const items = parentVm.data.props[propIndex].propEnum;
        items.splice(itemIndex, 1);
        items.forEach((item, index) => { item.index = index; });
        vm.getSkus();
      };

      // 计算深度（每一层往下的项目总数）
      vm.subitemCount = (deep) => (
        parentVm.data.props.reduce((prev, curr, index) => {
          if (index < deep) return prev;
          return prev * curr.propEnum.length;
        }, 1)
      );
      // 计算SKU数组
      vm.getSkus = () => {
        const props = parentVm.data.props;
        const result = [];
        const len = vm.subitemCount(0);
        props.forEach((prop, index) => {
          for (let i = 0; i < len; i++) {
            if (!result[i]) result[i] = { point: [] };
            result[i].point[index] = Math.floor(i / vm.subitemCount(index + 1) % prop.propEnum.length);
          }
        });
        // 比较前后两个数组，坐标相同的，从旧数组复制价格到新数组
        result.forEach((item) => {
          parentVm.data.sku.forEach((sku) => {
            if (item.point.toString() === sku.point.toString()) {
              item.price = sku.price;
            }
          });
        });
        parentVm.data.sku = result;
      };
    }],
    controllerAs: 'vm'
  };
}
