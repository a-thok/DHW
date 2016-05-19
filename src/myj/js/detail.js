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
  // $('.button_car').on('click', function () {
  // // 判断是否已经登录
  //   var mainurl = dhw.mainurl;
  //   var localurl = encodeURIComponent(window.location.href);
  //   var url = mainurl + "login?redirectURL=" + localurl;
  //   if (!$.cookie("accountType")) {
  //       // location.href = url;
  //       // login();
  //       console.log(1);
  //   } else {
  //     var count = parseInt($('.commodityBuy_count').val(), 10);
  //     var productid = 11;
  //     $.post('/ShopCart/add', {
  //       productid: productid,
  //       count: count
  //     }).success((data) => {
  //       if (data.success === true) {
  //         alert('添加成功');
  //       }
  //     })
  //   }
  // })
  function onClick(btn) {
      btn.on('click', function () {
      // 判断是否已经登录
      if (!dhw.isLogined) {
          login();
      } else {
        var count = parseInt($('.commodityBuy_count').val(), 10);
        $.post('/ShopCart/add', {
          productid: productid,
          count: count
        }).success((data) => {
          if (data.success === true) {
            if (btn.hasClass('button_buy')) {
              location.href = "/ShopCart";
            } else {
              alert('添加成功');
              $('.sccount').html(data.result);
            }
          }
        })
      }
    })
  }
  onClick($('.button_buy'));
  onClick($('.button_car'));
  
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
  // 图片切换
  $('.commodityImg_item img').on('mouseover', function (e) {
    $('.commodityImg_item').removeClass('commodityImg_item-current');
    $(this).parent().addClass('commodityImg_item-current');
    let url = e.target.getAttribute('src');
    $('.commodityPic_img').attr('src', url);
  })
}