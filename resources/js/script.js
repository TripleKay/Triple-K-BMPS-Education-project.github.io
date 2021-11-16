/* -------------------------------PreLoader-------------------------------------   */
$(window).on("load",function(){
    $('.loader-container').fadeOut(500,function(){
        $(this).remove();
    }); 
});

$(window).scroll(function(){
    $(".mobile-nav-container").removeClass("active");
});
/* -------------------------------for animation and wow------------------------------------   */
new WOW().init();

$(document).ready(function () { 

/* -------------------------------home-section-------------------------------------   */

$(".show-mobile-btn").click(function () {
    $(".mobile-nav-container").addClass("active");
});
$(".hide-mobile-btn").click(function () {
    $(".mobile-nav-container").removeClass("active");
});


/* -------------------------------book-section-------------------------------------   */
$('.owl-book-container').owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
/* -------------------------------blog-section-------------------------------------   */
$('.owl-blog-container').owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
/* -------------------------------team-section-------------------------------------   */
$('.owl-team-container').owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
/* -------------------------------testimonial-section-------------------------------------   */
$('.owl-testi-container').owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    rtl: false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

    
});

//  --------------isotope for course section------------------
$(window).on("load", function () {
    //int isotope
    $(".isotope-container").isotope({});
    //filter items on buttom click
    $("#isotope-filters").on("click", "button", function () {
      var filterValue = $(this).attr("data-filter");
      $(".isotope-container").isotope({ filter: filterValue });
      $("#isotope-filters").find(".active").removeClass("active");
      $(this).addClass("active");
    });
  });
  