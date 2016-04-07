import { companynum, companytrade, companynature } from '../../data/data.js';
export default function PersonToCompanyCtrl($http) {
  let vm = this;
  vm.companynum = companynum;
  vm.companytrade = companytrade;
  vm.companynature = companynature;
  vm.data = {};
  vm.draft = {};
  vm.getDraft = function () {
    
  };
  // 判断企业类型
  $http.post('/LoginService/Certify').success((d) => {
    vm.AccountTyp = d.result.AccountType;
  });
  vm.submit = () => {
    var content = vm.draft.basic();
    var para = Object.assign({}, vm.data);
    para.area = content.area;
    $http.post('/UserInfo/PersonToCompany', para).success((d) => {
      if (d.success) {
        alert('提交成功');
      } else {
        alert('网络原因无法进行提交');
      }
    });
  };
}
