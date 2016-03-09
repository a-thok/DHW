// import $ from 'jquery';

export default function MainCtrl($location) {
  var vm = this;
  
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
      url: 'qyzy',
      text: '企业资源',
      active: false
    },
    {
      url: 'qyry',
      text: '企业荣誉',
      active: false
    },
    {
      url: 'gzhj',
      text: '工作环境',
      active: false
    },
    {
      url: 'syztt',
      text: '首页主题图',
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
  
  // const routes_c = [
  //   {
  //     url: 'fbzp',
  //     text: '发布招聘',
  //     active: false
  //   },
  //   {
  //     url: 'zplb.published',
  //     text: '招聘列表',
  //     active: false
  //   },
  //   {
  //     url: 'jllb.filter',
  //     text: '简历列表',
  //     active: false
  //   },
    
    // {
    //   url: 'zhxx.person',
    //   text: '个人信息',
    //   active: false
    // },
    //     {
    //   url: 'zhxx.company',
    //   text: '公司信息',
    //   active: false
    // },
  // ];
  vm.routes = {
    title: '常用功能',
    items: routes_c
  };
}