// 样式
import '../css/myj.css';

// 图片
import '../img/yun-logo.png';
import '../img/gouwuche.png';
import '../img/ruzhu.png';
import '../img/shangpin1.png';
import '../img/shangpin2.png';
import '../img/ad.png';
import '../img/footer.png';
import '../img/7.png';
import '../img/1(1).png';
import '../img/3(1).png';
import '../img/2(1).png';
import '../img/4(1).png';
import '../img/5.png';
import '../img/5(1).png';
import '../img/6.png';
import '../img/touxiang.jpg';
import '../img/tehui.png';
import '../img/detailicon.png';
import '../img/146180764424451556.jpg';
import '../img/146180765044139282.jpg';
import '../img/146209680138713720.jpg';
import '../img/146192885765133682.jpg';
import '../img/146192894505842590.jpg';
import '../img/146193066525328754.jpg';
import '../img/tmlogo.png';


// import home from './js/home.js';
// import detail from './js/detail.js';
import goSearch from './goSearch.js';
goSearch();

import searchSp from './search-sp.js';
import index from './index.js';
import searchDp from './search-dp.js';
import subindex from './subindex.js';
import detail from './detail.js';
import shoppingCart from './shoppingCart.js';
import order from './order.js';
if (window.pagekey === 'index') {
  index();
} else if (window.pagekey === 'product') {
  searchSp();
} else if (window.pagekey === 'store') {
  searchDp();
} else if (window.pagekey === 'index2') {
  subindex();
} else if (window.pagekey === 'detail') {
  detail();
} else if (window.pagekey === 'shoppingCart') {
  shoppingCart();
} else if (window.pagekey === 'order') {
  order();
}
