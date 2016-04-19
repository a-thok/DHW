export const dhw = {
  imgurl: 'http://192.168.2.10:82/img/',
  imguploadurl: 'http://192.168.2.10:82/uploadimg',
  imgcuturl: 'http://192.168.2.10:82/imagecut.ashx',
  mainurl: '//localhost:8085/',
  staticurl: 'http://192.168.2.10:81',
  urlmain: '//localhost:8085/',
  urlcdn: '//192.168.2.10:81/',
  urlzc: '//localhost:8088/',
  urlkj: '//localhost:8087/',
  urlhr: '//localhost:8086/',
  urlzckj: '//localhost:8091/',
  urlzb: '//localhost:8090/',
  urldiy: '//localhost:8092/',
  urlsrdz: '//localhost:8093/',
  urlcqbh: '//localhost:8094/',
  urlzxsj: '//localhost:8095/',
  urlgsss: '//localhost:8096/',
  urlfj: 'http://192.168.2.10:82/file/',
  urlimg: 'http://192.168.2.10:82/img/',
  urlfjupload: 'http://192.168.2.10:82/uploadfj'
};
// export const dhw = {
//   imgurl: 'http://upload.dreamhiway.com/img/',
//   imguploadurl: 'http://upload.dreamhiway.com/uploadimg',
//   imgcuturl: 'http://upload.dreamhiway.com/imagecut.ashx',
//   mainurl: '//www.dreamhiway.com/',
//   staticurl: 'http://cdn.dreamhiway.com',
//   urlmain: '//www.dreamhiway.com/',
//   urlcdn: '/n.dreamhiway.com/',
//   urlzc: '//zc.dreamhiway.com/',
//   urlkj: '//kj.dreamhiway.com/',
//   urlhr: '//hr.dreamhiway.com/',
//   urlzckj: '//zckj.dreamhiway.com/',
//   urlzb: '//zb.dreamhiway.com/',
//   urldiy: '//diy.dreamhiway.com/',
//   urlsrdz: '//srdz.dreamhiway.com/',
//   urlcqbh: '/bh.dreamhiway.com/',
//   urlzxsj: '//zxsj.dreamhiway.com/',
//   urlgsss: '//gsss.dreamhiway.com/',
//   urlfj: 'http://upload.dreamhiway.com/file/',
//   urlimg: 'http://upload.dreamhiway.com/img/',
//   urlfjupload: 'http://upload.dreamhiway.com/uploadfj'
// };


export const jobCategory = ['不限', '全职', '兼职', '实习'];
export const salary = ['2k以下', '2k-5k', '5k-10k', '10k-15k', '15k-25k', '25k-50k', '50k以上', '面议'];
export const exprience = ['不限', '应届毕业生', '一年以下', '1-3年', '3-5年', '5-10年', '10年以上'];
export const homesex = [{ name: 'male', sex: '男' }, { name: 'female', sex: '女' }];
export const education = ['不限', '大专', '本科', '硕士', '博士'];
// 个人中心基本信息
export const companynum = ['5-10人', '10-50人', '50-100人', '100-200人', '200人以上'];
export const companytrade = [
{ name: 'IT·互联网', value: 1 },
{ name: '房地产', value: 2 },
{ name: '金融', value: 3 },
{ name: '消费品', value: 4 },
{ name: '汽车·制造', value: 5 },
{ name: '医疗·化工', value: 6 },
{ name: '会计', value: 7 }
];
export const companynature = [
  { name: '政府机关/事业单位', value: '政府机关/事业单位' },
  { name: '国营', value: '国营' },
  { name: '私营', value: '私营' },
  { name: '中外合资', value: '中外合资' },
  { name: '外资', value: '外资' },
  { name: '其他', value: '其他' },
];
export const typeids = [
      { id: 1, text: '设计' },
      { id: 2, text: '开发' },
      { id: 3, text: '文案' },
      { id: 4, text: '装修' },
      { id: 5, text: '营销' },
      { id: 6, text: '商务' },
      { id: 7, text: '生活' },
      { id: 8, text: '其他' }
];
// 私人定制
export const category = [{ id: '1', name: '创意定制' }, { id: '2', name: '企业定制' }, { id: '3', name: '找代加工' }, { id: '4', name: '礼品定制' }, { id: '5', name: 'logo定制' }, { id: '6', name: '制服定制' }, { id: '7', name: '3D打印设备定制' }, { id: '8', name: '智能设备硬件加工' }];
// 创意设计品牌
export const brand = [
  { id: '2', name: 'logo设计' },
  { id: '3', name: '名片设计' },
  { id: '5', name: '品牌设计' },
  { id: '6', name: '卡通形象设计' },
  { id: '8', name: '海报设计' },
  { id: '9', name: '宣传册设计' },
  { id: '11', name: '广告牌设计' },
  { id: '12', name: '横幅设计' },
  { id: '14', name: '网店设计' },
  { id: '15', name: '封面设计' },
  { id: '16', name: '包装设计' },
  { id: '17', name: '卡通形象设计' },
  { id: '18', name: 'DM设计' },
  { id: '19', name: '其它宣传品设计' },
  { id: '20', name: '标签设计' },
  { id: '21', name: '易拉宝品设计' },
  { id: '22', name: '户外广告设计' },
  { id: '23', name: '其它' },
];
export const type = [
  { id: 1, name: '开发众包' },
  { id: 2, name: '装修众包' },
  { id: 3, name: '营销众包' },
  { id: 4, name: '电商众包' },
  { id: 5, name: '其它' },
];
// 获取行业
export function getTrade($http, cb) {
  $http.post('/HRZpxxFb/Tradeinfo').success((res) =>
    cb(res)
    );
}
/*
控制器里用法
  getTrade($http, (res) =>
    vm.trade = res.result
  );
*/
