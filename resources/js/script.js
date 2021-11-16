$(window).scroll(function(){
    $(".mobile-nav-container").removeClass("active");
})

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
