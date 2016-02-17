import $ from 'jquery';

export default function MainCtrl($location) {
  var vm = this;
  
  const routes_p = [
    {
      url: 'jlbj',
      text: '简历编辑',
      active: true
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
  
  const routes_c = [
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
  
  vm.routes = {
    title: '人才招聘',
    items: routes_p.concat(routes_c)
  };
  
  // 点击侧边栏时，改变高亮
  vm.changeRoute = (index) => {
    vm.routes.items.forEach((route, i) => {
      if (i === index) {
        route.active = true;
      } else {
        route.active = false;
      }
    });
  };
  
  // 首次进入时，判断当前路由，应用改变高亮的方法
  (function() {
    let index;
    
    let currentPath;
    var lastIndex = $location.path().lastIndexOf('/');
    if (lastIndex !== 0) {
      currentPath = $location.path().substring(1, lastIndex);
    } else {
      currentPath = $location.path().substring(1);
    }
    
    vm.routes.items.forEach((route, i) => {
      if (route.url.indexOf('.') !== -1 && route.url.slice(0, route.url.indexOf('.')) === currentPath ) {
        index = i;
      } else if (route.url.slice(0) === currentPath) {
        index = i;
      }
    });
    
    vm.changeRoute(index);
  })();
  
}