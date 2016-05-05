export default function index() {
  // 自动轮播
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

// 左侧浮动栏定位事件
  $(window).scroll(function () {
    var fixLeft = $('.fixDiv').offset().left;
    if (document.body.scrollTop > 1000) {
      $('.fixDiv').css({
        position: 'fixed',
        left: fixLeft,
        top: '30px'
      })
    } else if (document.body.scrollTop < 1000) {
      $('.fixDiv').css({
        position: 'absolute',
        left: '-70px',
        top: '-20px'
      })
    }
  })
  // 左侧浮动栏点击事件
  $('.fixUl_item').on('click', function () {
    var page = $(this).index();
    document.body.scrollTop = 1000 + page * 600;
  })
  $('.fixDiv span').on('click', function () {
    document.body.scrollTop = 0;
  })
}