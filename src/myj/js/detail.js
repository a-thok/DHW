import $ from 'jquery';

export default function detail() {
  // 图片切换
  const img = $('.dinfo_img img');
  const imgs = $('.dinfo_imgItem img');
  imgs.on('mouseenter', (e) => {
    const self = $(e.target);
    imgs.parent().removeClass('is_active');
    self.parent().addClass('is_active');
    const url = self.attr('src');
    img.prop('src', url);
  });

  // 商品数量
  const countElem = $('.dinfo_count');
  $('.dinfo_option_cont button').on('click', (e) => {
    const self = $(e.target);
    const count = +countElem.val();
    if (self.hasClass('decr')) {
      if (count <= 1) return;
      countElem.val(count - 1);
    } else {
      countElem.val(count + 1);
    }
  });

  // sku
  const price = $('.dinfo_sprice span');
  const skuList = $('.dinfo_option.sku');
  let skuid;
  skuList.on('click', 'dd', (e) => {
    let point = [];
    let pointCompleted = true;
    let sku;

    $(e.target).parent().find('dd').removeClass('is_selected');
    $(e.target).addClass('is_selected');

    skuList.each((i, el) => {
      if (!$(el).has('.is_selected').length) pointCompleted = false;
      point[i] = $(el).find('.is_selected').index();
    });

    if (pointCompleted) {
      sku = window.product.skus[point.toString()];
      price.text(`¥${sku.price.toFixed(2)}`);
      skuid = sku.id;
    }
  });

  // 立即购买 和 加入购物车
  const cart = $('.header_cart_count');
  $('.dinfo_btns button').on('click', (e) => {
    const self = $(e.target);
    if (!window.dhw.isLogined) {
      window.login();
    } else if (window.product.skus && !skuid) {
      alert('请选择完整的规格');
    } else {
      const count = +countElem.val();
      $.post('/ShopCart/add', {
        productid: window.productid,
        count,
        skuid
      }).success((data) => {
        if (data.success) {
          if (self.hasClass('buy')) {
            location.href = '/ShopCart';
          } else {
            cart.text(data.result);
          }
        } else {
          alert('服务器错误，请稍后重试！');
        }
      });
    }
  });

  // $('.commodityBuy_reduce').on('click', () => {
  //   var count = parseInt($('.commodityBuy_count').val(), 10);
  //   if (count === 1) {
  //     return false;
  //   } else {
  //     count = count - 1;
  //     $('.commodityBuy_count').val(count);
  //   }
  // });

  // $('.commodityBuy_add').on('click', () => {
  //   var count = parseInt($('.commodityBuy_count').val(), 10);
  //   count = count + 1;
  //   $('.commodityBuy_count').val(count);
  // });
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
  // $('.button_buy, .button_car').on('click', (e) => {
  //   // 判断是否已经登录
  //   if (!window.dhw.isLogined) {
  //     window.login();
  //   } else {
  //     console.log(skuid);
  //     if (window.product.skus && !skuid) {
  //       alert('请选择完整的规格');
  //       return;
  //     }
  //     var count = parseInt($('.commodityBuy_count').val(), 10);
  //     $.post('/ShopCart/add', {
  //       productid: window.productid,
  //       count,
  //       skuid
  //     }).success((data) => {
  //       if (data.success === true) {
  //         if ($(e.target).hasClass('button_buy')) {
  //           location.href = '/ShopCart';
  //         } else {
  //           alert('添加成功');
  //           $('.sccount').html(data.result);
  //         }
  //       }
  //     });
  //   }
  // });

  // 收藏
  $('.dinfo_star').click((e) => {
    e.preventDefault();
    const self = $(e.target);
    if (self.hasClass('stared')) {
      alert('已收藏');
    } else {
      $.post('/Product/Collect', {
        productid: window.productid
      }).success(() => {
        self.text('已收藏');
        self.addClass('stared');
      });
    }
  });
  // 图片切换
  // $('.commodityImg_item img').on('mouseover', function (e) {
  //   $('.commodityImg_item').removeClass('commodityImg_item-current');
  //   $(this).parent().addClass('commodityImg_item-current');
  //   let url = e.target.getAttribute('src');
  //   $('.commodityPic_img').attr('src', url);
  // });
}
