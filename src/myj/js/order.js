import $ from 'jquery';

export default function order() {
  $('.order_submit').on('click', (e) => {
    e.preventDefault();

    const payment = $('input[name=paymethod]:checked').val();
    if (!payment) {
      alert('请选择支付方式');
      return;
    }

    $.post('/shopcart/GenOrder', {
      payment,
      p: window.p
    }).success((data) => {
      if (data.result) {
        window.location.href = dhw.urlmain + 'appo2o#/buyer/dfk';
      } else {
        alert('订单生成失败！');
      }
    });
  });
}
