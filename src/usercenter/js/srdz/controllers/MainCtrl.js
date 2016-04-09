export default function MainCtrl() {
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
      active: false,
    },
    {
      url: 'pygz',
      text: '已关注项目',
      active: false
    },
    {
      url: 'seller.all',
      text: '卖家订单列表',
      active: false
    },
    {
      url: 'buyer.all',
      text: '买家订单列表',
      active: false
    }
  ];

  vm.routes_p = [
    {
      url: 'cygz',
      text: '已关注项目',
      active: false
    },
    {
      url: 'seller.all',
      text: '卖家订单列表',
      active: false
    },
    {
      url: 'buyer.all',
      text: '买家订单列表',
      active: false
    }
  ];

  let cookies = {};
  document.cookie.split('; ').forEach(item => {
    let arr = item.split('=');
    cookies[arr[0]] = arr[1];
  });
  if (cookies.accountType) {
    vm.accountType = cookies.accountType;
    vm.logintype = cookies.logintype;
  }

  vm.routes = {
    title: '常用功能',
    items: vm.logintype == 1 ? vm.routes_p : vm.routes_c
  };
}
