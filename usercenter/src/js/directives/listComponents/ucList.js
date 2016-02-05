import $ from 'jquery';
export default function ucList() {
  return {
    template: function (elem, attrs) {
      return `
          <div>
            <table class="listTable">
              <thead>
                <tr>
                  <th ng-repeat="${attrs.repeat}" style="width:{{item.width}}">{{item.name}}</th>
                </tr>
              </thead>
              <tbody>
                <tr ng-repeat="item in vm.data" ${attrs.listName}></tr>
              </tbody>
            </table>

            <div class="paginationWrap">
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
        `;
    },
    controller: ['$http', '$attrs', function ($http, $attrs) {
      let vm = this;
      let  params;
      if(!$attrs.params) {
        return;
      } else {
         params = JSON.parse($attrs.params);
      }
      //let params = JSON.parse($attrs.params);
      let getData = (pageIndex) => {
        $http.post($attrs.api, $.extend({},{pageIndex: 1,
        pageSize:5},params)).success(res => {
          vm.total = res.result.total;
          vm.data = res.result.data;
        });
      };

      getData(1);

      vm.pageChanged = () => {
        getData(vm.currentPage)
      }

    }],
    controllerAs: 'vm'
  };
}