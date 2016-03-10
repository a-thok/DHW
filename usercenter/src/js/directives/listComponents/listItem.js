export default function listItem() {
  return {
    replace: true,
    template: function(elem, attrs) {
      return `
        <li>
          <div class="list_item_date">
            <i class="list_item_del" ng-if="${attrs.del}" ng-click="vm.delItem(${attrs.delkey})"></i>
            <span ng-show="${attrs.toptxt}">${attrs.datekeytxt} : {{item.${attrs.datekey}}}</span>
          </div>
          <ul class="list_item_boxes clearfix">
            <li ng-repeat="box in ${attrs.vm}.list" class="list_item_box" ng-style="{width: box.width}">
              <a ng-if="box.link" href="{{ box.link }}{{ item[box.linkkey] }}" target="_blank">{{ item[box.key] }}</a>
              <a ng-if="box.resumlink" href="${attrs.editurl}">{{ item[box.key] }}</a>
              <img ng-if="box.img && !vm.isArray(box.key)" ng-src="${attrs.imgurl}{{item[box.key]}}.jpg">
              <span ng-if="!box.link && !box.img && !box.resumlink">{{ item[box.key] }}</span>
              <span ng-if="vm.isArray(box.key) && !box.img"> {{box.key[0].zid}}{{ item[box.key[0].zikey] }}<br/>{{ box.key[1].zid }}{{item[box.key[1].zikey]}}{{box.key[1].zikeyfh}}</span>
              <span ng-if="vm.isArray(box.key) && box.img"><img ng-src="http://upload.dreamhiway.com/img/{{item[box.key[0].zikey]}}_280x280.jpg">{{item[box.key[1].zikey]}}</span>
            </li>
            <li ng-if="${attrs.operate}" class="list_item_box" style="width:10%">
              <a  ng-if="${attrs.projectname} === false" href="${attrs.editurl}" ng-click="${attrs.vm}.${attrs.func}">${attrs.operation}</a>
              <span ng-if="${attrs.projectname} === srdz">
                 <a ng-if="item.states === 2" href="${attrs.editurl}{{item.id}}">查看详情</a>
                 <a ng-if="item.states !==2" href="javascript:;">审核未通过<br>无法查看</a>
              </span>
              <span ng-if="${attrs.operate2}">
                <a href="${attrs.editurl2}" ng-click="${attrs.vm}.${attrs.func2}">${attrs.operation2}</a>
              </span>
            </li>
            <li ng-if="${attrs.orderstate}" class="list_item_box" style="width:15%">
              <a href='/pay2/{{item.number}}' ng-if="item['state']===0">去付款</a>
              <a href="http://localhost:8088/cpzcorder/drderdetail?number={{item.number}}" ng-if="item['state']!==0">查看详情</a>
            </li>
          </ul>
        </li>
      `;
    }
  };
}
