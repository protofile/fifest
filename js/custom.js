(function ($) {

    "use strict";

    /* Slick carousel */
    $('.default-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        arrows: false,
        variableWidth: true
    });

    /* Active menu */
    $('ul.navbar-nav li.nav-item .nav-link').on('click', function (e) {
        $('ul.navbar-nav li.nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    });


})(jQuery);