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

    /* Countdown */
    function updateCountdown() {
        const now = new Date();
        const targetDate = new Date('2025-08-04T00:00:00');
        const diff = targetDate - now;
    
        if (diff <= 0) {
          $('#days, #hours, #minutes, #seconds').text('00');
          clearInterval(timer);
          return;
        }
    
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
    
        $('#days').text(String(days).padStart(2, '0'));
        $('#hours').text(String(hours).padStart(2, '0'));
        $('#minutes').text(String(minutes).padStart(2, '0'));
        $('#seconds').text(String(seconds).padStart(2, '0'));
      }
    
      const timer = setInterval(updateCountdown, 1000);
      updateCountdown();

    /* Popup speaker */
    $(document).ready(function () { 
        $('.sp-card').on('click', function (e) {
            
          if ($(e.target).hasClass('close-btn')) return;
          
          $('.sp-card').not(this).removeClass('popup-active'); 

          $(this).addClass('popup-active');
        }); 

        $('.close-btn').on('click', function (e) {
          e.stopPropagation();  
          $(this).closest('.sp-card').removeClass('popup-active');
        });

        
         $(document).on('click', function (e) {
        if (!$(e.target).closest('.sp-card').length) {
          $('.sp-card').removeClass('popup-active');
        }
      });

      });


})(jQuery);