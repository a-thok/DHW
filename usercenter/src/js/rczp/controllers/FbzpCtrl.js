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
  vm.save = (a) => {
    console.log(a)
  }
  vm.list = [
    {name: '职位', key: 'position', width: '15%', link: 'http://adsfadsf/', linkkey: 'userid'},
    {name: '公司', key: 'company', width: '20%', img: 'true'},
    {name: '薪资', key: 'money', width: '15%'},
    {name: '投递时间', key: 'licgsj', width: '15%'},
    {name: '投递状态', key: 'lizt', width: '10%'},
    {name: '查看状态', key: 'qysfck', width: '15%'},
  ];
}
