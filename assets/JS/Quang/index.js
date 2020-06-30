document.addEventListener("DOMContentLoaded", function (event) {
    let registerBtn = document.getElementById("registerBtn");
    let loginBtn = document.getElementById("loginBtn");
    let notifyForm = document.getElementById("notifyForm");
    registerBtn.addEventListener("click", function(){
        notifyForm.action = "/html/Quang/register.html";
    });

    loginBtn.addEventListener("click", function(){
        notifyForm.action = "/html/Quang/login.html";
    });
});