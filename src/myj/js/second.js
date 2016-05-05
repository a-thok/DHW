export default function second() {
  $('.myjnav_l').mouseenter(function () {
    $('.myjnav_area').show();
  })
  $('.myjnav_l').mouseleave(function () {
    $('.myjnav_area').hide();
  })
  var index = 0;
  function slide() {
    var left = parseInt($('.slide').css('left'));
    if (-left >= 5760) {
      $('.slide').animate({ left: 0 }, 300);
      index = 0;
      $('.slider li').removeClass('slider-current').eq(index).addClass('slider-current');
    } else {
      index = index + 1;
      $('.slide').animate({ left: left - 1920 + 'px' }, 300);
      $('.slider li').removeClass('slider-current').eq(index).addClass('slider-current');
    }
  }
  setInterval(slide, 5000);
  // 小滑块的悬停事件
  $('.slider li').mouseenter(function () {
    var indexs = $(this).index();
    $('.slide').animate({ left: indexs * -1920 + 'px' }, 300);
    $('.slider li').removeClass('slider-current').eq(indexs).addClass('slider-current');
  })
}