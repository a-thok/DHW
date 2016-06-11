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
    var self = $(e.target);
    var sort = self.parents('.sort');
    var tabs = sort.find('.sort_list li');
    var lists = self.parents('.sort').find('.sort_items');

    var index = self.index();
    tabs.removeClass('is_active');
    self.addClass('is_active');

    lists.hide();
    $(lists[index]).show();
  });

  // 浮动栏切换
  function navText(nav) {
    var text;
    if ($(nav).hasClass('fsj')) {
      text = '服饰街';
    } else if ($(nav).hasClass('smdq')) {
      text = '数码电器';
    } else if ($(nav).hasClass('yswh')) {
      text = '艺术文化';
    } else if ($(nav).hasClass('msj')) {
      text = '美食街';
    } else if ($(nav).hasClass('rycs')) {
      text = '日用商超';
    } else if ($(nav).hasClass('flj')) {
      text = '辅料街';
    } else {
      text = '其他';
    }
    return text;
  }

  // 获取浮动栏元素
  var nav = $('.aside_menu_item');

  $(document).on('scroll', () => {
    var sorts = $('.sort');

    $.each(sorts, (i, sort) => {
      var top = sort.getBoundingClientRect().top;
      var item = $(nav[i]).find('a');

      $(item).removeClass('bg-hide is-active');
      $(item).text('');

      if (top > -350 && top < 300) {
        $(item).addClass('bg-hide is-active');
        $(item).text(navText(nav[i]));
      }
    });
  });

  // 鼠标滑过显示文字
  $.each(nav, (i) => {
    function maction(event, text) {
      var item = $(nav[i]).find('a');

      $(nav[i]).on(event, () => {
        if ($(item).hasClass('is-active')) return;

        if (event === 'mouseenter') {
          $(item).addClass('bg-hide');
        } else {
          $(item).removeClass('bg-hide');
        }
        $(item).text(text);
      });
    }
    maction('mouseenter', navText(nav[i]));
    maction('mouseleave', '');
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
