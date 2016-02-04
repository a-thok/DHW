export default function listItem() {
  return {
    replace: true,
    template: function(elem, attrs) {
      return `
        <li>
          <div class="list_item_date">{{item.${attrs.datekey}}}</div>
          <ul class="list_item_boxes clearfix">
            <li ng-repeat="box in ${attrs.vm}.list" class="list_item_box" style="width:{{box.width}}">
              <a ng-if="box.link" href="{{ box.link }}{{ item[box.linkkey] }}">{{ item[box.key] }}</a>
              <img ng-if="box.img" ng-src="{{item.key}}">
              <span ng-if="!box.link && !box.img">{{ item[box.key] }}</span>
            </li>
            <li ng-if="${attrs.operate}" class="list_item_box" style="width:10%}}">
              <a href="javascript:;" ng-click="${attrs.vm}.${attrs.func}">${attrs.operation}</a>
            </li>
          </ul>
        </li>
      `;
    }
  };
}