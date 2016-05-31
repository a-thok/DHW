import $ from 'jquery';

export default function detail() {
  // sku
  const price = $('.commodityPrice_cxj span');
  let skuid;
  $('.commodityBuy_sku').on('click', 'dd', (e) => {
    let point = [];
    let pointCompleted = true;
    let sku;

    $(e.target).parent().find('dd').removeClass('is-selected');
    $(e.target).addClass('is-selected');

    $('.commodityBuy_sku').each((i, el) => {
      if (!$(el).has('.is-selected').length) pointCompleted = false;
      point[i] = $(el).find('.is-selected').index();
    });

    if (pointCompleted) {
      sku = window.product.skus[point.toString()];
      price.text(`￥${sku.price}`);
      skuid = sku.id;
    }
  });

  $('.commodityBuy_reduce').on('click', () => {
    var count = parseInt($('.commodityBuy_count').val(), 10);
    if (count === 1) {
      return false;
    } else {
      count = count - 1;
      $('.commodityBuy_count').val(count);
    }
  });

  $('.commodityBuy_add').on('click', () => {
    var count = parseInt($('.commodityBuy_count').val(), 10);
    count = count + 1;
    $('.commodityBuy_count').val(count);
  });
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
  // function onClick(btn) {
  //   btn.on('click', () => {
  //   });
  // }
  // onClick($('.button_buy'));
  // onClick($('.button_car'));
  $('.button_buy, .button_car').on('click', (e) => {
    // 判断是否已经登录
    if (!window.dhw.isLogined) {
      window.login();
    } else {
      console.log(skuid);
      if (window.product.skus && !skuid) {
        alert('请选择完整的规格');
        return;
      }
      var count = parseInt($('.commodityBuy_count').val(), 10);
      $.post('/ShopCart/add', {
        productid: window.productid,
        count,
        skuid
      }).success((data) => {
        if (data.success === true) {
          if ($(e.target).hasClass('button_buy')) {
            location.href = '/ShopCart';
          } else {
            alert('添加成功');
            $('.sccount').html(data.result);
          }
        }
      });
    }
  });

  // 收藏
  $('.commodityShare_collection').click(() => {
    if ($('.commodityShare_collection').hasClass('cancel')) {
      alert('已收藏');
      return false;
    } else {
      $.post('/Product/Collect', {
        productid: window.productid
      }).success(() => {
        var txt = '已收藏';
        $('.commodityShare_collection a').text(txt)
        $('.commodityShare_collection').addClass('cancel');
      });
    }
  });
  // 图片切换
  $('.commodityImg_item img').on('mouseover', function (e) {
    $('.commodityImg_item').removeClass('commodityImg_item-current');
    $(this).parent().addClass('commodityImg_item-current');
    let url = e.target.getAttribute('src');
    $('.commodityPic_img').attr('src', url);
  });
}
