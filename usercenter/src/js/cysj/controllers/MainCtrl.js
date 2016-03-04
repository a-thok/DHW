export default function MainCtrl($location) {
  var vm = this;
  //公司
  vm.routes_c = [
    {
      url: 'cfb',
      text: '发布项目',
      active: false
    },
    {
      url: 'cyfb',
      text: '已发布项目查询',
      active: false
    },
  ];
  //个人
  vm.routes_p = [
    {
      url: 'pfb',
      text: '发布项目',
      active: false
    }
  ];
  
  // let cookies = document.cookie.split('; ');
  // cookies.forEach((cookie) => {
  //   if (cookie.indexOf('logintype') !== -1) {
  //     vm.logintype = cookie.indexOf('1') !== -1 ? 1 : 2;
  //   }
  // });
  
  // vm.routes = {
  //   title: '人才招聘',
  //   items: vm.logintype === 1 ? vm.routes_p :vm.routes_c
  // };
  vm.routes = {
    title: '创意设计',
    items:  vm.routes_p.concat(vm.routes_c)
  };
}