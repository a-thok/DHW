export default function BuyerCtrl() {
  let vm = this;
  vm.listTabs = [
    {
      name: '全部',
      url: '.all',
    },
    {
      name: '待付款',
      url: '.dfk',
    },
    {
      name: '待上传资料',
      url: '.sc',
    },
    {
      name: '证书确认',
      url: '.qr',
    },
    {
      name: '付余款',
      url: '.fyk',
    },
    {
      name: '待发货',
      url: '.dfh',
    },
    {
      name: '待上报',
      url: '.dsb',
    },
    {
      name: '交易完成',
      url: '.wc',
    },
    // {
    //   name: '已取消',
    //   url: '.yqx',
    // },
  ];
}
