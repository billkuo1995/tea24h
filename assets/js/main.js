jQuery("#carousel").owlCarousel({
    autoplay: true,
    rewind: true,
    /* use rewind if you don't want loop */
    margin: 20,
    /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 3
        },

        1024: {
            items: 3
        },

        1366: {
            items: 3
        }
    }

});




$(document).ready(function() {
    $("#carousel2").owlCarousel({
        autoplay: true,
        rewind: true,
        /* use rewind if you don't want loop */
        margin: 20,
        /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        dots: false,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },

            300: {
                items: 1
            },

            800: {
                items: 2
            },

            1024: {
                items: 3
            },


            1366: {
                items: 3
            }
        }

    });

    // navbar 
    $(".menu-expand").click(function() {

        if ($(this).next(".sub-menu").hasClass("active")) {
            $(this).parent().siblings("li").find(".sub-menu").removeClass("active");
            $(this).parent().siblings("li").find(".sub-menu").slideUp();
            $(this).next(".sub-menu").slideUp();
            $(this).next(".sub-menu").removeClass("active");
            $(this).removeClass("active");
            $(this).parent().siblings("li").find(".menu-expand").removeClass("active");

        } else {
            $(this).next(".sub-menu").slideToggle();
            $(this).next(".sub-menu").addClass("active");
            $(this).addClass("active");
            $(this).parent().siblings("li").find(".menu-expand").removeClass("active");
            $(this).parent().siblings("li").find(".sub-menu").slideUp();
            $(this).parent().siblings("li").find(".sub-menu").removeClass("active");
        };
    });



    // sidebar

    $(".subs").hide();
    $(".product-icon").click(function() {
        $(this).parent().next().slideToggle();
        $(this).toggleClass("active");
        $(this).siblings("a").toggleClass("active");
    });


    /*--------------------------
            Product Zoom
    ---------------------------- */



    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        prevArrow: '<span class="prev"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="next"><i class="fas fa-chevron-right"></i></i></span>',
        dots: false,
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        loop: true,
        // centerMode: true,
        focusOnSelect: true
    });


    $('.banner-slick').slick({
            dots: true,
            fade : true,
            infinite: true,
            arrows: false,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1
        });



});



// navbar  scroll

$(window).on("scroll", function(e) {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 250) {
        $(".header_main").addClass("menu_fixed animated fadeInDown");
        $(".index_set").removeClass("index_nav");
        $(".header_main").addClass("index_border");
        $(".mobile_nav_menu").addClass("off");
        $(".navbar-toggler").removeClass("index");
        $(".navbar-toggler-icon").removeClass("index");
        $(".normal_logo").css("display", "block");
        $(".white_logo").css("display", "none");
    } else {
        $(".header_main").removeClass("menu_fixed animated fadeInDown");
        $(".index_set").addClass("index_nav");
        $(".header_main").removeClass("index_border");
        $(".mobile_nav_menu").removeClass("off");
        $(".navbar-toggler").addClass("index");
        $(".navbar-toggler-icon").addClass("index");
        $(".normal_logo").css("display", "none");
        $(".white_logo").css("display", "block");
    };

});


jQuery(document).ready(($) => {
  $('.quantity').on('click', '.plus', function(e) {
    let $input = $(this).prev('input.qty');
    let val = parseInt($input.val());
    $input.val( val+1 ).change();
  });
 
  $('.quantity').on('click', '.minus', 
    function(e) {
    let $input = $(this).next('input.qty');
    var val = parseInt($input.val());
    if (val > 0) {
      $input.val( val-1 ).change();
    } 
  });
});


// ===== Scroll to Top ==== 
jQuery('#totop').hide();

jQuery(window).scroll(function() {
    "use strict";
    if (jQuery(this).scrollTop() >= 1000) {        // If page is scrolled more than 50px
        jQuery('#totop').fadeIn(200);    // Fade in the arrow
        jQuery('#totop').addClass('top-visible');
    } else {
        jQuery('#totop').fadeOut(200);   // Else fade out the arrow
        jQuery('#totop').removeClass('top-visible');
    }
});

jQuery('#totop').on("click",function() {      // When arrow is clicked
    jQuery('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
    return false;
});
