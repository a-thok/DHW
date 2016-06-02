import $ from 'jquery';

export default function shoppingCart() {
  // 计算数量和价格的方法
  function calcTotalCost(elem) {
    let totalCount = 0;
    let totalPrice = 0;

    const sotre = elem.parents('.cart_store');
    const checkItems = sotre.find('.cart_check');
    const countItems = sotre.find('.cart_count_input');
    const priceItems = sotre.find('.cart_unitPrice');
    const totalCountElem = sotre.find('.cart_totalCount span');
    const totalPriceElem = sotre.find('.cart_totalCost span');

    checkItems.each((i, el) => {
      // 只计算选中的
      if (el.checked) {
        const count = +countItems[i].value;
        const price = +priceItems[i].innerHTML;
        // 计入总数和总价
        totalCount += count;
        totalPrice += (price * count);
      }
    });
    totalCountElem.text(totalCount);
    totalPriceElem.text(totalPrice.toFixed(2));
  }

  // 检查是否全选的方法
  function isCheckedAll(elem) {
    let all = true;
    let store = elem.parents('.cart_store');
    store.find('.cart_check').each((i, el) => {
      if (!el.checked) all = false;
    });
    store.find('.cart_selectAll').prop('checked', all);
  }

  // 单选
  $('.cart_check').on('click', (e) => {
    const self = $(e.target);
    isCheckedAll(self);
    calcTotalCost(self);
  });

  // 全选
  $('.cart_selectAll').on('click', (e) => {
    const self = $(e.target);
    let store = self.parents('.cart_store');
    store.find('.cart_check').prop('checked', e.target.checked);
    calcTotalCost(self);
  });

  // 修改数量
  function modifyCount(elem) {
    const parent = elem.parents('tr');

    const count = parent.find('.cart_count_input');
    const price = +parent.find('.cart_unitPrice').text();
    const totalPrice = (price * count.val()).toFixed(2);
    parent.find('.cart_cost').text(totalPrice);

    const checkItem = parent.find('.cart_check');
    if (checkItem[0].checked) calcTotalCost(elem);
  }

  $('.cart_count_input').on('keyup', (e) => {
    const self = $(e.target);
    let count = +self.val();
    if (count < 1) self.val(1);
    modifyCount(self);
  });

  $('.cart_count_btn').on('click', (e) => {
    const self = $(e.target);
    const count = self.parents('tr').find('.cart_count_input');
    const num = +count.val();

    if (self.hasClass('decr')) {
      if (num > 1) count.val(num - 1);
    } else {
      count.val(num + 1);
    }
    modifyCount(self);
  });

  // 点击单个删除
  $('.cart_delete').on('click', (e) => {
    const item = $(e.target).parents('tr');
    const id = item.attr('data-id');
    $.post('/ShopCart/del', { id }).success((data) => {
      if (data.success) {
        item.remove();
      } else {
        alert('服务器错误，请稍后重试');
      }
    });
  });

  // 清空购物车
  $('.cart_deleteAll').on('click', (e) => {
    const store = $(e.target).parents('.cart_store');
    const ddid = store.attr('data-ddid');
    $.post('/ShopCart/DelByDdid', { ddid }).success((data) => {
      if (data.success) {
        store.remove();
      } else {
        alert('服务器错误，请稍后重试');
      }
    });
  });
}

// 结算
$('.cart_payment_btn').on('click', (e) => {
  const store = $(e.target).parents('.cart_store');
  let data = [];

  const checkedItems = store.find('.cart_check:checked');
  // 没有选中的商品
  if (!checkedItems.length) {
    alert('请选择要生成订单的商品');
    return;
  }
  // 生成订单
  checkedItems.each((i, checkedItem) => {
    const item = $(checkedItem).parents('tr');
    const productid = item.attr('data-productid');
    const skuid = item.attr('data-skuid');
    const count = item.find('.cart_count_input').val();
    data.push({
      productid,
      skuid,
      count
    });
  });

  const form = $('#payForm');
  form[0].p.value = JSON.stringify(data);
  form.submit();
});
