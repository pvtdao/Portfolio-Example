document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('scroll' ,function(){
        if(this.scrollY > 20){
            document.querySelector('.nav').classList.add("sticky");
            document.querySelector('.nav__logo-title-span').style.color = "#fff"
        }
        else{
            document.querySelector('.nav').classList.remove("sticky");
            document.querySelector('.nav__logo-title-span').style.color = ""
        }
        if(this.scrollY > 500){
            document.querySelector('.scroll-up-btn').classList.add("show");
        }else{
            document.querySelector('.scroll-up-btn').classList.remove("show");
        }
    })

    document.querySelector('.scroll-up-btn').onclick = function(){
        $('html').animate({scrollTop: 0});
    }

    var openMenuBtn = document.querySelector('.nav__menu');
    openMenuBtn.onclick = function(){
        var menuMT = document.querySelector('.nav__list');
        menuMT.classList.toggle('active');
        var buttonMenu = document.querySelector('.nav__menu i');
        buttonMenu.classList.toggle('active');
        var bodyCannotScroll = document.querySelector('body');
        bodyCannotScroll.classList.toggle('cannotScroll')
    }
    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Youtuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    var typed = new Typed(".typing-2", {
        strings: ["Youtuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

})

function toggleMenu(){
    var menuMT = document.querySelector('.nav__list');
    menuMT.classList.toggle('active');
    var buttonMenu = document.querySelector('.nav__menu i');
    buttonMenu.classList.toggle('active');
}

$(document).ready(function(){
    $('.team__carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    })
})