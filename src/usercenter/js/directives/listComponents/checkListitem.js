export default function checkListitem() {
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
            <li class="list_item_box" style="width:5%" ng-if="${attrs.checkbox}">
              <input name="checkbox" type="checkbox" data-id="${attrs.id}" ng-click="select(item.id, $event )">
            </li>
            <li ng-repeat="box in ${attrs.vm}.list" class="list_item_box" ng-style="{width: box.width}">
              <a ng-if="box.link" href="{{ box.link }}{{ item[box.linkkey] }}" target="_blank">{{ item[box.key] }}</a>
              <span ng-if="!box.link && !box.resumlink">{{ item[box.key] }}</span>
            </li>
            <li ng-if="${attrs.operate}" class="list_item_box" style="width:10%">
              <a  ng-if="${attrs.projectname} === false" href="${attrs.editurl}" ng-click="${attrs.vm}.${attrs.func}">${attrs.operation}</a>
              <span ng-if="${attrs.operate2}">
                <a href="${attrs.editurl2}" ng-click="${attrs.vm}.${attrs.func2}">${attrs.operation2}</a>
              </span>
            </li>
          </ul>
        </li>
      `;
    },
    controller: ['$scope', '$attrs', function($scope, $attrs) {
      let vm = this;
      let arrid = $scope.$parent[$attrs.vm].arrid
      $scope.select = function(id, event) {
        var elem = event.target;
        if ($(elem).is(':checked')) {
          arrid.push(id)
        } else {
          arrid.filter(function(value, index) {
            if (id === value) {
              arrid.splice(index, 1);
            }
          })
        }
      }
    }]
  };
}