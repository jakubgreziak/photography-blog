$(document).ready(function(){
    
    $('.menubar-togglemenu').on('click', function(){
        var $this = $(this);
        $('.menubar-links').toggleClass('toggle');
        $this.toggleClass('icon-bars').toggleClass('icon-close');
    });
    
    $(this).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 200) {
            $('.button-back').fadeIn(300);
        } else {
            $('.button-back').fadeOut(300);
        }
    });
    
    $('a[href^="#"]').on('click', function(event) {
        var target = $( $(this).attr('href') );
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 750);
        }
    });
    
    $(".reviews-slider").owlCarousel({
        loop: true,
        dots: true,
        dotsEach: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4500,
        autoplayHoverPause: true,
        items: 1
    });
    
    $('.contact-form').validate({ 
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 49
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 15,
                maxlength: 500
            }
        },
        errorClass: "js-error",
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "This label must be at least 3 characters long",
                maxlength: "This label must be at most 49 characters long"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            message: {
                required: "Please enter your message",
                minlength: "This label must be at least 15 characters long",
                maxlength: "This label must be at most 500 characters long"
            }
        }
    });
    
});
          
