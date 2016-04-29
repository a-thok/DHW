export default function shangpin() {
  $('.myjnav_l').mouseenter(function () {
    $('.myjnav_area').show();
  })
  $('.myjnav_l').mouseleave(function () {
    $('.myjnav_area').hide();
  })
  $('.filterBox_dl-last dd').on('click', function () {
    var index = $(this).index();
    if (index === 0) {
      return false;
    }
    $('.filterBox_dl-last dd').removeClass('filterBox_item-current').eq(index - 1).addClass('filterBox_item-current')
  })
  $('.areaSelect dd').on('click', function () {
    var index = $(this).index();
    if (index === 0) {
      return false;
    }
    $('.areaSelect dd').removeClass('filterBox_item-current').eq(index - 1).addClass('filterBox_item-current')
  })
  $('.orderBy_item').on('click', function () {
    var index = $(this).index();
    $('.orderBy_item').removeClass('orderBy_item-current').eq(index).addClass('orderBy_item-current')
  })
}
