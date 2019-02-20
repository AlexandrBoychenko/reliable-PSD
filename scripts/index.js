$(function(){
    $('.slider-wrapper img:gt(0)').hide();
    setInterval(function(){$('.slider-wrapper :first-child').fadeOut().next('img').fadeIn().end().appendTo('.slider-wrapper');}, 3000);
});