document.addEventListener("DOMContentLoaded", function (event) {
    let searchBtn = document.getElementById("searchBtn");
    let searchTxt = document.getElementById("searchTxt");
    searchBtn.addEventListener("click", function(e){
        if(searchTxt.value == ""){
            e.preventDefault();
            alert("Bạn phải nhập thông tin thì mới tìm được nhé !");
        }
    });
});