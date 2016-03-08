export default function MainCtrl($location) {
  var vm = this;
  
  vm.routes_c = [
    {
      url: 'pfb',
      text: '发布项目',
      active: false
    },
    {
      url: 'pyfb',
      text: '已发布项目查询',
      active: false
    },
    {
      url: 'pfws',
      text: '申请为服务商',
      active: false
    },
    {
      url: 'pygz',
      text: '已关注项目',
      active: false
    }
  ];
  
  vm.routes_p = [
    // {
    //   url: 'cfb',
    //   text: 'c发布项目',
    //   active: false
    // },
    // {
    //   url: 'cyfb',
    //   text: 'c已发布项目查询',
    //   active: false
    // },
    // {
    //   url: 'cfws',
    //   text: 'c申请为服务商',
    //   active: false
    // },
    {
      url: 'cygz',
      text: '已关注项目',
      active: false
    }
  ];
  
  let cookies = {}
  document.cookie.split('; ').forEach(item => {
    let arr = item.split('=')
    cookies[arr[0]] = arr[1]
  })
  if (cookies.currenttype) {
    vm.currenttype = cookies.currenttype
    vm.logintype = cookies.logintype
  } else {
    vm.logintype = cookies.logintype
    vm.currenttype = vm.logintype
  }
  
  vm.routes = {
    title: '常用功能',
    items: vm.currenttype == 1 ? vm.routes_p :vm.routes_c
  };
  // vm.routes = {
  //   title: '人才招聘',
  //   items:  vm.routes_p.concat(vm.routes_c)
  // };
}