export default function eduhomeList(){
  return {
    scope : true,
    replace: true,
    template: function(elem, attrs) {
      return `
        <table class="accountInfoTable">
           <thead>
             <tr>
                <td ng-repeat="title in ${attrs.vm}.listTitle">{{title.name}}</td>
                <td ng-if="${attrs.operate}" style="width:10%">操作</td>
             <tr>
             <tbody>
                 <tr ng-repeat="item in ${attrs.vm}.listdata">
                   <td ng-repeat="box in ${attrs.vm}.listTitle">
                      <span ng-if="vm.isArray(box.key)">{{item[box.key[0].zikey]}}至{{item[box.key[1].zikey]}}</span>
                      <span ng-if="!vm.isArray(box.key)">{{item[box.key]}}</span>
                   </td>
                   <td>
                      <span ng-if="${attrs.operate}" ng-click="vm.del(item.id,$index)" style="cursor:pointer">删除 | </span>
                      <span ng-if="${attrs.operate}" ng-click="vm.edit(item.id,$index)" style="cursor:pointer">修改</span>
                   </td>   
                 </tr>
             </tbody>
           </thead>
        </table>
      `
    },
    controller: ['$scope','$http', '$attrs', function($scope, $http, $attrs) {
      var vm = this;
      
      $http.post($attrs.postapi).success(function(d) {
        if(d.success) {
            $scope.$parent[$attrs.vm].listdata = d.result;          
        }
      })
      vm.del = function(id,index) {
        $http.post($attrs.delapi,{id: id}).success(function(d) {
          if(d.success) {
            $scope.$parent[$attrs.vm].listdata.splice(index,1);
          }
        })
      }
      vm.edit = function(id,index) {
        $scope.$parent[$attrs.vm].index = index + 1;
        $http.post($attrs.editapi, {id : id}).success(function(d) {
          $scope.$parent[$attrs.vm].data = d.result;
          var beginDate = d.result.begindate.split('-');
          var endDate = d.result.enddate.split('-');
          $scope.$parent[$attrs.vm].startyear =  beginDate[0];
          $scope.$parent[$attrs.vm].startmonth =  beginDate[1];
          
          $scope.$parent[$attrs.vm].endyearTemp = endDate[0];
          
          $scope.$parent[$attrs.vm].endyear = endDate[0];
          $scope.$parent[$attrs.vm].endmonth = endDate[1];
          
          
          $scope.$parent[$attrs.vm].setEndYear();
          $scope.$parent[$attrs.vm].setEndMonth();
        })
      }
      //判断是否为数组
      vm.isArray = (function(){
        if(Array.isArray) {
          return Array.isArray;
        }
        var objectToStringFn = Object.prototype.toString,
        arrayToStringResult = objectToStringFn.call([]);

        return function (subject) {
          return objectToStringFn.call(subject) === arrayToStringResult;
        }; 
      } ());
    }],
    controllerAs: 'vm',
  }
}