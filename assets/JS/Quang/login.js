document.addEventListener("DOMContentLoaded", function (event) {
  let toggleIcon = document.getElementById("toggleIcon");
  let inputPassword = document.getElementById("inputPassword");
  toggleIcon.addEventListener("click", function () {
    if (inputPassword.type == "password") {
      toggleIcon.classList = "show fas fa-eye-slash";
      inputPassword.type = "text";
    } else {
      toggleIcon.classList = "show fas fa-eye";
      inputPassword.type = "password";
    }
  });
  let loginButton = document.getElementById("loginButton");
  let inputUserName = document.getElementById("inputUserName");
  let loginForm = document.getElementById("loginForm");
  loginButton.addEventListener("click", function (e) {
    if (inputUserName.value == "" || inputPassword.value == "") {
      e.preventDefault();
      alert("Bạn Chưa Nhập Đủ Thông Tin !");
    }
    else{
      loginForm.action = "/html/Quang/indexafterlogin.html";
    }
  });
});
