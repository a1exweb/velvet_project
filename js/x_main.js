var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        autoHeight: true,
        setWrapperSize: true,
        roundLengths: true
    },
});

$(window).on('load resize', function () {
    if ($(window).width() < 640) {
        $(document).ready(function () {
            $(".owl-carousel").owlCarousel({
                items: 1,
                nav: true,
                navText: [' ', ' ']
            });
        });
    }
});

$(document).ready(function () {
    $(".owl-carousel-catalog").owlCarousel({
        nav: true,
        loop: true,
        autoWidth: true,
        margin: 50,
        navText: [' ', ' '],
    });
});

$('[data-show="mobile-menu"').on('click', function () {
    $('.menu-mobile').addClass('menu-mobile_active')
});

$('[data-close="mobile-menu"').on('click', function () {
    $('.menu-mobile').removeClass('menu-mobile_active')
});

$('[data-show="shopping"]').on('click', function () {
    $('.modal-shopping').addClass('modal-shopping_active')
    $('.modal-shopping-overlay').addClass('modal-shopping-overlay_active')
});

$(window).on('click', function (event) {
    if (event.target == $('.modal-shopping-overlay_active')[0]) {
        $('.modal-shopping-overlay').removeClass('modal-shopping-overlay_active')
        $('.modal-shopping').removeClass('modal-shopping_active')
    }
})

$('[data-show="profile"]').on('click', function () {
    $('.modal-profile').addClass('modal-profile_active')
    $('.modal-profile-overlay').addClass('modal-profile-overlay_active')
});


$('[data-show="apply"]').on('click', function () {
    $('.modal-apply').addClass('modal-apply_active')
});

$(window).on('click', function (event) {
    if (event.target == $('.modal-profile-overlay_active')[0]) {
        $('.modal-profile-overlay').removeClass('modal-profile-overlay_active')
        $('.modal-profile').removeClass('modal-profile_active')
    }
    if (event.target == $('.modal-apply')[0]) {
        $('.modal-apply').removeClass('modal-apply_active')
    }
})

