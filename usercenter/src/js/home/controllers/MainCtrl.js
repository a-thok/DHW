// import $ from 'jquery';

export default function MainCtrl($location) {
  var vm = this;
  //公司账号
  const routes_c = [
    {
      url: 'zhxx.person',
      text: '账号信息',
      active: true
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
    }
  ];
  
  const routes_p = [
    {
      url: 'pzhxx.person',
      text:'账号信息',
      active: false
    }
  ]
  vm.routes = {
    title: '常用功能',
    items: routes_c.concat(routes_p)
  };
}