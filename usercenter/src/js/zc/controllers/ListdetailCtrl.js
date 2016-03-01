export default function ListdetailCtrl($scope,$http,$location) {
   $scope.dhw = window.dhw;
    var vm = this;
    var id = $location.search().id;
    var loaddata = () => {
        $http.post('/CpzcList/List_Detail',{id:id}).success((d) => {
            if (d.success){
            vm.detail={
                 data:{text:d.result.project.text,                  
                       video:d.result.project.video
                        }};
            vm.project={
                 data: {city:d.result.project.city ,
                        daysum:d.result.project.daysum ,
                        diytag:d.result.project.diytag,
                        frontpic:d.result.project.frontpic,
                        money:d.result.project.money,
                        province:d.result.project.province,
                        purpose:d.result.project.purpose,
                        rectag:d.result.project.rectag,
                        title:d.result.project.title,
                        username:d.result.project.username,
                        userlogo:d.result.project.userlogo
                        }};
            vm.payback={
                  data:{ hb:d.result.payback}};
               }
        vm.ptid=d.result.project.ptid;
         }); 
    };
    loaddata();
}