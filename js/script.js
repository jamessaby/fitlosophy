 'use strict'; 
 $(document).on("ready",function(){


    // WOW initialisation
    var wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        mobile:       false
      }
    );
    wow.init();
    // and WOW initialisation

    // Back to Top
    var offset = 220;
    var duration = 500;
    jQuery(window).on("scroll",function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });
    
    jQuery('.back-to-top').on("click",function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
    // and Back to Top

    // Scrolling nov

    //jQuery to collapse the navbar on scroll
    $(window).on("scroll",function() {
        if ($(".navbar").offset().top > 0) {
            $(".fixed-top").addClass("top-nav-collapse");
        } else {
            $(".fixed-top").removeClass("top-nav-collapse");
        }
    });

    //Search button
    $(".search").on("click",function(){
    $("#search").slideDown(function(){
        $('input', this).focus();
        });
    });
    $("#search-beack").on("click",function(){
        $("#search").slideUp();
    });
    // and Search button



    $("#owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:3,
                nav:false,
            },
            991:{
                items:4,
                nav:false,
            },
            1200:{
                items:5,
                nav:false,
            }
        },
    });
    $("#owl-demo-1").owlCarousel({
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:2,
                nav:false,
            },
            991:{
                items:3,
                nav:false,
            },
            1200:{
                items:4,
                nav:true,
            }
        },
        nav: true,
        navText : ["",""],
    });
    $("#owl-demo-2").owlCarousel({
        responsive:{
            0:{
                items:3,
                nav:false
            },
            576:{
                items:3,
                nav:false,
            },
            991:{
                items:5,
                nav:true,
            },
            1200:{
                items:6,
                nav:true,
            }
        },
        nav: true,
        navText : ["",""],
    });
    $("#owl-demo-3").owlCarousel({
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:2,
                nav:false,
            },
            991:{
                items:3,
                nav:false,
            },
            1200:{
                items:4,
                nav:true,
            }
        },
        dots: false,
        nav: true,
        navText : ["",""],
    });
    $("#owl-demo-4").owlCarousel({
        items : 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoHeight: true,
        nav: true,
        navText : ["",""],
        animateOut: 'fadeOut',
    });
    $("#owl-demo-5").owlCarousel({
    items : 4,
    nav: true,
    navText : ["",""],
    });
    $("#owl-demo-6").owlCarousel({
        items: 2,
        nav: true,
        navText : ["",""],
    });
    $("#owl-demo-7").owlCarousel({
        dots: false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:2,
                nav:false,
            },
            991:{
                items:3,
                nav:false,
            },
            1200:{
                items:4,
                nav:true,
            }
        },
        nav: true,
        navText : ["",""],
    });
    $("#owl-demo-8").owlCarousel({
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:1,
                nav:false,
            },
            991:{
                items:2,
                nav:false,
            },
            1200:{
                items:3,
                nav:true,
            }
        },
        nav: true,
        navText : ["",""],
    });
    $("#owl-demo-9").owlCarousel({
        items : 1,
        nav: true,
        navText : ["",""],
        loop:true,
    });
     $("#owl-demo-10").owlCarousel({
        items : 1,
        nav: true,
        navText : ["",""],
    });
    $("#owl-demo-11").owlCarousel({
        responsive:{
            0:{
                items:1,
                nav:false
            },
            576:{
                items:1,
                nav:false,
            },
            1200:{
                items:2,
                nav:true,
            }
        },
        nav: true,
        navText : ["",""],
    });
    

    /* Accordion */
    $('.toggle h4').on("click",function() {
        var top = $(this).parent().parent();
        var content = $(this).parent().find('.toggle-content');
        var icon = $(this).parent().find('h4>i');
        var h = $(this);
      
        top.find('h4').removeClass('opened');

        if( content.is(':hidden') ) {
         top.find('.toggle-content').slideUp();
         top.find('h4>i').removeClass('minus').addClass('plus');
         icon.removeClass('plus').addClass('minus');
         h.addClass('opened');
         content.slideDown(250);

        } else {
         icon.removeClass('minus').addClass('plus');
         content.slideUp(50);
        }
        return false;
    });
    /* and Accordion */
    
    
    $(document).on("scroll",function() {
    
        var bar_width = $(".animated .progress-bar").attr('aria-valuenow');
        var bar = $('.animated .progress-bar');

        $(function(animate){
          
            $(bar).each(function(){
                bar_width = $(this).attr('aria-valuenow');
                $(this).width(bar_width + '%');
              });
        });
    });

    /* Input quntity +/- */
    $(".button").on("click", function () {
        var $button = $(this);
        var $input = $button.closest('.quantity-block').find("input.quntity-input");
        
        $input.val(function(i, value) {
            return + value + (1 * +$button.data('multi'));
        });
    });
    /* and Input quntity +/- */


    /* BX slider */
    $(function() {
    $('#blog-slider').bxSlider({
        pagerCustom: '#blog-slider-pager'
    });
    });

    /* Blog slider */
    $("#owl-slider-pager-slider").owlCarousel({

    responsive:{
        0:{
            items:2,
            nav:false
        },
        991:{
            items:3,
            nav:true,
        },
        1200:{
            items:5,
            nav:true,
        }
    },
    itemsMobile : false,
    lazyLoad : true,
    nav : true,
    navText  : [" "," "],
    });

    $("#owl-slider-pager-slider-2").owlCarousel({
        responsive:{
            991:{
                items:5,
                nav:true,
            },
            1200:{
                items:4,
                nav:true,
            }
        },
        itemsMobile : false,
        lazyLoad : true,
        dots: false,
        nav : true,
        navText  : [" "," "],
    });
    /* and Blog slider */

    $('.sort-buy-button').on("click",function(){
        $('.sort-buy-content').slideToggle();
            });
        $(function () {
            $('.sort-buy-button').hover(
                function () {
                    $('.sort-buy-content').slideUp(250);
                });
    });
  
 });


    /* Pretty Photo */
    $("a[data-gal^='prettyPhoto']").prettyPhoto();
    $("a[data-rel^='prettyPhoto']").prettyPhoto();
    /* and Pretty Photo */

    /* Isotope launch */
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
        }
    });
 
    $('.portfolioFilter a').on("click",function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
         });
         return false;
    });
    /* and Isotope launch */

    /* Cloud move */
    $(document).on("ready",function move() {
        $(".cloud").animate( {"top": "+=30px"}, 2500, "linear",
        function() {
            $(".cloud").animate( {"top": "-=30px"}, 2500, "linear",
            function() {
                move();
            });
        });
    });
    /* and Cloud move */
  
    /*SLIDE RANGE*/
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 5000,
        values: [ 750, 3500 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });

    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    /*AND SLIDE RANGE*/
   