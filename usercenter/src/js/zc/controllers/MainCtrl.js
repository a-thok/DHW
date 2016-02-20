export default function MainCtrl() {
  var vm = this;
  
  vm.routes_p = [
    {
      url: 'ProjectLaunch.basic',
      text: '发布项目',
      active: false
    },
    {
      url: 'hasfb',
      text: '已发布项目查询',
      active: false
    },
    {
      url: 'gzlist',
      text: '关注列表',
      active: false
    },
    {
      url: 'tzlist',
      text: '支持列表',
      active: false
    }
  ];
  
  vm.routes_c = [
    {
      url: 'pgzlist',
      text: '个人关注列表',
      active: false
    },
    {
      url: 'pzclist',
      text: '个人支持列表',
      active: false
    }
  ];
  
  // let cookies = document.cookie.split('; ');
  // cookies.forEach((cookie) => {
  //   if (cookie.indexOf('logintype') !== -1) {
  //     vm.logintype = cookie.indexOf('1') !== -1 ? 1 : 2;
  //   }
  // });
  
  vm.routes = {
    title: '常用功能',
    items: vm.routes_p.concat(vm.routes_c)
  };
  
}