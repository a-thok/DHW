import $ from 'jquery';
import './unslider-min.js';

export default function second() {
  // 轮播
  $('#slider').unslider({
    autoplay: true,
    infinite: true,
    arrows: false
  });
}
