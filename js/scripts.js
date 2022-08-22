$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:5
            },
            950:{
                items:3
            },
            850:{
                items:3
            },
            600:{
                items:3
            },
            400:{
                items:2
            }
        }
    });
});