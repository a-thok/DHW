export default function list() {
  return {
    replace: true,
    scope: true,
    template: function (elem, attrs) {
      return `
          <div class="listWrap">
            <ul class="titleList clearfix">
              <li class="titleList_item" ng-repeat="item in ${attrs.vm}.list" ng-style="{width: item.width}">{{item.name}}</li>
              <li ng-if="${attrs.operate}" class="titleList_item" style="width:10%">操作</li>
            </ul>
            <ul class="list">
              <li class="list_item"
                ng-repeat="item in vm.data"
                data-vm="${attrs.vm}"
                data-datekey="${attrs.datekey}"
                data-operate="${attrs.operate}"
                data-operation="${attrs.operation}"
                data-func="${attrs.func}"
                data-delkey="${attrs.delkey}"
                data-del="${attrs.del}"
                data-editUrl="${attrs.editurl}"
                data-datekey="${attrs.datekey}"
                data-datekeytxt="${attrs.datekeytxt}"
              list-item>
              </li>
            </ul>

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
    controller: ['$http', '$attrs', '$window', function ($http, $attrs, $window) {
      let vm = this;
      
      // vm.delItem = (key,delapi) => {
      //   $http.post(delapi).success(res => {
      //     // vm.total = res.result.total;
      //     // vm.data = res.result.data;
      //      getData(1)
      //   })
      // }
      
      
      let  params;
      if(!$attrs.params) {
        params = {};
      } else {
         params = JSON.parse($attrs.params);
      }
      let getData = (pageIndex) => {
        $http.post($attrs.api, Object.assign({}, {
          pageIndex: pageIndex,
          pageSize: 5
        }, params)).success(res => {
          vm.total = res.result.total;
          vm.data = res.result.data;
        });
      };

      getData(1);

      vm.pageChanged = () => {
        getData(vm.currentPage);
        $window.scrollTo(0, 0);
      };
      
       vm.delItem = (key) => {
         
         $http.post($attrs.delapi,{id : key}).success(res => {
           getData(1)
         })
      }
      vm.edit = function (jobid, type) {
          $http.post('/HRSczw/Qxsc', { jobid: jobid, type: type });
          getData(1);
      }
      
    }],
    controllerAs: 'vm'
  };
}