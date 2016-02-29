//省市指令
export default function sCity() {
  return {
    replace :true,
    scope :true,
    template: function (elem,attrs) {
      return `
         <div class="formSet">
        <div class="formSet-doubleWrap" class="clearfix">
          <div class="SelectWrap SelectWrap-first">
            <input class="formSet_input" type="text" ng-model="prov" ng-click="showSelectCont($event)" placeholder="省份" readonly required>
            <ul class="selectCont">
              <li ng-repeat="prov in provs" ng-click="getCitys(prov)">{{prov.name}}</li>
            </ul>
          </div>
          <div class="SelectWrap SelectWrap-second">
            <input class="formSet_input" type="text" ng-model="citym" ng-click="showSelectCont($event)" placeholder="城市" readonly required>
            <ul class="selectCont">
              <li ng-repeat="citym in citys" ng-click="setCity(citym)">{{citym.name}}</li>
            </ul>
          </div>
          <!--这里的模板绑定需要更改 -->
          <div class="SelectWrap">
            <input class="formSet_input" type="text" ng-model="country" ng-click="showSelectCont($event)" placeholder="区/县" readonly required>
            <ul class="selectCont">
              <li ng-repeat="country in countrys" ng-click="setCountry(country)">{{country.name}}</li>
            </ul>
          </div>
          <!--这里的模板绑定需要更改 结束-->
        </div>
      </div> 
      `
    },
    controller:['$scope','$http','$attrs',function(s,$http,$attrs){
      s.dataP = {}
    s.provs = [{code:'1',name:'福建'},{code:'2',name:'广州'}];
        // 保存草稿数据到根作用域
       //s.$parent.draft.basic = "sdfsdf"
       
     s.$parent.getDraft('basic', function (draft) {
      $.extend(s, draft);
      if (s.dataP.area) {
        s.dataP.area = angular.fromJson(s.dataP.area);
        console.log(s.dataP.area);
        s.prov = s.dataP.area.province.name;
        s.citym = s.dataP.area.city.name;
        s.country = s.dataP.area.district.name;
      }
    });
    s.$parent.draft.basic = function () {
      var draft = {};
      draft = s.dataP;
      
      return angular.toJson(draft);
    };
  
    //取得城市的数据
    s.getCitys = (provinces) => {
     
      console.log("省份  "+provinces.name);
        s.citys = [{code:'1',name:'泉州'},{code:'2',name:'深圳'}];
         
        //初始化城市的第一个数据选择
        s.citym = s.citys[0].name;
        s.prov = provinces.name;
        //清空县区的数据
        s.country = '';
        //此操作为用户只进行选择省份的操作
        s.province = {code : provinces.code, name:provinces.name} ;
        s.city = {code: s.citys[0].code, name: s.citym };
        s.district = {code : '' ,name: ''};
        s.dataP.area = {
          province: s.province,
          city: s.city,
          district:s.district
        }
     };
    // 取得县区的信息
     s.setCity = function (citys) {
        console.log("我选择的城市是" + citys.name);
      s.countrys = [{code:'1',name:'dddd'},{code:'2',name:'lllll'}];
      s.country = s.countrys[0].name;
      s.citym = citys.name;
      
      s.city = {code : citys.code, name:citys.name}
      s.district = {code : s.countrys[0].code, name:s.country}
      
      s.dataP.area = {
        province: s.province,
        city: s.city,
        district:s.district
      }
    };
    //设置县 区的model值
    s.setCountry = function(countrys) {
       console.log("我选择的乡村是" + countrys.name);
      s.country = countrys.name
      
      s.district = {code : countrys.code, name:s.country}
      s.dataP.area = {
        province: s.province,
        city: s.city,
        district:s.district
      }
    }
       
    }],
  }
}