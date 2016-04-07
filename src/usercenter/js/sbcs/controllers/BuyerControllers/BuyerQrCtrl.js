export default function BuyerQrCtrl($http) {
  let vm = this;
  vm.list = [
    { name: '商标图片', key: 'img', width: '15%', img: true },
    { name: '商标名称', key: 'name', width: '15%' },
    { name: '使用范围', key: 'type', width: '20%' },
    { name: '状态', key: 'stateName', width: '15%' },
    { name: '订单金额', key: 'totalFee', width: '15%' },
    { name: '交易形式', key: 'tradetypeName', width: '10%' },
  ]
  vm.confirm = (id) => {
    $http.post('/sys/rshop/OrderBuyer/CertificateConfirm', {id: id}).success(() => {
      location.reload();
    })
  }
  
}