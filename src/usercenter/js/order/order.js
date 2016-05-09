import $ from 'jquery';
import { dhw } from '../data/data';
// 关闭弹出层
$('.model_cancel').click(() => {
  $('.orderFinish_model').hide();
  $('.orderFinish_model_bg').hide();
});
$('.model_cancel').click(() => {
  $('.model').hide();
  $('.model_bg').hide();
});

var addrData = [];
var para = {
  model: {}
};


// 读取数据
$.post('/useraddr/list').success((data) => {
  addrData = data.result;
  var html = template('addressTem', data);
  $('.address_tem').html(html);
  $('.address_tem').on('click', '#modify', function () {
    var id = $(this).attr('data-id');
    para.model.id = id;
    $('.newaddrForm_btn').removeClass('addNewAddr').addClass('addrModify');
    var did = parseInt($(this).attr('data-id'), 10);
    for (var i = 0, len = addrData.length; i < len; i++) {
      if (did === addrData[i].id) {
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

// 默认地址与发票的选择
$('.address_tem').on('mouseover', '.areaSelect', function () {
  $(this).addClass('selected_addr');
});
$('.address_tem').on('mouseout', '.areaSelect', function () {
  if ($(this).hasClass('confirm')) {
    return false;
  }
  $(this).removeClass('selected_addr');
});
$('.address_tem').on('click', '.areaSelect', function () {
  var index = $(this).index();
  $('.areaSelect').removeClass('confirm selected_addr').eq(index).addClass('confirm selected_addr');
});
// 地区的选择

// var provinces = [];
var cities = [];
var counties = [];
$.getJSON('http://192.168.2.145:8085/Dict/city2?callback=?', (data) => {
  var provinces = data.result;
  // 循环取得省
  for (var i = 0, pLen = provinces.length; i < pLen; i++) {
    var content = provinces[i].name;
    var code = provinces[i].code;
    var html = '<li data-code="' + code + '">' + content + '</li>';
    $('.addr_province').append(html);
  }
  // 循环取得市
  $('.addr_province').find('li').click(function () {
    cities = [];
    $('.addr_city').empty();
    var province = $(this).text();
    $('#province').val(province);
    for (var i = 0, len = provinces.length; i < len; i++) {
      if (province === provinces[i].name) {
        cities = provinces[i].citys;
      }
    }
    for (var j = 0, cLen = cities.length; j < cLen; j++) {
      var content = cities[j].name;
      var code = cities[j].code;
      var html = '<li data-code="' + code + '">' + content + '</li>';
      $('.addr_city').append(html);
    }
    $('.addr_province').hide();
    $('.addr_city').show();
    $('#province').attr('data-code', $(this).attr('data-code'));
  });
  // 循环取得县
  $('.addr_city').on('click', 'li', function () {
    counties = [];
    $('.addr_county').empty();
    var city = $(this).html();
    $('#city').val(city);
    for (var i = 0, cLen = cities.length; i < cLen; i++) {
      if (city === cities[i].name) {
        counties = cities[i].districts;
      }
    }
    for (var k = 0, coLen = counties.length; k < coLen; k++) {
      var content = counties[k].name;
      var code = counties[k].code;
      var html = '<li data-code="' + code + '">' + content + '</li>';
      $('.addr_county').append(html);
    }
    $('.addr_city').hide();
    $('.addr_county').show();
    $('#city').attr('data-code', $(this).attr('data-code'));
  });

  $('.addr_county').on('click', 'li', function () {
    var county = $(this).html();
    $('#county').val(county);
    $('.addr_county').hide();
    $('#county').attr('data-code', $(this).attr('data-code'));
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

// 点击修改与添加新地址
$('.address_tem').on('click', '#modify', () => {
  $('.model_bg').show();
  $('.model').show();
});
$('.orderfill_cont').on('click', '.newAddr', () => {
  $('.model_bg').show();
  $('.model').show();
  document.getElementById('addrForm').reset();
});

// 删除数据
$('.address_tem').on('click', '#delete', function () {
  var conf = confirm('是否确定删除?');
  if (conf) {
    var id = $(this).siblings('#modify').attr('data-id');
    $.post('/useraddr/del', { id: id }).success(() => {
      $.post('/useraddr/list').success((data) => {
        addrData = data.result;
        var html = template('addressTem', data);
        $('.address_tem').html(html);
      });
    });
  }
});

// 设置默认地址
$('.address_tem').on('click', '.operate_items_grey', function () {
  var id = $(this).siblings('#modify').attr('data-id');
  $.post('/useraddr/setdefault', { id: id }).success(() => { });
});


// 地址的修改与保存

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
  para.model.code = code;
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
    success: function () {
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

// 订单生成
$('.nextBtn_btn').click(() => {
  var confirm_addr = $('.confirm');
  var receiveName = confirm_addr.find('.orderfill_name').html();
  var receivePhone = confirm_addr.find('.orderfill_phone').html();
  var receiveAddress = confirm_addr.find('.orderfill_addr').text();
  var districtCode = confirm_addr.find('.district_name').attr('data-code');
  var remark = $('.invoiceInput_long').val();
  var para = {
    model: {
      receiveName: receiveName,
      receivePhone: receivePhone,
      receiveAddress: receiveAddress,
      districtCode: districtCode,
      remark: remark,
      ttid: ttid,
    }
  };
  $.ajax({
    url: '/sys/rshop/OrderBuyer/Add',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(para),
    success: function (data) {
      var id = data.result.id;
      $.post('/order/rshop1/add', { projectID: id }).success((data) => {
        var orderno = data.result.number;
        window.location.href = '/order/rshop1/pay2/' + orderno;
      });
    }
  });
});

$('.model_cancel').click(() => {
  $('.model').hide();
  $('.model_bg').hide();
});
$('.model_cancel').click(() => {
  $('.orderFinish_model').hide();
  $('.orderFinish_model_bg').hide();
});
