export default function SellerdfhCtrl($http) {
  var vm = this;
  vm.visible = false;
  vm.data = {};

  // 物流编号
  vm.codings = [
    { id: 'DHL', name: 'DHL' },
    { id: 'EMS', name: 'EMS' },
    { id: 'FEDEX', name: 'FedEx联邦快递' },
    { id: 'HHTT', name: '天天快递' },
    { id: 'HTKY', name: '百世汇通' },
    { id: 'JD', name: '京东快递' },
    { id: 'QFKD', name: '全峰快递' },
    { id: 'SF', name: '顺丰快递' },
    { id: 'STO', name: '申通快递' },
    { id: 'WXWL', name: '万象物流' },
    { id: 'YD', name: '韵达快递' },
    { id: 'YTO', name: '圆通速递' },
    { id: 'YZPY', name: '邮政平邮/小包' },
    { id: 'ZTKY', name: '中铁快运' },
    { id: 'ZTO', name: '中通速递' },
    { id: 'ZTWL', name: '中铁物流' },
    { id: 'ZYWL', name: '中邮物流' }
  ];

  vm.confirmsend = (number) => {
    vm.visible = true;
    vm.data.number = number;
  };
  vm.submit = () => {
    var para = Object.assign({}, vm.data);
    $http.post('/Sys/o2o/OrderSeller/SellerUpdate', para).success((d) => {
      if (d.success) {
        alert('操作成功');
        location.reload();
      }
    });
  };
  vm.close = () => {
    vm.visible = false;
  };
}
