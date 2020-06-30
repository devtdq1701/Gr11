let coll = document.getElementsByClassName("user-sidebar-link");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var subProfile = this.nextElementSibling;
    if (subProfile.style.maxHeight){
        subProfile.style.maxHeight = null;
    } else {
        subProfile.style.maxHeight = subProfile.scrollHeight + "px";
    }
  });
}