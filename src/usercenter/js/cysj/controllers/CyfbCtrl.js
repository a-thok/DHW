// 已发项目查询
export default function CyfbCtrl($http) {
  var vm = this;
  vm.list = [
    {name:'项目类型',key:'protype',width:'20%'},
    {name:'项目名称',key:'title',width:'20%'},
    {name:'悬赏金额',key:'money',width:'20%'},
    {name:'交易模式',key:'transaction',width:'20%'},
    {name:'状态',key:'status',width:'10%'},
  ]
  vm.zjtg = function (project_id) {
    $http.post('/order/diy/add', {projectID: project_id}).success(function (data) {
      window.location.href = dhw.urldiy + '/order/diy/pay2/' + data.result.number;
    })
  }
  vm.complete = function(id) {
    $http.post('/CysjFb/PojectComplete',{id : id}).success(function(d) {
      if(d.success) {
        alert('操作成功')
      }
    })
  }
}