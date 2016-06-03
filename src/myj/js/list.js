import $ from 'jquery';
import loadList from './loaddata.js';

export default function list(config) {
  $('.myjnav_l').mouseenter(() => $('.myjnav_area').show()).
    mouseleave(() => $('.myjnav_area').hide());

  // 搜索关键字
  const keyword = $.trim($('.search_input').val());
  if (keyword) config.params.keyword = keyword;

  const activeCity = $('.filterBox_item.is_active[data-city]').attr('data-city');
  const activeType = $('.filterBox_item.is_active[data-type]').attr('data-type');
  const container = $(config.container);
  if (activeCity === '00') {
    container.html('<div class="myjListTip">请选择城市范围</div>');
    return;
  } else if (activeType === '0') {
    container.html('<div class="myjListTip">请选择类型</div>');
    return;
  } else {
    // 首次加载
    if (window.ddid) {
      config.params.ddid = window.ddid;
    } else {
      config.params.city = activeCity;
      config.params.type = activeType;
    }
    loadList(config);
  }

  // 选择 城市 和 类型
  $('.filterBox_dl').on('click', 'dd', (e) => {
    const active = $(e.target);
    active.parent().find('dd').removeClass('is_active');
    active.addClass('is_active');

    const prop = active.parent().index() === 0 ? 'city' : 'type';
    config.params[prop] = active.attr(`data-${prop}`);
    loadList(config);
  });

  // 排序
  const orderbyItems = $('.orderBy_item');
  orderbyItems.on('click', (e) => {
    const target = $(e.target);

    if (target.hasClass('is_active')) {
      if (target.hasClass('noAsc')) return;
      config.params.asc = +!!!config.params.asc;
      if (config.params.asc) {
        target.addClass('up');
      } else {
        target.removeClass('up');
      }
    } else {
      orderbyItems.removeClass('is_active');
      orderbyItems.removeClass('up');
      target.addClass('is_active');

      const text = target.text();
      config.params.orderby = text;
      config.params.asc = 0;
    }
    loadList(config);
  });

  // 搜索
  $('.search_sp').on('click', () => {
    const keyword = $.trim($('.search_input').val());
    if (!keyword) return;
    config.params.keyword = keyword;
    loadList(config);
  });
}
