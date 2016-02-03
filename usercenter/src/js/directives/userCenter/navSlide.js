export default function navSlide() {
  return {
    link: function (scope, elem, attrs) {
      let active = elem.find('.ucNav_list_item--active'),
        activeWidth = active.width() + 'px',
        activeLeft = active.position().left + 'px';

      let slider = elem.find('.ucNav_list_item--slider');
      slider.css({
        width: activeWidth,
        left: activeLeft
      });

      elem.find('.ucNav_list_item').hover(function () {
        let hoverWidth = this.offsetWidth - 40 + 'px';
        let hoverLeft = this.offsetLeft + 'px';
        slider.stop(false, false)
          .animate({
            width: hoverWidth,
            left: hoverLeft
          }, 200);
      }, function () {
        slider.stop(false, false)
          .animate({
            width: activeWidth,
            left: activeLeft
          }, 200);
      });
    }
  };
}