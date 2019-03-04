$(() => {
    handleClickOutside();
    handleNavBar();
    openBurger();
});

function handleClickOutside() {
    $('html').click(function() {
        $('.menu-burger').removeClass('menu-open');
    });

    $('.menu-burger').click(function(event){
        event.stopPropagation();
    });
}

function handleNavBar() {
    $('.parent-sub').hover(() => {
        $(event.target).children().show();
    }, () => {
        $('.submenu').hide()
    });

    $('.submenu').mouseover(() => {
        $(event.target).children().show();
    });
}

function openBurger() {
    $('.menu-burger').on('click', () => {
        $('.menu-burger').toggleClass('menu-open');
    });
}
