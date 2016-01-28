import $ from 'jquery';

export default function MainController() {
  this.routes = [
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
      url: 'jltd',
      text: '简历投递',
      active: false
    },
    {
      url: 'zwsc',
      text: '职位收藏',
      active: false
    },
    {
      url: 'fbzw',
      text: '发布职位',
      active: false
    }
  ];
  
  this.changeRoute = (index) => {
    this.routes.forEach((route, i) => {
      if (i === index) {
        route.active = true;
      } else {
        route.active = false;
      }
    });
  };
}