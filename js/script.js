$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'smooth');
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var options = {
        strings: ["Mathematician", "Web-consultant 😎", "Programmer", "Researcher", "Tech-enthusiast 😃"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };

    new Typed(".typing", options);
    new Typed(".typing-2", options);
});
