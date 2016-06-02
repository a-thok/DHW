export default function navSlide() {
  return {
    link(scope, elem) {
      let active = elem.find('.ucNav_list_item--active');
      let slider = elem.find('.ucNav_list_item--slider');
      let activeWidth;
      let activeLeft;


      function getLeft() {
        if (active.width() < 1000 && active.position()) {
          activeWidth = active.width() + 'px';
          activeLeft = active.position().left + 'px';

          slider.css({
            width: activeWidth,
            left: activeLeft
          });
        } else {
          setTimeout(getLeft);
        }
      }
      if (active[0]) {
        setTimeout(getLeft);
      } else {
        activeWidth = '0';
        activeLeft = '-2000px';

        slider.css({
          width: activeWidth,
          left: activeLeft
        });
      }


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
