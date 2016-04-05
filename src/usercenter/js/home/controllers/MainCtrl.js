// import $ from 'jquery';

export default function MainCtrl() {
  var vm = this;
  // 公司账号
  vm.routes_c = [
    {
      url: 'zhxx.company',
      text: '账号信息',
      active: false
    },
    {
      url: 'gsfu',
      text: '公司服务',
      active: false
    },
    {
      url: 'fwlb',
      text: '服务列表',
      active: false
    },
    {
      url: 'gsal',
      text: '公司案例',
      active: false
    },
    {
      url: 'allb',
      text: '案例列表',
      active: false
    },
    {
      url: 'qyzy.qyzz',
      text: '企业资质',
      active: false
    },
    {
      url: 'yqlj',
      text: '友情链接',
      active: false
    },
    {
      url: 'ztxg',
      text: '主题修改',
      active: false
    },
    {
      url: 'email.inbox',
      text: '站内信',
      active: false
    },
    {
      url: 'kjrz',
      text: '认证体系',
      active: false
    },
    {
      url: 'kjrzlist',
      text: '会计认证列表',
      active: false
    },
    {
      url: 'gsdt.fb',
      text: '公司动态',
      active: false
    }
  ];

  vm.routes_p = [
    {
      url: 'pzhxx.person',
      text: '账号信息',
      active: false
    },
    {
      url: 'email.inbox',
      text: '站内信',
      active: false
    },
    // {
    //   url: 'addresslist',
    //   text: '收货地址管理',
    //   active: false
    // },

  ];

  let cookies = {};
  document.cookie.split('; ').forEach(item => {
    let arr = item.split('=');
    cookies[arr[0]] = arr[1];
  })
  if (cookies.accountType) {
    vm.accountType = cookies.accountType;
    vm.logintype = cookies.logintype;
  }


  vm.routes = {
    title: '常用功能',
    items: vm.logintype == 1 ? vm.routes_p : vm.routes_c
  };
}