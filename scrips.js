$(document).ready(function(){
    $('.specialties-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.menu-toggle').on('click', function() {
        $('nav ul').toggleClass('active');
    });
});
