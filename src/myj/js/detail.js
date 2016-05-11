export default function detail() {
  $('.commodityBuy_reduce').on('click', function () {
    var count = parseInt($('.commodityBuy_count').val(), 10);
    if (count === 1) {
      return false;
    } else {
      count = count - 1;
      $('.commodityBuy_count').val(count)
    }
  })
  $('.commodityBuy_add').on('click', function () {
    var count = parseInt($('.commodityBuy_count').val(), 10);
    count = count + 1;
    $('.commodityBuy_count').val(count)
  })
  $('.button_car').on('click', function () {
    var count = parseInt($('.commodityBuy_count').val(), 10);
    $.post('/ShopCart/add', {
      productid: productid,
      count: count
    }).success((data) => {
      if (data.success === true) {
        alert('添加成功');
      }
    })
  })
  //收藏
  $('.commodityShare_collection').click(function () {
    if ($('.commodityShare_collection').hasClass('cancel')) {
      alert("已收藏");
      return false;
    }
    else {
      $.post('/Product/Collect', {
        productid: productid
      }).success(function () {
      var txt = "已收藏";
      $('.commodityShare_collection a').text(txt)
      $('.commodityShare_collection').addClass('cancel');
      })
    }
  })
}