$(() => {
    hideAnotherImages();
    $('.slider-wrapper img').click(() => {
        $('.slider-wrapper :first-child')
            .fadeOut(()=> {
            $('.slider-wrapper img:gt(0)').hide();
            })
            .next('img').fadeIn().end().appendTo('.slider-wrapper');
            hideAnotherImages()
        });
});

function hideAnotherImages() {
    $('.slider-wrapper img:gt(0)').hide();
}
