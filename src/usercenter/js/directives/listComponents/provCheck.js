import $ from 'jquery';

export default function provCheck() {
  return {
    replace: true,
    scope: true,
    template(elem, attrs) {
      //   return `<div class="formGourp clearfix">
      //   <label class="formLabel" for="">
      //     <span class="formRequired" ng-show="${attrs.required}">*</span>地区选择
      //   </label>
      //   <ul class="areaList">
      //     <li ng-repeat="area in vm.data">
      //       <div class="areaList_item">
      //         <input
      //           class="areaList_item_input checkedAll"
      //           type="checkbox"
      //           ng-click="vm.listCheck($event, area)"
      //         >
      //         <span class="areaList_item_text text-font" name="areaText">{{area.name}}</span>
      //       </div>
      //       <dl class="areaList_item">
      //         <dd class="areaList_item" ng-repeat="prov in area.items">
      //           <input
      //             class="areaList_item_input"
      //             type="checkbox"
      //             data-code="{{prov.code}}"
      //             ng-model="${attrs.vm}.provs[prov.code]"
      //             ng-click="vm.listCheck($event, prov)"
      //           >
      //           <span class="areaList_item_text">{{prov.name}}</span>
      //         </dd>
      //       </dl>
      //     </li>
      //   </ul>
      //   {{ ${attrs.vm}.provs | json }}
      // </di>`;
      return `<div class="formGourp clearfix">
      <label class="formLabel" for="">
        <span class="formRequired" ng-show="${attrs.required}">*</span>销售范围
      </label>
      <div class="checkBox">
        <div class="checkBox_header">
          <span
          ng-repeat="items in vm.selectedItems"
          ng-click="vm.deleteCheck($index)"
          >{{items.name}}<i class="fa fa-times"></i></span>
        </div>
        <div class="checkBox_content">
          <div class="checkBox_content_header">
            <span ng-click="vm.provHide()">全部<i class="fa fa-angle-down"></i></span>
            <span class="prov is-hide" ng-click="vm.provHide()">{{vm.provint.text}}<i class="fa fa-angle-down"></i></span>
          </div>
          <p
          class="checkBox_content_title"
          data-code="{{vm.provint.code}}"
          ng-click="vm.addCheck($event)"
          >{{vm.provint.text}}</p>
          <ul class="checkBox_content_list provList">
            <li
            class="checkBox_content_list_item"
            ng-repeat="prov in vm.data"
            ng-click="vm.addCheck($event)"
            ng-class="{ is_active: vm.disable(prov.code) }"
            data-code="{{prov.code}}"
            data-type="prov"
            >{{prov.name}}</li>
          </ul>
          <ul style="clear: both;display: none;"class="checkBox_content_list cityList">
            <li
            class="checkBox_content_list_item"
            ng-class="{ is_active: vm.disable(city.code) }"
            ng-repeat="city in vm.subList"
            data-code="{{city.code}}"
            ng-click="vm.addCheck($event)"
            >{{city.name}}</li>
          <ul>
        </div>
      </div>
    </div>`;
    },
    controller: ['$scope', '$attrs', '$http', function Ctrl($scope, $attrs, $http) {
      let vm = this;
      vm.data = [];
      vm.subList = [];
      vm.selectedItems = [];
      vm.provint = { text: '全国', code: '00' };
      $http.post($attrs.api).success((data) => {
        vm.data = data.result;
      });
      $scope.$parent[$attrs.vm].getSelectedItems = () => vm.selectedItems;

      // 过滤出符合条件的省份或城市
      vm.filter = (items, code) => (items.filter(item => item.code === code))[0];

      // 修改后台读取的数据结构
      $scope.$parent[$attrs.vm].setSelectedItems = (codes) => {
        $http.post($attrs.api).success((data) => {
          vm.data = data.result;
          codes.forEach((code) => {
            let item;
            if (code.length > 2) {
              for (let i = 0; i < vm.data.length; i++) {
                item = vm.filter(vm.data[i].items, code);
                if (item) break;
              }
            } else {
              item = vm.filter(vm.data, code);
            }
            vm.selectedItems.push({
              name: item.name,
              code: item.code,
            });
          });
        });
      };
      const provTag = $('.prov');
      const provList = $('.provList');
      const cityList = $('.cityList');

      vm.provHide = () => {
        provTag.addClass('is-hide');
        provList.show();
        cityList.hide();
        vm.provint = { text: '全国', code: '00' };
      };

      // 添加城市
      vm.addCheck = (e) => {
        let elem = e.target;
        let elemText = $(elem).text();
        const code = $(elem).attr('data-code');
        if ($(elem).attr('data-type')) {
          for (let i = 0, len = vm.data.length; i < len; i++) {
            if (vm.data[i].code === code) {
              vm.subList = vm.data[i].items;
              break;
            }
          }
          if (code.length === 2) { // 点击城市时，如果该城市所属省份已被选择，拒绝点击
            const initialCode = code.slice(0, 2);
            for (let i = 0; i < vm.selectedItems.length; i++) {
              if (vm.selectedItems[i].code === initialCode) return;
            }
          }
          vm.provint.text = elemText;
          vm.provint.code = code;
          provTag.removeClass('is-hide');
          provList.hide();
          cityList.show();
        } else {
          if (code.length > 2) { // 点击城市时，如果该城市所属省份已被选择，拒绝点击
            const initialCode = code.slice(0, 2);
            for (let i = 0; i < vm.selectedItems.length; i++) {
              if (vm.selectedItems[i].code === initialCode) return;
              if (vm.selectedItems[i].name === elemText) return;
            }
          } else { // 点击省份时，剔除省份下原先被选中的城市
            vm.selectedItems = vm.selectedItems.filter(item => item.code.slice(0, 2) !== code);
          }

          // 推入选中数据
          vm.selectedItems.push({
            name: elemText,
            code: $(elem).attr('data-code')
          });
        }
      };
      // 删除城市
      vm.deleteCheck = (index) => {
        vm.selectedItems.splice(index, 1);
      };
      // 改变已选项的样式
      vm.disable = (code) => {
        const isDisabled = vm.selectedItems.some(item => item.code === code || item.code === code.slice(0, 2));
        return !isDisabled;
      };
      // vm.listCheck = (event, earaData) => {
      //   let elem = event.target;
      //   const arrayData = $scope.$parent[$attrs.vm].data.sellprov;
      //   const parent = $(elem).parent().parent();

      // 添加和删除
      // function arrOperate(boolenType, code) {
      //   if (boolenType === true) {
      //     arrayData.push(code);
      //   } else {
      //     arrayData.forEach((elem, index) => {
      //       if (elem === code) {
      //         arrayData.splice(index, 1);
      //       }
      //     });
      //   }
      // }
      // let checkBoolen;
      // if ($(elem).hasClass('checkedAll')) { // 全选和取消全选
      //   checkBoolen = $(elem)[0].checked;
      //   $.each(parent.find('dd'), (i, dd) => {
      //     const code = $(dd).find('input').attr('data-code');
      //     $scope.$parent[$attrs.vm].provs[code] = checkBoolen;
      //   });
      // parent.find('dd').find('input').prop('checked', checkBoolen);

      //   $.each(earaData.items, (i, el) => {
      //     // 调用函数
      //     arrOperate(checkBoolen, el.code);
      //   });
      // } else { // 单选和取消
      // let checkedAll = true;
      // // 一个地区的省份都选中时，显示全选
      // $.each($(parent).find('input'), (i, el) => {
      //   if ($(el).prop('checked') !== true) {
      //     checkedAll = false;
      //   }
      // });
      // checkBoolen = checkedAll ? true : false;
      // parent.prev().find('input').prop('checked', checkBoolen);
      //     $scope.$parent[$attrs.vm].isCheckedAll();
      //   }
      // };
    }],
    controllerAs: 'vm'
  };
}
