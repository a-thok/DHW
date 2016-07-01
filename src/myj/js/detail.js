import $ from 'jquery';
import template from 'art-template/dist/template.js';

export default function detail() {
  // 图片切换
  var img = $('.dinfo_img img');
  var imgs = $('.dinfo_imgItem img');
  imgs.on('mouseenter', (e) => {
    var self = $(e.target);
    imgs.parent().removeClass('is_active');
    self.parent().addClass('is_active');
    var url = self.attr('src');
    img.prop('src', url);
  });

  // 商品数量
  var countElem = $('.dinfo_count');
  $('.dinfo_option_cont button').on('click', (e) => {
    var self = $(e.target);
    var count = +countElem.val();
    if (self.hasClass('decr')) {
      if (count <= 1) return;
      countElem.val(count - 1);
    } else {
      countElem.val(count + 1);
    }
  });

  // sku
  var price = $('.dinfo_sprice span');
  var propList = $('.dinfo_option.prop');
  var skuid;
  var sendmode;
  propList.on('click', 'dd', (e) => {
    var point = [];
    var pointCompleted = true;
    var skuList = $('.dinfo_option.sku');
    var sku;
    var stock = $('.dinfo_option_count').find('span');
    $(e.target).parent().find('dd').removeClass('is_selected');
    $(e.target).addClass('is_selected');

    skuList.each((i, el) => {
      if (!$(el).has('.is_selected').length) pointCompleted = false;
      point[i] = $(el).find('.is_selected').index();
    });

    if (pointCompleted) {
      // 获取配送方式id
      if ($(e.target).hasClass('sendmode')) {
        sendmode = +$(e.target).attr('data-sendmode');
      }
      if (window.product.skus != null) {
        sku = window.product.skus[point.toString()];
        price.text(`¥${sku.price.toFixed(2)}`);
        skuid = sku.id;
        stock.text(sku.count); // 库存
      }
    }
  });

  // 立即购买 和 加入购物车
  var cart = $('.header_cart_count');
  $('.dinfo_btns button').on('click', (e) => {
    var self = $(e.target);
    if (!window.dhw.isLogined) {
      window.login();
    } else if (window.product.skus && !skuid) {
      alert('请选择完整的规格');
    } else if (!sendmode) {
      alert('请选择配送方式');
    } else {
      var count = +countElem.val();
      var productid = window.productid;
      var para = [];
      para.push({
        productid,
        skuid,
        count,
        sendmode
      });
      var form = $('#payForm');
      if (self.hasClass('buy')) {
        // location.href = '/ShopCart/confirm';
        form[0].p.value = JSON.stringify(para);
        form.submit();
        return;
      }
      $.post('/ShopCart/add', {
        productid: window.productid,
        count,
        skuid,
        sendmode
      }).success((data) => {
        if (data.success) {
          if (!self.hasClass('buy')) {
            // 加入购物车缩放提示
            var slide = $('.dinfo_slide').clone().appendTo('.dinfo_clone');
            slide.animate({
              opacity: '1',
              width: '147px',
              height: '36px',
              left: '649px',
              top: '-164px',
            }, 500, () => {
              slide.remove();
              cart.text(data.result);
            });
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
    var self = $(e.target);
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

  // 信息切换
  var spans = $('.ddetail_ttl span');
  var con = $('.ddetail_l_cont');
  $.each(spans, (i, span) => {
    $(span).on('click', () => {
      $(spans).removeClass('has-borderBut');
      $(span).addClass('has-borderBut');
      $(con).hide();
      $(con[i]).show();
    });
  });

  // 渲染城市模板
  var html = template('province', window);
  var city = $('.city');
  city.html(html);

  // 选择地区

  // 获取页面数据
  var res;
  var options;
  var dist = $('.area');
  function getSecondOptions(result) { // 渲染第二个select的option
    options = '';
    $.each(result.items, (k, item) => {
      // 循环出地区
      options += `<option value="${item}" class="area">${item}</option>`;
      dist.html(options);
    });
  }

  var items = $('.ddetail_cont_list_item');
  function switchList(cityValue, distValue) { // 显示分店列表
    if (cityValue === '全部市区') {
      items.show();
      return;
    }

    $.each(items, (i, list) => {
      $(list).hide();
      var type = $(list).attr('list-type');
      if (!distValue && type.indexOf(cityValue) !== -1) {
        $(list).show();
      } else if (distValue && type === `${cityValue}${distValue}`) {
        $(list).show();
      }
    });
  }
  // 分店数据存在时，加载地区
  if (window.companychildselect) {
    res = window.companychildselect;
    getSecondOptions(res[0]);
  }

  // 第一次进入页面，分店列表切换显示
  switchList(city.val(), dist.val());

  $.each($('.ddetail_cont_select select'), (i, select) => {
    $(select).on('change', () => {
      var cityValue;
      cityValue = city.val();
      if ($(select).hasClass('city')) {
        options = '';
        $.each(res, (i, result) => {
          if (result.cityName === cityValue) {
            // 传入存在相应值的result
            getSecondOptions(result);
          }
        });
      }
      var distValue = dist.val();
      if (distValue === '全部城区') {
        switchList(cityValue);
      } else {
        // 切换显示列表
        switchList(cityValue, distValue);
      }
    });
  });
}
