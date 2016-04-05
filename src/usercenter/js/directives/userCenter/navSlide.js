export default function navSlide() {
  return {
    link: function (scope, elem) {
      let active;
      let activeWidth;
      let activeLeft;
      setTimeout(() => {
        active = elem.find('.ucNav_list_item--active');
        activeWidth = active.width() + 'px';
        activeLeft = active.position().left + 'px';
      }, 1000);

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
      }, () => {
        slider.stop(false, false)
          .animate({
            width: activeWidth,
            left: activeLeft
          }, 200);
      });
    }
  };
}
