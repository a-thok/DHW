export default function store() {
  $('.myjnav_l').mouseenter(function () {
    $('.myjnav_area').show();
  })
  $('.myjnav_l').mouseleave(function () {
    $('.myjnav_area').hide();
  })
  var para = {
    pageIndex: 1,
    pageSize: 10
  }
  // 解析url
  // function getQueryString(name) {
  //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  //   var r = window.location.search.substr(1).match(reg);
  //   if (r != null) return unescape(r[2]); return null;
  // }
  var word = $('.search_input').val();
  if (word) {
    para.keyword = word;
    // $('.search_input').val(word);
  }
  $.post('/store/list', para).success((data) => {
    $('.store_rsult_num').text(data.result.total)
  })
  loadData('/store/list', para, 'store', '.myj_content')
  // 类型的选择
  $('.filterBox_dl-last dd').on('click', function () {
    var index = $(this).index();
    if (index === 0) {
      return false;
    }
    $('.filterBox_dl-last dd').removeClass('filterBox_item-current').eq(index - 1).addClass('filterBox_item-current')
    var type = $(this).attr('data-type')
    para.type = type;
    loadData('/store/list', para, 'store', '.myj_content');
  })
  // 地区选择
  $('.areaSelect dd').on('click', function () {
    var index = $(this).index();
    if (index === 0) {
      return false;
    }
    $('.areaSelect dd').removeClass('filterBox_item-current').eq(index - 1).addClass('filterBox_item-current')
    var city = $(this).attr('data-city')
    para.city = city;
    loadData('/store/list', para, 'store', '.myj_content');
  })
}
