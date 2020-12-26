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

//click button to focus search input
$(document).ready(function(){
    var search_in = document.getElementById('search-button');
    search_in.addEventListener('click',function(){
        $("#header__search").show();
        document.getElementById('form-search').focus();
        document.getElementById('close-button').click();
        $('.header__top').css('border-bottom', '0');
        $('.search-navbar').css('border-bottom', 'solid 1px #ddd');
    });
});

//scroll event
$(document).ready(function(){
    var prevScrollpos = window.pageYOffset;
    
    window.onscroll = function() {
        //change position sticky to fixed
        var currentScrollPos = window.pageYOffset;
        var topbar = document.querySelector('.topbar');
        var header = document.querySelector('.header');

        var viewportOffset = topbar.getBoundingClientRect();
        var top = viewportOffset.top;

        if (top <= -46) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }

        //scroll up hide header
        if($(window).width() <  1200)
        {
            if (prevScrollpos > currentScrollPos) {
                console.log(prevScrollpos);
                if (prevScrollpos < 10) {
                    $("#header__search").show();
                    $('.header__top').css('border-bottom', '0');
                    $('.search-navbar').css('border-bottom', 'solid 1px #ddd');
                } else {
                    $('.header__top').css('border-bottom', 'solid 1px #ddd');
                    $('.search-navbar').css('border-bottom', '0');
                    $("#header__search").hide();
                }
                header.style.top = "0";
            } else {
                header.style.top = "-200px";
            }
            prevScrollpos = currentScrollPos;
        } else {
            if (prevScrollpos > currentScrollPos) {
                header.style.top = "0";
            } else {
                header.style.top = "-200px";
            }
            prevScrollpos = currentScrollPos;
        }
    }
});

