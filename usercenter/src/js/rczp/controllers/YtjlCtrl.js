export default function YtjlCtrl($http) {
   var vm = this;
   vm.list = [
     {name : '职位名称', key : 'position', width :'20%'},
     {name : '薪资', key : 'money',width : '20%'},
     {name : '公司名称',key : 'company',width:'20%'},
     {name : '工作地点',key : 'gzdd',width:'10%'},
     {name : '投递状态',key : 'tdzt',width:'20%'},
     {name : '企业是否查看',key : 'qysfck',width:'10%'}
   ];
}