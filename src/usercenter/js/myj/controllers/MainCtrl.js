export default function MainCtrl() {
  var vm = this;
  // 个人账号
  vm.routes_p = [
    {
      url: 'sc',
      text: '收藏列表',
      active: false
    },
    {
      url: 'buyer',
      text: '买家订单',
      active: false
    }
  ];
  // 公司账号
  vm.routes_c = [
    {
      url: 'fb',
      text: '发布商品',
      active: false
    },
    {
      url: 'yfb.all',
      text: '已发布商品',
      active: false
    },
    {
      url: 'seller',
      text: '卖家订单',
      active: false
    },
    {
      url: 'sc',
      text: '收藏列表',
      active: false
    },
    {
      url: 'buyer',
      text: '买家订单',
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
