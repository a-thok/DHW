export default function listItem() {
  return {
    replace: true,
    template: function(elem, attrs) {
      return `
        <li>
          <div class="list_item_date">
            <i class="list_item_del" ng-if="${attrs.del}" ng-click="vm.delItem(${attrs.delkey})"></i>
            <span>${attrs.datekeytxt} : {{item.${attrs.datekey}}}</span>
          </div>
          <ul class="list_item_boxes clearfix">
            <li ng-repeat="box in ${attrs.vm}.list" class="list_item_box" ng-style="{width: box.width}">
              <a ng-if="box.link" href="{{ box.link }}{{ item[box.linkkey] }}">{{ item[box.key] }}</a>
              <a ng-if="box.resumlink" href="${attrs.editurl}">{{ item[box.key] }}</a>
              <img ng-if="box.img" ng-src="{{item[box.key]}}">
              <span ng-if="!box.link && !box.img && !box.resumlink">{{ item[box.key] }}</span>
            </li>
            <li ng-if="${attrs.operate}" class="list_item_box" style="width:10%}}">
              <a href='${attrs.editurl}'>${attrs.operation}</a>
            </li>
          </ul>
        </li>
      `;
    }
  };
}
