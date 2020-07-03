let registerBtn = document.getElementById('registerBtn');
let inputStd = document.getElementById("inputStd");

registerBtn.addEventListener('click', function (e) {
    if (inputStd.value == "") {
      e.preventDefault();
      alert("Bạn Chưa Nhập Đủ Thông Tin !");
    }
  })

