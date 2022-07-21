$(function() {
    $('.main__slider').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        infinite: true
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

});