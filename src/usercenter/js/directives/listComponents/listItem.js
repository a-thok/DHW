
export default function listItem() {
  return {
    replace: true,
    template: function (elem, attrs) {
      return `
        <li>
          <div class="list_item_date">
            <i class="list_item_del" ng-if="${attrs.del}" ng-click="vm.delItem(${attrs.delkey})"></i>
            <i class="list_item_del" ng-if="${attrs.delytjl}" ng-click="vm.delYtjl(${attrs.delkey})"></i>
            <i class="list_item_del" ng-if="${attrs.delresume}" ng-click="vm.delResume(${attrs.userid},${attrs.jobid})"></i>
            <span ng-show="${attrs.toptxt}">${attrs.datekeytxt} : {{item.${attrs.datekey}}}</span>
            <span ng-if="${attrs.return}"><a href="${attrs.returnurl}">sdfsdf</a></span>
          </div>
          <ul class="list_item_boxes clearfix">
            <li ng-repeat="box in ${attrs.vm}.list" class="list_item_box" ng-style="{width: box.width}">
              <a ng-if="box.link" href="${attrs.link}{{ item[box.linkkey] }}" target="_blank">{{ item[box.key] }}</a>
              <a ng-if="box.resumlink" href="${attrs.editurl}">{{ item[box.key] }}</a>
              <img ng-if="box.img && !vm.isArray(box.key) && box.rczp" ng-src="{{vm.dhw.imgurl}}{{item[box.key]}}">
              <img ng-if="box.img && !vm.isArray(box.key) && !box.rczp" ng-src="{{vm.dhw.imgurl}}{{item[box.key]}}.jpg">
              <span ng-if="!box.link && !box.img && !box.resumlink && !box.addre">{{ item[box.key] }}</span>
              <span ng-if="box.addre">
                 <span ng-if="!item[box.key]">非默认</span>
                 <span ng-if="item[box.key]">默认地址</span>
              </span>
              <span ng-if="vm.isArray(box.key) && !box.img"> {{box.key[0].zid}}{{ item[box.key[0].zikey] }}<br/>{{ box.key[1].zid }}{{item[box.key[1].zikey]}}{{box.key[1].zikeyfh}}</span>
              <span ng-if="vm.isArray(box.key) && box.img"><img ng-src="{{vm.dhw.imgurl}}{{item[box.key[0].zikey]}}_280x280.jpg">{{item[box.key[1].zikey]}}</span>
            </li>
            <li ng-if="${attrs.operate}" class="list_item_box" style="width:10%">
              <a  ng-if="${attrs.projectname} === false" href="${attrs.editurl}" ng-click="${attrs.vm}.${attrs.func}">${attrs.operation}</br></a>
              <span ng-if="${attrs.projectname} === 1">
                 <a ng-if="item.states === 2" href="${attrs.editurl}{{item.id}}">查看详情</a>
                 <a ng-if="item.states !==2" href="javascript:;">审核未通过<br>无法查看</a>
              </span>
              <span ng-if="${attrs.projectname} === 2">
                 <a ng-if="item.statemc === 0" href="${attrs.editurl}{{item.ddid}}">查看详情</a>
                 <a ng-if="item.statemc !== 0" href="javascript:;">已删除<br>无法查看</a>
              </span>
             <span ng-if="${attrs.projectname} === 3">
                <b ng-if="item.pj !== 3">未面试<br/>无法评论</b>
                <a ng-if="item.pj === 3" href="javascript:;" ng-click="${attrs.vm}.${attrs.commentfunc}">${attrs.commentop}</a>
              </span>
              <span ng-if="${attrs.operate2}">
                <a href="${attrs.editurl2}" ng-click="${attrs.vm}.${attrs.func2}">${attrs.operation2}</br></a>
              </span>
              <span ng-if="${attrs.operate3}">
                <a href="${attrs.editurl3}" ng-click="${attrs.vm}.${attrs.func3}">${attrs.operation3}</a>
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
