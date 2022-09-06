 $(document).ready(function(){
        $('.owl-carousel-1').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        navText:[
        '<div"><i style="font-size:3rem" class="fa-solid fa-circle-chevron-left"></i></div>',
        '<div><i style="font-size:3rem"  class="fa-solid fa-circle-chevron-right"></i></div>'
        ],
        responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

  //for slider
	$('#slider').owlCarousel({
        animateOut: 'fadeOut',
        loop:false,
        margin:10,
        navText:[
            '<div"><i style="font-size:3rem;width: 50px;" class="fa-solid fa-angle-left"></i></div>',
            '<div><i style="font-size:3rem;width: 50px;" class="fa-solid fa-angle-right"></i></div>',
        ],
        responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1
        }
    }
});
$('#customerFeeback').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
        '<div"><i style="font-size:3rem;width: 100px;" class="fa-solid fa-angle-left"></i></div>',
        '<div><i style="font-size:3rem;width: 100px;" class="fa-solid fa-angle-right"></i></div>',
        ],
    responsive:{
        0:{
            items:1,
            nav:false

        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1
        }
    }
})
$('#customerFeeback').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
        '<div"><i style="font-size:3rem;width: 100px;" class="fa-solid fa-angle-left"></i></div>',
        '<div><i style="font-size:3rem;width: 100px;" class="fa-solid fa-angle-right"></i></div>',
        ],
    responsive:{
        0:{
            items:1,
            nav:false

        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1
        }
    }
})
$('#test-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});
   