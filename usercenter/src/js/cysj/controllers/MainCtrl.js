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
    },
    {
      url: 'pyfb',
      text: '已发布项目',
      active: false
    }
  ];
  
  let cookies = {}
  document.cookie.split('; ').forEach(item => {
    let arr = item.split('=')
    cookies[arr[0]] = arr[1]
  })
  if (cookies.accountType) {
    vm.accountType = cookies.accountType
    vm.logintype = cookies.logintype
  }
  
  vm.routes = {
    title: '常用功能',
    items: vm.logintype == 1 ? vm.routes_p :vm.routes_c
  };
  
  // vm.routes = {
  //   title: '创意设计',
  //   items:  vm.routes_p.concat(vm.routes_c)
  // };
}