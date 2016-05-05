import shangpin from './shangpin.js';
import index from './index.js';
import store from './store.js';

// 图片
import '../img/yun-logo.png'
import '../img/gouwuche.png'
import '../img/ruzhu.png'
import '../img/shangpin1.png'
import '../img/shangpin2.png'
import '../img/ad.png'
import '../img/footer.png'
import '../img/7.png'
import '../img/1(1).png'
import '../img/3(1).png'
import '../img/2(1).png'
import '../img/4(1).png'
import '../img/5.png'
import '../img/5(1).png'
import '../img/6.png'
import '../img/146180764424451556.jpg'
import '../img/146180765044139282.jpg'
import '../img/146209680138713720.jpg'
import '../img/146192885765133682.jpg'
import '../img/146192894505842590.jpg'
import '../img/146193066525328754.jpg'


// import home from './js/home.js';
// import detail from './js/detail.js';

const pathname = window.location.pathname;

if (pathname === '/public/myj/myj-index.html') {
  index();
} else if (pathname === '/public/myj/myj-shangpin.html') {
  shangpin();
} else if (pathname === '/public/myj/myj-store.html') {
  store();
}

