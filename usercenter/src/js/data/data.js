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
//   urlgsss: '//gsss.dreamhiway.com/'
// };

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
    urlgsss: '//localhost:8096/'
};

export const jobCategory = ['不限', '全职', '兼职', '实习'];
export const salary = ['2k以下', '2k-5k', '5k-10k', '10k-15k', '15k-25k', '25k-50k', '50k以上'];
export const exprience = ['不限', '应届毕业生', '一年以下', '1-3年', '3-5年', '5-10年', '10年以上'];
export const education = ['不限', '大专', '本科', '硕士', '博士'];

// 获取行业
export function getTrade($http, cb) {
  $http.post('/HRZpxxFb/Tradeinfo').success((res) =>
    cb(res)
    );
}

// 翻页相关设置和方法
export function pagination(ctrl, $http) {
  ctrl.currentPage = 1;
  ctrl.totalItems = 0;
  ctrl.page =  {
    pageSize: 10,
    pageIndex: 1
  }
  var loadList = function() {
    $http.post('/HRTdjl/List', ctrl.page).success((res) => {
      ctrl.totalItems = res.result.total;
    });
  };
  
  loadList();
  
  ctrl.pageChanged = function() {
    ctrl.page.pageIndex = ctrl.currentPage;
    loadList();
  };
}

// 控制器里调用翻页设置和方法
// pagination(this, $http);

// 翻页控件HTML示例
// <div class="paginationWrap">
//   <div uib-pagination
//     ng-model="fbzw.currentPage"
//     total-items="fbzw.totalItems"
//     boundary-links="true"
//     force-ellipses="true"
//     first-text="首页"
//     previous-text="«"
//     next-text="»"
//     last-text="尾页"
//     max-size="10"
//     ng-change="fbzw.pageChanged()"
//     ng-if="fbzw.totalItems"
//   ></div>
// </div>