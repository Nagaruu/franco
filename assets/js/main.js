//Owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navigation : true,
    navText: ["<i class='btnCarousel fa fa-chevron-circle-left' aria-hidden='true'></i>","<i class='btnCarousel fa fa-chevron-circle-right' aria-hidden='true'></i>"],

    responsive:{
        1920:{
            items:3
        },
        1200:{
            items:3
        },
        1024:{
            items:2
        },
        640:{
            items:2
        },
        480:{
            items:2
        },
        0:{
            items:1
        }
    }
});

//close button collapse
$(document).ready(function(){
    var close = document.getElementById('close');
    close.addEventListener('click',function(){
        $('.nav-menu').collapse('hide');
        // jQuery('#overlay').css('opacity', '0');
        // jQuery("#overlay").css('visibility', 'hidden');
    });
});
