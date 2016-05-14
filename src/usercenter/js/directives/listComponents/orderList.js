import { dhw } from '../../data/data.js';

export default function orderList() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
        <div class="listWrap">
          <ul class="titleList clearfix">
            <li class="titleList_item" style="width:155px;">商品图片</li>
            <li class="titleList_item" style="width:350px;">商品名称</li>
            <li class="titleList_item" style="width:100px;">单价</li>
            <li class="titleList_item" style="width:100px;">数量</li>
            <li class="titleList_item" style="width:100px;">总价</li>
            <li class="titleList_item" style="width:100px;">状态</li>
            <li class="titleList_item" style="width:100px;">操作</li>
          </ul>
          <ul class="list">
            <li class="list_item myj_order_item" ng-repeat="item in vm.data"
            data-vm="${attrs.vm}"
            >
              <div class="shopItem_ttl">
                <span class="shopItem_ttl_date">{{ item.date }}</span>
                <span class="orderNumber">订单号 ：<span>{{ item.number }}</span></span>
                <span class="companyName">{{ item.compayName }}</span>
                <span class="prderDelete" ng-click="${attrs.vm}.${attrs.del}">删除</span>
              </div>
              <table>
                <colgroup>
                  <col style="width:155px">
                  <col style="width:350px">
                  <col style="width:100px">
                  <col style="width:100px">
                  <col style="width:100px">
                  <col style="width:100px">
                  <col style="width:100px">
                </colgroup>
                <tbody class="commodity_tbody">
                  <tr ng-repeat="items in item.items">
                    <td><a href="{{ items.url }}"><img src="{{ items.image }}" alt=""></a></td>
                    <td>{{ items.name }}</td>
                    <td>{{ items.price }}</td>
                    <td>{{ items.count }}</td>
                    <td ng-if="$index === 0">{{ item.totalFee }}</td>
                    <td ng-if="$index === 0">{{ item.stateName }}</td>
                    <td class="blueWord" ng-if="$index === 0 && ${attrs.operate}">
                      <span ng-if="item.state === 0" ng-click="${attrs.vm}.${attrs.func}">取消订单</span></br>
                      <a ng-if="item.state === 0" href="${ attrs.editurl}">去付款</a></br>
                      <span ng-if="item.state === 1" ng-click="${attrs.vm}.${attrs.func2}">确认收货</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
          <div class="list_item_none" ng-if="vm.total === 0">
              暂无相关数据
            </div>
            <div class="paginationWrap" ng-if="vm.total > 5">
              <div class="pagination" uib-pagination
                boundary-links="true"
                total-items="vm.total"
                items-per-page="5"
                max-size="10"
                force-ellipses="true"
                previous-text="&lsaquo;"
                next-text="&rsaquo;"
                first-text="&laquo;"
                last-text="&raquo;"
                ng-model="vm.currentPage"
                ng-change="vm.pageChanged()"
              ></div>
            </div>
        </div>
      `
    },
    controller: ['$http', '$attrs', '$window', function ($http, $attrs, $window) {
      var vm = this;
      vm.dhw = dhw;
      var getData;
      let params;
      if (!$attrs.params) {
        params = {};
      } else {
        params = JSON.parse($attrs.params);
      }
      getData = (pageIndex) => {
        $http.post($attrs.api, Object.assign({}, {
          pageIndex: pageIndex,
          pageSize: 5,
        }, params)).success(res => {
          vm.total = res.result.total;
          if (res.result.data) {
            vm.data = res.result.data;
          } else {
            vm.data = res.result;
          }
        });
      };
      getData(1);

      vm.pageChanged = () => {
        getData(vm.currentPage);
        $window.scrollTo(0, 0);
      };
    }],
    controllerAs: 'vm'
  };
}