// // 账户设置
export default function SettingCtrl($http) {
  var vm = this;
  vm.data = {};
  vm.nameShow = false;
  vm.passwdShow = false;
  vm.able = true;
  vm.pwd_ok = true;
  // 用户名弹窗显示
  vm.user = function () {
    vm.nameShow = true;
  };
  // 密码弹窗显示
  vm.passwd = function () {
    vm.passwdShow = true;
  };
  // 关闭弹窗
  vm.close = function () {
    vm.nameShow = false;
    vm.passwdShow = false;
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
}
