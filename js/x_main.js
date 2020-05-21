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

if ($(window).width() > 640) {
    $('.our-instagram-photo').on('click', function() {
        $('.our-instagram').addClass('our-instagram_active');
        $('body').css('overflow-y', 'hidden');
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: [' ', ' ']
        });
        $('.button-show-more').css('display', 'none');
    });
    
    $('.our-instagram__close').on('click', function() {
        $('.our-instagram').removeClass('our-instagram_active');
        $('body').css('overflow-y', 'scroll');
        $(".owl-carousel").trigger('destroy.owl.carousel');
        $('.button-show-more').css('display', 'flex');
    });
}


$(window).on('load resize', function () {
    if ($(window).width() < 640) {
        $(document).ready(function () {
            $(".owl-carousel").owlCarousel({
                items: 1,
                loop: true,
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

$('[data-show="category"]').on('click', function () {
    $('.category-show').toggleClass('category-show_active')
});

$('[data-show="size"]').on('click', function () {
    $('.size-show').toggleClass('size-show_active')
});

$('[data-show="color"]').on('click', function () {
    $('.color-show').toggleClass('color-show_active')
});

$('[data-show="sort"]').on('click', function () {
    $('.sort-show').toggleClass('sort-show_active')
});

$(window).on('click', function (event) {
    if (event.target == $('.modal-profile-overlay_active')[0]) {
        $('.modal-profile-overlay').removeClass('modal-profile-overlay_active')
        $('.modal-profile').removeClass('modal-profile_active')
    }
    if (event.target == $('.modal-apply')[0]) {
        $('.modal-apply').removeClass('modal-apply_active')
    }
    if (event.target !== $('.category-show')[0] && event.target !== $('[data-show="category"]')[0]) {
        $('.category-show').removeClass('category-show_active')
    }
    if (event.target !== $('.size-show')[0] && event.target !== $('[data-show="size"]')[0]) {
        $('.size-show').removeClass('size-show_active')
    }
    if (event.target !== $('.color-show')[0] && event.target !== $('[data-show="color"]')[0]) {
        $('.color-show').removeClass('color-show_active')
    }
    if (event.target !== $('.sort-show')[0] && event.target !== $('[data-show="sort"]')[0]) {
        $('.sort-show').removeClass('sort-show_active')
    }
})

