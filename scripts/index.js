$(function(){
    $('.slider-wrapper img:gt(0)').hide();
    $('.slider-wrapper img').click(function(){
        $('.slider-wrapper :first-child').fadeOut().next('img').fadeIn().end().appendTo('.slider-wrapper');
    });
});