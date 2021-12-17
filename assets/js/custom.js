// Mobile Menu Toggle JS
$('.toggle-btn').click(function(){
	$('.navigation .main-menu').toggleClass('show');
});

// Index Sec1 Slider JS
$('.index-sec1-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// Event Carousel JS
$('.event-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ['<img src="assets/images/left-arrow.png">','<img src="assets/images/right-arrow.png">'],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3,
            margin:30
        }
    }
});

// Packages Carousel JS
$('.packages-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            center: false
        },
        990:{
            items:3
        }
    }
});

// Testimonials Carousel Js
$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ['<img src="assets/images/left-arrow.png">','<img src="assets/images/right-arrow.png">'],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});