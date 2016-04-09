// 发布众筹控制器
import $ from 'jquery';
import angular from 'angular';
export default function FbCtrl($scope, $http, $state, $location) {
  // var $scope = this;
  $scope.urlstate = $state;

  // 头部标签路由转跳
  $scope.route = function (routeName, prevRoute) {
    $location.path('/fb/' + routeName);
    $scope.saveDraft(prevRoute);
  };

  // 草稿数据
  $scope.draft = {};
  // 验证数据
  $scope.isValid = {
    return: true
  };
  // 验证方法
  $scope.setValid = function (current, async) {
    var isValid = true;
    // $('.isValid').each(() => {
      if ( $('.isValid').is('input[disabled]')) {
        isValid = false;
      }
    // });
    if (async) {
      $scope.$apply(() => {
        $scope.isValid[current] = isValid;
      });
    } else {
      $scope.isValid[current] = isValid;
    }
  };

  // 获取验证
  // 获取草稿和验证
  $scope.getDraft = function (minor, fn) {
    // 获取草稿
    $http.post('/AppDraft/GetSub', {
      type: 'crowdfunding',
      mainmark: $scope.mainmark,
      minor: minor
    }).success((data) => {
      fn(data.result.content);
    });
    // 获取验证
    $http.post('/AppDraft/GetSub', {
      type: 'crowdfunding',
      mainmark: $scope.mainmark,
      minor: 'isvalid'
    }).success((data) => {
      $.extend($scope.isValid, data.result.content);
    });
  };
  // 保存草稿功能-提交草稿和验证
  $scope.saveDraft = function (currentName, direction, isManual) {
    // var mainmark = $location.search().id;
    // 如果上一个标签不是预览，就提交相关数据
    if (currentName !== 'ProjectLaunch.preview') {
      var current = currentName.split('.')[1];
      var content = $scope.draft[current]();
      $http.post('/AppDraft/SaveSub', { type: 'crowdfunding', mainmark: $scope.mainmark, minor: current, content: content }).success(()=> {
        if (isManual) {
          $('.saveTip-' + current).text('保存成功');
        }
      });

      // 提交验证
      $scope.setValid(current);
      var isValid = $.extend({}, $scope.isValid);
      isValid = angular.toJson(isValid);
      $http.post('/AppDraft/SaveSub', { type: 'crowdfunding', mainmark: $scope.mainmark, minor: 'isvalid', content: isValid }).success(() => {
        // 成功
      });
    }

    // 点击上一步，下一步跳转路由，标签
    if (direction === 1) {// 下一步
      var next;
      switch (current) {
        case 'basic':
          next = 'project';
          break;
        case 'project':
          next = 'detail';
          break;
        case 'detail':
          next = 'payback';
          break;
      }
      $location.path('/fb/' + next);
      $(document).scrollTop(0);
    } else if (direction == 0) {
      var prev;
      switch (current) {// 上一步
        case 'project':
          prev = 'basic';
          break;
        case 'detail':
          prev = 'project';
          break;
        case 'payback':
          prev = 'detail';
          break;
      }
      $location.path('/fb/' + prev);
      $(document).scrollTop(0);
    }
  };
  // 提交审核
  $scope.submit = function () {
    $http.post('/CpzcFb/Sumbit', {
      mainmark: $scope.mainmark
    }).success((d) => {
      if (d.success) {
        window.location.href = '#/hasfb';
      } else {
        alert('发布失败');
      }
    });
  };
  // 显示下拉框的行为
  $scope.showSelectCont = function (event) {
    event.stopPropagation();
    $('.selectCont').hide();
    $(event.target).next().show();
  };
  // 隐藏下拉框
  $scope.hideSelectCont = function () {
    $('.selectCont').hide();
  };
  // 省市选择 默认省市
  $scope.provinces = (() => {
    $http.post('/Dict/city').success((res) => {
      $scope.areaData = res.result;
      $scope.provs = $scope.areaData.filter((item) => {
        return item.type === 'province';
      });
    });
  })();

  // 字数统计方法
  $scope.wordCount = function (elem) {
    var count = elem.val().length;
    var max = elem.attr('maxlength');
    elem.parents('.count').find('.formSet_count_used').text(max - count);
  };
  // 监视文本框，一变化就重新统计字数
  $scope.wordWatch = (function () {
    $('.content').on('input propertychange', '.count input, .count textarea', function () {
      $scope.wordCount($(this));
    });
  }());
  var para = $location.search();
  if (para.id) {
    if ($location.path() === '/fb/') {
      $location.path('/fb/basic').search(para);
    }
  } else {
    $http.post('/AppDraft/GetMainmark', { type: 'crowdfunding', minor: 'basic' }).success((data) => {
      $scope.mainmark = data.result.mainmark;
    });
  }
}
