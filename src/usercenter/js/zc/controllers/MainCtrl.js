export default function MainCtrl() {
  var vm = this;
  //公司
  vm.routes_c = [
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
    },
    {
      url: 'orderlist.dfk',
      text: '订单列表',
      active: false
    }
  ];
  //个人账户
  vm.routes_p = [
    {
      url: 'pgzlist',
      text: '个人关注列表',
      active: false
    },
    {
      url: 'pzclist',
      text: '个人支持列表',
      active: false
    },
    {
      url: 'orderlist.dfk',
      text: '订单列表',
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
  //   title: '常用功能',
  //   items: vm.routes_p.concat(vm.routes_c)
  // };
  
}