export default function shangpin() {
  $('.myjnav_l').mouseenter(function () {
    $('.myjnav_area').show();
  })
  $('.myjnav_l').mouseleave(function () {
    $('.myjnav_area').hide();
  })
  var para = {
    pageIndex: 1,
    pageSize: 15,
    orderby: '综合排序',
    asc: 0
  }
  // 解析url
  // function getQueryString(name) {
  //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  //   var r = window.location.search.substr(1).match(reg);
  //   if (r != null) return unescape(r[2]); return null;
  // }
  // var word = getQueryString('keyword');
  var word = $('.search_input').val();
  if (word) {
    para.keyword = word;
    // $('.search_input').val(word);
  }
  // 类型的选择
  $('.filterBox_dl-last dd').on('click', function () {
    var index = $(this).index();
    if (index === 0) {
      return false;
    }
    $('.filterBox_dl-last dd').removeClass('filterBox_item-current').eq(index - 1).addClass('filterBox_item-current')
    var type = $(this).attr('data-type')
    para.type = type;
    loadData('/product/list', para, 'shangpin', '.commodity_l');
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
    loadData('/product/list', para, 'shangpin', '.commodity_l');
  })
  // 默认排序
  loadData('/product/list', para, 'shangpin', '.commodity_l');

  // 价格排序
  $('.orderBy_item_price').on('click', function () {
    para.orderby = '价格'
    if ($(this).hasClass('orderBy_item-current')) {
      $(this).removeClass('orderBy_item-current').addClass('up');
      para.asc = 1;
      loadData('/product/list', para, 'shangpin', '.commodity_l');
    } else {
      $('.orderBy_item').removeClass('orderBy_item-current up');
      $(this).addClass('orderBy_item-current')
      para.asc = 0;
      loadData('/product/list', para, 'shangpin', '.commodity_l');
    }
  });
  // 时间排序
  $('.orderBy_item_time').on('click', function () {
    para.orderby = '发布时间'
    if ($(this).hasClass('orderBy_item-current')) {
      $(this).removeClass('orderBy_item-current').addClass('up');
      para.asc = 1;
      loadData('/product/list', para, 'shangpin', '.commodity_l');
    } else {
      $('.orderBy_item').removeClass('orderBy_item-current up');
      $(this).addClass('orderBy_item-current')
      para.asc = 0;
      loadData('/product/list', para, 'shangpin', '.commodity_l');
    }
  });

  // 综合排序
  $('.orderBy_item_default').on('click', function () {
    $('.orderBy_item').removeClass('orderBy_item-current up');
    $(this).addClass('orderBy_item-current')
    para.orderby = '综合排序';
    para.asc = 0;
    loadData('/product/list', para, 'shangpin', '.commodity_l');
  })

  // 关键字搜索
  $('.search_sp').on('click', function () {
    var keyword = $('.search_input').val();
    if (keyword === '') {
      return false;
    }
    para.keyword = keyword;
    loadData('/product/list', para, 'shangpin', '.commodity_l');
  });
}

