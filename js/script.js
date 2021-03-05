$(document).ready(function () {
    $('.card-header').mouseover(function () { 
        $('.card-header-top-box').addClass('show');
    });
    $('.card-header').mouseout(function () { 
        $('.card-header-top-box').removeClass('show');
    });
});