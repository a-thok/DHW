   export default function TdpreviewdetailCtrl($http,$scope,$location){
     $scope.dhw = window.dhw;
     $scope.show = {};
    //   var obj_names = [
    //   'infoTemp',
    //   'educations',
    //   'internships',
    //   'projects',
    //   'presentations',
    //   '',
    //   'evaluations',
    //   'usernameTemp',
    //   'userintroTemp',
    //   'expectations'
    // ];
      var JobID = $location.search().JobID;
      var tdUserID = $location.search().tdUserID;
      $scope.statemc = $location.search().statemc;
      //初始化获取数据状态,获取未绑定数据
      var loaddata = function () {
          $http.post('/HRDelivery/DeliveryDetail', { tdUserID: tdUserID, JobID: JobID }).success(function (d) {
              if (d.success) {
                  $scope.data = d.result.content.root.resume;
                  $scope.photo = d.result.photo;
                  for (var i = 0; i < $scope.data.length; i++) {
                      switch ($scope.data[i].TypeID) {
                          case "1":
                              $scope.infoTemp = $scope.data[i].Content.root.data;
                              $scope.show.info = true;
                              break;
                          case "2":
                              $scope.educations = $scope.data[i].Content.root.data;
                              break;
                          case "3":
                              $scope.internships = $scope.data[i].Content.root.data;
                              break;
                          case "4":
                              $scope.projects = $scope.data[i].Content.root.data;
                              $scope.show.project = true;
                              break;
                          case "5":
                              $scope.presentations = $scope.data[i].Content.root.data;
                              $scope.show.presentation = true;
                              break;
                          case "7":
                              $scope.evaluations = $scope.data[i].Content.root.data;
                              $scope.show.evaluation = true;
                              break;
                          case "8":
                              $scope.usernameTemp = $scope.data[i].Content.root.data;
                              break;
                          case "9":
                              $scope.userintroTemp = $scope.data[i].Content.root.data;
                              break;
                          case "10":
                              $scope.expectations = $scope.data[i].Content.root.data;
                              $scope.show.expectation = true;
                              break;
                      }
                  }
              }
                setTimeout(function () {
                  $('.rsm_form').hide();
                  $('.rsm_result').show();
              });
          });
      };
      //加载数据
      loaddata();
     // 1 : 已查看
     $scope.yck = function () {
          if(statemc < 1) {
              $.post('/HRDelivery/DeliveryEdit', { JobID: JobID, state: 1, tdUserID: tdUserID });
          }
      }
     
     // 2:待沟通
      $scope.dgt = function () {
          $.post('/HRDelivery/DeliveryEdit', { JobID: JobID, state: 2, tdUserID: tdUserID });
      }
      //3：通知面试
      $scope.tzms = function () {
          $.post('/HRDelivery/DeliveryReply', { JobID: JobID, state: 3, tdUserID: tdUserID });
      }
      //4：不适合
      $scope.bhs = function () {
          $.post('/HRDelivery/DeliveryEdit', { JobID: JobID, state: 4, tdUserID: tdUserID });
      }
      
     
   }