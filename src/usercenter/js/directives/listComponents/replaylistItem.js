export default function replaylistItem() {
  return {
    replace: true,
    template: function (elem, attrs) {
      return `
        <li>
          <div class="list_item_date">
            <i class="list_item_del" ng-if="${attrs.del}" ng-click="vm.delItem(${attrs.delkey})"></i>
            <span ng-show="${attrs.toptxt}">${attrs.datekeytxt} : {{item.${attrs.datekey}}}</span>
          </div>
           <ul class="list_item_boxes clearfix">
            <li ng-repeat="box in ${attrs.vm}.list" class="list_item_box" ng-style="{width: box.width}">
              <span ng-if="!box.key.push">{{ item[box.key] }}</span>
              <span ng-if="box.key.push"> {{box.key[0].keyname}}{{ item[box.key[0].keyword] }}<br/>{{ box.key[1].keyname }}{{item[box.key[1].keyword]}}</span>
            </li>
            <li ng-if="${attrs.operate}" class="list_item_box" style="width:10%">
              <button type="button" ng-if="item.state === 0" style="width:38px;height:25px;border-radius:5px;background-color:#337ab7;color:#fff;font-size:12px;border:none" id="replay" ng-click="vm.replay(item.duid, item.jobid)">${attrs.operation}</button>
              <span ng-if="item.state === 1 ">已回复</span>
            </li>
          </ul>
        </li>
      `;
    }
  };
}
