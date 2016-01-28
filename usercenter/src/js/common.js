import $ from 'jquery';

export default function common() {
  
  // 导航栏所有服务弹出
  let list = $('.ucNav_list_item--all_list');
  $('.ucNav_list_item--all').hover(function () {
    list.stop(false, false)
      .slideDown('fast');
  }, function () {
    list.stop(false, false)
      .slideUp('fast');
  });
  
  // 导航栏当前选中项
  let active = $('.ucNav_list_item--active'),
    activeWidth = active.width() + 'px',
    activeLeft = active.position().left + 'px';

  let slider = $('.ucNav_list_item--slider');
  slider.css({
    width: activeWidth,
    left: activeLeft
  });

  $('.ucNav_list_item').hover(function () {
    let hoverWidth = $(this).width() + 'px';
    let hoverLeft = $(this).position().left + 'px';
    slider.stop(false, false).
      animate({
        width: hoverWidth,
        left: hoverLeft
      }, 200);
  }, function () {
    slider.stop(false, false).
      animate({
        width: activeWidth,
        left: activeLeft
      }, 200);
  });

}
 