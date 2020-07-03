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

let yearOptions = document.getElementById('yearOptions')
  for(let i = 2020; i >= 1900; i--){
    let j = i.toString();
    let str = '<div class="year-option">' + j +'</div>';
    yearOptions.innerHTML += str;
  }

let day = document.getElementById('day');
let dayOptions = document.getElementById('dayOptions');
let month = document.getElementById('month');
let monthOptions = document.getElementById('monthOptions');
let year = document.getElementById('year');
let dayIcon = document.getElementById('dayIcon');
let monthIcon = document.getElementById('monthIcon');
let yearIcon = document.getElementById('yearIcon');

function hideShow(x, y, z) {
  x.addEventListener('click', function(){
    if(y.style.display == "none") {
      z.classList = "fas fa-chevron-up";
      y.style.display = "block";
    }
    else {
      z.classList = "fas fa-chevron-down";
      y.style.display = "none";
    }
  })
}

day.onclick = hideShow(day, dayOptions, dayIcon);
month.onclick = hideShow(month, monthOptions, monthIcon);
year.onclick = hideShow(year, yearOptions, yearIcon);

let dayOption = document.getElementsByClassName('day-option');
let monthOption = document.getElementsByClassName('month-option');
let yearOption = document.getElementsByClassName('year-option');


function inner(x, y) {
    x.addEventListener('click', function(){
      y.innerHTML = x.innerHTML;
    })
}
let dayText = document.getElementById('dayText');
let monthText = document.getElementById('monthText');
let yearText = document.getElementById('yearText');
for(let i = 0; i<  dayOption.length; i++) {
  inner(dayOption[i], dayText);
}
for(let i = 0; i<  monthOption.length; i++) {
  inner(monthOption[i], monthText);
}
for(let i = 0; i<  yearOption.length; i++) {
  inner(yearOption[i], yearText);
}

