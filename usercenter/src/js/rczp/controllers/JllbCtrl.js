export default function JllbCtrl(){
  var vm = this;
  vm.listtitle = [
    {
      name : '等待筛选简历',
      url : '.filter '
    },
    {
      name : '已查看简历',
      url : '.view'
    },
    {
      name : '待沟通简历',
      url : '.communicate'
    },
    {
      name : '已通知面试简历',
      url : '.interview'
    },
    {
      name : '不适合简历',
      url : '.notsuitable'
    }
    
  ]
}