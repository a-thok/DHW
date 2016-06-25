import $ from 'jquery';
import template from 'art-template/dist/template.js';

export default function order() {
  var addrData = [];
  var para = {
    model: {}
  };
  // 订单填写
  // 读取数据
  $.post('/useraddr/list').success((data) => {
    addrData = data.result;
    var html = template('addressTem', data);
    $('.address_tem').html(html);
    $('.address_tem').on('click', '#modify', (e) => {
      var id = $(e.currentTarget).attr('data-id');
      para.model.id = id;
      $('.newaddrForm_btn').removeClass('addNewAddr').addClass('addrModify');
      id = parseInt($(e.currentTarget).attr('data-id'), 10);
      for (var i = 0, len = addrData.length; i < len; i++) {
        if (id === addrData[i].id) {
          $('#province').val(addrData[i].province_name);
          $('#city').val(addrData[i].city_name);
          $('#county').val(addrData[i].district_name);
          $('#province').attr('data-code', addrData[i].province_code);
          $('#city').attr('data-code', addrData[i].city_code);
          $('#county').attr('data-code', addrData[i].district_code);
          $('#address').val(addrData[i].address);
          $('#code').val(addrData[i].code);
          $('#name').val(addrData[i].name);
          $('#mobile').val(addrData[i].mobile);
          if (addrData[i].tel) {
            var tel = addrData[i].tel.split('-');
            $('#quhao').val(tel[0]);
            $('#phone').val(tel[1]);
            $('#fenji').val(tel[2]);
          }
          if (addrData[i].isDefault === true) {
            $('#default').attr('checked', 'checked');
          }
        }
      }
    });
  });

  // 默认地址选择
  $('.address_tem').on('mouseover', '.areaSelect', (e) => {
    $(e.currentTarget).addClass('selected_addr');
  });
  $('.address_tem').on('mouseout', '.areaSelect', (e) => {
    if ($(e.currentTarget).hasClass('confirm')) {
      return false;
    }
    $(e.currentTarget).removeClass('selected_addr');
  });
  $('.address_tem').on('click', '.areaSelect', (e) => {
    var index = $(e.currentTarget).index();
    $('.areaSelect').removeClass('confirm selected_addr').eq(index).addClass('confirm selected_addr');
  });

  // 删除数据
  $('.address_tem').on('click', '#delete', (e) => {
    var conf = confirm('是否确定删除?');
    if (conf) {
      var id = $(e.currentTarget).siblings('#modify').attr('data-id');
      $.post('/useraddr/del', { id }).success(() => {
        $.post('/useraddr/list').success((data) => {
          addrData = data.result;
          var html = template('addressTem', data);
          $('.address_tem').html(html);
        });
      });
    }
  });

  // 设置默认地址
  $('.address_tem').on('click', '.operate_items_grey', (e) => {
    var id = $(e.currentTarget).siblings('#modify').attr('data-id');
    $.post('/useraddr/setdefault', { id }).success(() => { });
  });

  // 点击修改与添加新地址
  $('.address_tem').on('click', '#modify', () => {
    $('.model_bg').show();
    $('.model').show();
  });
  $('.orderfill_cont').on('click', '.newAddr', () => {
    if ($('.areaSelect').length >= 10) {
      alert('收货地址不能超过10个');
      return;
    }
    $('.model_bg').show();
    $('.model').show();
    document.getElementById('addrForm').reset();
  });

  // 地区的选择
  var provinces = [];
  var cities = [];
  var counties = [];
  $.getJSON(dhw.urlmain + 'Dict/city2?callback=?', (data) => {
    provinces = data.result;

    // 循环取得省
    for (var i = 0, pLen = provinces.length; i < pLen; i++) {
      var content = provinces[i].name;
      var code = provinces[i].code;
      var html = '<li data-code="' + code + '">' + content + '</li>';
      $('.addr_province').append(html);
    }

    // 循环取得市
    $('.addr_province li').click((e) => {
      cities = [];
      $('.addr_city').empty();
      var province = $(e.target).html();

      $('#province').val(province);
      for (let i = 0, len = provinces.length; i < len; i++) {
        if (province === provinces[i].name) {
          cities = provinces[i].citys;
        }
      }
      for (let i = 0, cLen = cities.length; i < cLen; i++) {
        var content = cities[i].name;
        var code = cities[i].code;
        var html = '<li data-code="' + code + '">' + content + '</li>';
        $('.addr_city').append(html);
      }
      $('.addr_province').hide();
      $('.addr_city').show();
      $('#province').attr('data-code', $(e.target).attr('data-code'));
    });

    // 循环取得县
    $('.addr_city').on('click', 'li', (e) => {
      counties = [];
      $('.addr_county').empty();
      var city = $(e.target).html();
      console.log(city);
      $('#city').val(city);
      for (let i = 0, cLen = cities.length; i < cLen; i++) {
        if (city === cities[i].name) {
          counties = cities[i].districts;
        }
      }
      for (let i = 0, coLen = counties.length; i < coLen; i++) {
        var content = counties[i].name;
        var code = counties[i].code;
        var html = '<li data-code="' + code + '">' + content + '</li>';
        $('.addr_county').append(html);
      }
      $('.addr_city').hide();
      $('.addr_county').show();
      $('#city').attr('data-code', $(e.target).attr('data-code'));
    });

    $('.addr_county').on('click', 'li', (e) => {
      var county = $(e.target).html();
      $('#county').val(county);
      $('.addr_county').hide();
      $('#county').attr('data-code', $(e.target).attr('data-code'));
    });

    $('#province').click(() => {
      $('.addr_province').show();
      $('#city').val('');
      $('#county').val('');
    });
    $('#city').click(() => {
      $('.addr_city').show();
    });
    $('#county').click(() => {
      $('.addr_county').show();
    });
  });
  $('.orderfill_cont').on('click', '.newAddr', () => {
    $('.newaddrForm_btn').removeClass('addrModify').addClass('addNewAddr');
  });

  function address(path) {
    var province = $('#province').val();
    var province_code = $('#province').attr('data-code');
    var city = $('#city').val();
    var city_code = $('#city').attr('data-code');
    var county = $('#county').val();
    var county_code = $('#county').attr('data-code');
    var address = $('#address').val();
    var code = $('#code').val();
    var name = $('#name').val();
    var mobile = $('#mobile').val();
    var quhao = $('#quhao').val();
    var phone = $('#phone').val();
    var fenji = $('#fenji').val();
    var tel = quhao + phone + fenji;

    if ($('#default').is(':checked')) {
      var isDefault = true;
    } else {
      isDefault = false;
    }
    var area = {
      province: {
        name: province,
        code: province_code
      },
      city: {
        name: city,
        code: city_code
      },
      district: {
        name: county,
        code: county_code
      }
    };
    para.model.name = name;
    para.model.code = code || '000000';
    para.model.address = address;
    para.model.mobile = mobile;
    para.model.tel = tel;
    para.model.area = area;
    para.model.isDefault = isDefault;
    $.ajax({
      url: path,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(para),
      success: () => {
        $('.model').hide();
        $('.model_bg').hide();
        $.post('/useraddr/list').success((data) => {
          addrData = data.result;
          var html = template('addressTem', data);
          $('.address_tem').html(html);
        });
      }
    });
  }

  $('.model_cont').on('click', '.addrModify', () => {
    address('/useraddr/edit');
  });

  $('.model_cont').on('click', '.addNewAddr', () => {
    address('/useraddr/add');
  });

  $('.model_cancel').click(() => {
    $('.model').hide();
    $('.model_bg').hide();
  });

  // 订单生成提交
  $('.order_submit').on('click', (e) => {
    e.preventDefault();

    const payment = $('input[name=paymethod]:checked').val();
    var confirm_addr = $('.confirm');
    var remark = $('.invoiceInput_long').val();
    var requireAddr = window.requireAddr;
    var receiveName = '';
    var receivePhone = '';
    var receiveAddress = '';
    var districtCode = '';
    if (requireAddr) {
      receiveName = confirm_addr.find('.orderfill_name').html();
      receivePhone = confirm_addr.find('.orderfill_phone').html();
      receiveAddress = confirm_addr.find('.orderfill_addr').text();
      districtCode = confirm_addr.find('.district_name').attr('data-code');
      // 判断是否有选择收货地址
      if (!receiveName) {
        alert('请选择收货地址');
        return;
      }
    }
    para = {
      model: {
        payment,
        p: window.p,
        receiveName,
        receivePhone,
        receiveAddress,
        districtCode,
        remark,
        requireAddr
      }
    };

    // 提交订单数据
    $.ajax({
      url: '/shopcart/GenOrder',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(para),
      success: (data) => {
        if (data.result) {
          window.location.href = dhw.urlmain + 'appo2o#/buyer/dfk';
        } else {
          alert('订单生成失败！');
        }
      }
    });
  });
}
