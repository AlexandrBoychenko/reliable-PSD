$(() => {
    handleNavBar();
    openBurger();
});

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