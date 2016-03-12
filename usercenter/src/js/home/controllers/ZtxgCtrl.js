// // import colpick from 'colpick';
export default function ZtxgCtrl($scope,$http){
    var vm=this;
    vm.data = {
      themes: {}
    };
    $http.post('/CompanyHomeEdit/TitleDetail').success( (data) => {
     vm.data = data.result;
      if (vm.data.themes === null) {
        vm.data.themes = {}
      }
      vm.data.themes = JSON.parse(vm.data.themes);
    });
// 取色器插件
    $('#picker').colpick({

      layout: 'hex',

      submit: 0,

      colorScheme: 'dark',

      onChange:  (hsb, hex, rgb, el, bySetColor) => {

        $(el).css('border-color', '#' + hex);
        if (!bySetColor) $(el).val(hex);
        vm.data.themes.themeColor = '#' + hex;
        vm.$digest();
      }
    }).keyup( () => {

      $(this).colpickSetColor(this.value);
    });

    vm.submit = ()=> {
      var para = $.extend(true, {}, vm.data);
      para.themes = angular.toJson(para.themes);
      $http.post('/CompanyHomeEdit/TitleSave', para).success(() => {
      })
    }
}