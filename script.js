$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.nav-bar').addClass("sticky");
        }else{
            $('.nav-bar').removeClass("sticky");
        }
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
     // toggle menu/navbar script
     $('.menu-btn').click(function(){
        $('.main .navbar').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});