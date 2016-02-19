export default function MainCtrl($location) {
  var vm = this;
  
  vm.routes_p = [
    {
      url: 'jlbj',
      text: '简历编辑',
      active: false
    },
    {
      url: 'jlyl',
      text: '简历预览',
      active: false
    },
    {
      url: 'ytjl',
      text: '已投简历',
      active: false
    },
    {
      url: 'zwsc',
      text: '职位收藏',
      active: false
    }
  ];
  
  vm.routes_c = [
    {
      url: 'fbzp',
      text: '发布招聘',
      active: false
    },
    {
      url: 'zplb.published',
      text: '招聘列表',
      active: false
    },
    {
      url: 'jllb.filter',
      text: '简历列表',
      active: false
    }
  ];
  
  let cookies = document.cookie.split('; ');
  cookies.forEach((cookie) => {
    if (cookie.indexOf('logintype') !== -1) {
      vm.logintype = cookie.indexOf('1') !== -1 ? 1 : 2;
    }
  });
  
  vm.routes = {
    title: '人才招聘',
    items: vm.logintype === 1 ? vm.routes_p :vm.routes_c
  };
  
}