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
}