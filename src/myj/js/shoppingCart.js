export default function shoppingCart() {
  var totalCount = 0;
  var totalPrice = 0;
  $('.commoditySelect').on('click', function () {
    // 点击计算商品总数量和总价
    var simplePrice = parseFloat($(this).parents('.shoppingCrat_commodity').find('.totalPrice').text());
    if ($(this).is(':checked')) {
      totalCount = totalCount + 1;
      totalPrice = totalPrice + simplePrice;
    } else {
      totalCount = totalCount - 1;
      totalPrice = totalPrice - simplePrice;
    }
    $('.selectedCommodity span').text(totalCount);
    $('.totalCount span').text(Math.round(totalPrice * 100) / 100);
  })
  // 直接输入数量的价格
  $('.shoppingCrat_commodity_input').on('keyup', function() {
    var count = parseInt($(this).val(), 10);
    if (count < 0) {
      return false;
    } else {
      $(this).parents('.shoppingCrat_commodity').find('.totalPrice').text(($(this).parents('.shoppingCrat_commodity').find('.simplePrice').text() * count).toFixed(2));
      $(this).siblings('.shoppingCrat_commodity_input').val(count)
      if ($(this).parents('.shoppingCrat_commodity').find('.commoditySelect').is(':checked')) {
        totalPrice = Math.round((totalPrice - parseFloat($(this).parents('.shoppingCrat_commodity').find('.simplePrice').text())) * 100) / 100;
        $('.totalCount span').text(Math.round(totalPrice * 100) / 100);
      }
    }
  })
  // 点击减数量和价格
  $('.shoppingCrat_commodity_reduce').on('click', function () {
    var count = parseInt($(this).siblings('.shoppingCrat_commodity_input').val(), 10);
    if (count === 1) {
      return false;
    } else {
      count = count - 1;
      $(this).parents('.shoppingCrat_commodity').find('.totalPrice').text(($(this).parents('.shoppingCrat_commodity').find('.simplePrice').text() * count).toFixed(2));
      $(this).siblings('.shoppingCrat_commodity_input').val(count)
      if ($(this).parents('.shoppingCrat_commodity').find('.commoditySelect').is(':checked')) {
        totalPrice = Math.round((totalPrice - parseFloat($(this).parents('.shoppingCrat_commodity').find('.simplePrice').text())) * 100) / 100;
        $('.totalCount span').text(Math.round(totalPrice * 100) / 100);
      }
    }
  })
  // 点击加数量和价格
  $('.shoppingCrat_commodity_add').on('click', function () {
    var count = parseInt($(this).siblings('.shoppingCrat_commodity_input').val(), 10);
    count = count + 1;
    $(this).parents('.shoppingCrat_commodity').find('.totalPrice').text(($(this).parents('.shoppingCrat_commodity').find('.simplePrice').text() * count).toFixed(2));
    $(this).siblings('.shoppingCrat_commodity_input').val(count)
    if ($(this).parents('.shoppingCrat_commodity').find('.commoditySelect').is(':checked')) {
      totalPrice = Math.round((totalPrice + parseFloat($(this).parents('.shoppingCrat_commodity').find('.simplePrice').text())) * 100) / 100; // 用来保留两位小数的
      $('.totalCount span').text(Math.round(totalPrice * 100) / 100);
    }
  })

  // 点击单个删除
  $('.delete').on('click', function () {
    var id = $(this).parents('.shoppingCrat_item').attr('data-id');
    $.post('/ShopCart/del', { id: id }).success((data) => {
      if (data.success === true) {
        location.reload();
      }
    });
  })
  // 清空购物车
  $('.deleteAll').on('click', function () {
    var ddid = $(this).parents('.shoppingCrat_store_item').attr('data-ddid');
    $.post('/ShopCart/DelByDdid', { ddid: ddid }).success((data) => {
      if (data.success === true) {
        location.reload();
      }
    })
  })
  $('.selectAll').on('click', function () {
    var allCount = $('.commoditySelect');
    var allPrince = $('.totalPrice')
    for (var i = 0, len = allCount.length; i < len; i++) {
      allCount[i].checked = true;
      totalPrice = totalPrice + parseFloat(allPrince[i].innerText)
    }
    totalCount = allCount.length;
    $('.selectedCommodity span').text(totalCount);
    $('.totalCount span').text(Math.round(totalPrice * 100) / 100);
  })
}
