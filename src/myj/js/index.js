import $ from 'jquery';
import './unslider-min.js';

export default function index() {
  // 轮播
  $('#slider').unslider({
    autoplay: true,
    infinite: true,
    arrows: false
  });

  // 切换标签
  $('.sort_list li').on('click', (e) => {
    const self = $(e.target);
    const sort = self.parents('.sort');
    const tabs = sort.find('.sort_list li');
    const lists = self.parents('.sort').find('.sort_items');

    const index = self.index();
    tabs.removeClass('is_active');
    self.addClass('is_active');

    lists.hide();
    $(lists[index]).show();
  });

// 左侧浮动栏定位事件
  // $(window).scroll(function () {
  //   var fixLeft = $('.fixDiv').offset().left;
  //   if (document.body.scrollTop > 1000) {
  //     $('.fixDiv').css({
  //       position: 'fixed',
  //       left: fixLeft,
  //       top: '30px'
  //     })
  //   } else if (document.body.scrollTop < 1000) {
  //     $('.fixDiv').css({
  //       position: 'absolute',
  //       left: '-70px',
  //       top: '-20px'
  //     })
  //   }
  // })
  // // 左侧浮动栏点击事件
  // $('.fixUl_item').on('click', function () {
  //   var page = $(this).index();
  //   document.body.scrollTop = 1000 + page * 600;
  // })
  // $('.fixDiv span').on('click', function () {
  //   document.body.scrollTop = 0;
  // })
  // // 列表图片上移
  // $('.expand_img img').on('mouseover', function () {
  //   $(this).animate({
  //     top: -47 + 'px'
  //   });
  // })
  // $('.expand_img img').on('mouseleave', function () {
  //   $(this).animate({ top: 0 + 'px' });
  // })
}
