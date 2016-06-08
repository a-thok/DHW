import $ from 'jquery';

export default function goSearch() {
  const buts = $('.header_searchbox button');
  const input = $('#su');
  function search(api) {
    const keyword = input.val();
    window.location.href = `/${api}/${window.prov}-${window.type}?keyword=${keyword}`;
  }
  $(buts[0]).on('click', () => search('product'));
  $(buts[1]).on('click', () => search('store'));
  input.on('keyup', (e) => {
    if (e.keyCode === 13) search('product');
  });

  const areaList = $('.navi_area_list');
  areaList.on('click', 'a', (e) => {
    e.preventDefault();

    const self = $(e.target);
    const prov = self.attr('data-key');

    const keyword = input.val();

    document.cookie = `prov=${prov}; path=/`;
    window.location.href = `/product/${prov}-${window.type}?keyword=${keyword}`;
  });
}
