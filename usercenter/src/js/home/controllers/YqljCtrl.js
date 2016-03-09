// export default function YqljCtrl($scope,$http) {
//   var vm = this;
 
//     vm.links = [{}];


//     vm.addlink = function () {
//       if (vm.links.length < 10) {
//         vm.links.push({});
//       } else {
//         alert("最多只能上传十个友情链接");
//         return;
//       }
//     }
//     vm.dellink = function (index) {
//       vm.links.splice(index, 1);
//     }
//     $http.post('/CompanyHomeEdit/LinkList').success( (d) => {
//       if (d.result.links) {
//         vm.data = d.result.links;
//       }

//     });
//     // vm.submit = function () {
//     //   var newArr = [];
//     //   for (var i = 0, len = vm.links.length; i < len; i++) {
//     //     newArr.push(vm.links[i]);
//     //   }

//     //   newArr = angular.toJson(newArr);

//     //   $http.post('/CompanyHomeEdit/LinkSave', {
//     //     links: newArr
//     //   }).success( (d) => {
//     //     if (d.success) {
//     //       console.log("提交成功");
//     //     } else {
//     //       console.log("提交失败");
//     //     }
//     //   });
//     // }
  
// }