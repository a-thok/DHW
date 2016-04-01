export default function MainCtrl() {
  var vm = this;
  //公司
  vm.routes_c = [
    {
      url: 'sc',
      text: '我的收藏',
      active: false
    },
    {
      url: 'buyer.all',
      text: '订单列表',
      active: false
    },
    {
      url: 'order',
      text: '支付',
      active: false
    }
  ];
  //个人账户
  vm.routes_p = [
    {
      url: 'sc',
      text: '我的收藏',
      active: false
    },
    {
      url: 'buyer.all',
      text: '订单列表',
      active: false
    },
    {
      url: 'order',
      text: '支付',
      active: false
    }
  ];
  
  vm.routes_spe = [
    {
      url: 'fbsb',
      text: '商品发布',
      active: false
    },
    {
      url: 'splb.all',
      text: '商品列表',
      active: false
    },
    {
      url: 'seller.all',
      text: '卖家订单',
      active: false
    }
  ]
  
  let cookies = {}
  document.cookie.split('; ').forEach(item => {
    let arr = item.split('=')
    cookies[arr[0]] = arr[1]
  })
  if (cookies.accountType) {
    vm.accountType = cookies.accountType
    vm.logintype = cookies.logintype
  }
  if(vm.accountType === '3') {
    vm.routes_c = vm.routes_c.concat(vm.routes_spe)
    vm.routes_p = vm.routes_p.concat(vm.routes_spe)
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