export default function titleList() {
  return {
    replace: true,
    scope: true,
    template: function(elem, attrs) {
      return `
        <ul class="titleTabs clearfix">
          <li class="titleTab" 
            ng-class="{active:whichTab=='{{item}}'}"
            ng-click="whichTab='{{item}}'"
            ng-repeat="${attrs.repeat}">{{item}}</li>
        </ul>
      `
    }
  }
}