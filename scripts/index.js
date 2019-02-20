$(function(){
    $('.fadein p:gt(0)').hide();
    setInterval(function(){$('.fadein > :first-child').fadeOut().next('p').fadeIn().end().appendTo('.fadein');}, 3000);
});​