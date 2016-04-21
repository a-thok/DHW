// // 账户设置
export default function SettingCtrl($http) {
  var vm = this;
  vm.data = {};
  vm.nameShow = false;
  vm.passwdShow = false;
  vm.phoneShow = false;
  vm.emailShow = false;
  vm.able = true;
  vm.pwd_ok = true;
  vm.phone_able = true;
  vm.email_able = true;
  // 用户名弹窗显示
  vm.user = function () {
    vm.nameShow = true;
  };
  // 密码弹窗显示
  vm.passwd = function () {
    vm.passwdShow = true;
  };
  //手机弹窗显示
  vm.phone = function () {
    vm.phoneShow = true;
  }
  //邮箱弹窗显示
  vm.email = function () {
    vm.emailShow = true;
  }

  // 关闭弹窗
  vm.close = function () {
    vm.nameShow = false;
    vm.passwdShow = false;
    vm.phoneShow = false;
    vm.emailShow = false;
  };
  // 检测用户名
  vm.conf = function () {
    $http.post('/Reg/Check', { keyword: vm.data.newName }).success(function (data) {
      if (data.result === true) {
        vm.rightName = false;
        vm.able = false;
      } else {
        vm.rightName = true;
      }
    });
  };
  // 用户名修改确认
  vm.submit = function () {
    $http.post('/UserAccount/NameEdit', { name: vm.data.newName }).success(function () {
      vm.nameShow = false;
      vm.data.newName = '';
      alert('用户名修改成功！');
    });
  };
  // 密码修改确认
  vm.pwdSubmit = function () {
    var para = Object.assign({}, vm.data);
    if (para.oldpwd === para.newpwd) {
      alert('新旧密码重复！');
      vm.data = '';
    }
    else {
      if (para.newpwd !== para.pwd_again) {
        alert('确认密码与新密码不一致！请重新输入！');
        vm.data.newpwd = '';
        vm.data.pwd_again = '';
      } else {
        $http.post('/UserAccount/CheckPwd', para).success(function (data) {
          if (data.result.code === 1) {
            alert('旧密码错误!');
            vm.data.oldpwd = '';
          } else {
            alert('密码修改成功！');
            vm.data = '';
            vm.passwdShow = false;
          }
        });
      }
    }
  };
  //检测手机号码
  vm.sendpyzm = function () {
    $http.post('/UserAccount/BindingPhoneGetVerify', { phone: vm.data.phone }).success(function (data) {
      if (data.result.code === 1) {
        vm.phone_able = true;
        alert('该手机已绑定其他帐号，请勿重复使用！')
      }
      else {
        vm.phone_able = false;
      }
    });
  };
  //绑定手机号码
  vm.phoneSubmit = function () {
    $http.post('/UserAccount/BindingPhone', { phone: vm.data.phone, mobile_code: vm.data.mobile_code }).success(function () {
      if (data.result.success === false) {
        vm.data.mobile_code = '';
        alert(data.result.msg);
      } else {
        alert('手机绑定成功！');
        vm.data = '';
        vm.phoneShow = false;
      }
    });
  };
  //检测邮箱
  vm.sendeyzm = function () {
    $http.post('/UserAccount/BindingEmailAdd', { emailaddress: vm.data.emailaddress }).success(function (data) {
      if (data.result.code === 1) {
        vm.email_able = true;
        alert('该邮箱已绑定其他帐号，请勿重复使用！')
      }
      else {
        vm.email_able = false;
      }
    });
  };
  //绑定邮箱
  vm.emailSubmit = function () {
    $http.post('/UserAccount/BindingEmailList', { emailaddress: vm.data.emailaddress, guid: vm.data.guid }).success(function (data) {
      console.log(data)
      if (data.result.success === false) {
        vm.data.guid = '';
        alert(data.result.msg);
      } else {
        alert('邮箱绑定成功！');
        vm.data = '';
        vm.emailShow = false;
      }
    });
  };
};

