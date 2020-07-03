
$(document).ready(function(){
    $('.sort-price').hover(
        function(){
            $('.sort-price-icon').addClass('fa-chevron-up');
            $('.sort-price-icon').removeClass('fa-chevron-down');
        },function(){
            $('.sort-price-icon').addClass('fa-chevron-down');
            $('.sort-price-icon').removeClass('fa-chevron-up');
        }
    );
});
let cartBtn = document.getElementById('cartBtn');