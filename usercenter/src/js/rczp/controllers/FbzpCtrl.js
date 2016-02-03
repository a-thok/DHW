import {
  jobCategory,
  salary,
  exprience,
  education,
  getTrade,
  pagination
} from '../../data/data.js';

export default function FbzpCrtl($http) {
  var vm = this;
  
  vm.jobCategory = jobCategory;
  vm.salary = salary;
  vm.exprience = exprience;
  vm.education = education;

  getTrade($http, (res) => 
    vm.trade = res.result
  );
  
  // 临时
  vm.list = [
    {name: '职位', width: '20%'},
    {name: '公司', width: '25%'},
    {name: '薪资', width: '15%'},
    {name: '投递时间', width: '15%'},
    {name: '投递状态', width: '10%'},
    {name: '查看状态', width: '15%'}
  ];
  
  this.submit = () => {
    $http.post('/SrdzFb/srfb', vm.data);
  };
}
