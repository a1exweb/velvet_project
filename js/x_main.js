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

$(window).on('load resize', function() {
    if ($(window).width() < 640) {
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel(
            {
                items: 1,
                nav: true,
                navText: [' ',' ']
            }
        );
    });
    }
});

$('[data-show="mobile-menu"').on('click', function() {
    $('.menu-mobile').addClass('menu-mobile_active')
});

$('[data-close="mobile-menu"').on('click', function() {
    $('.menu-mobile').removeClass('menu-mobile_active')
});