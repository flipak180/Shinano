import $ from "jquery";
import "slick-carousel";

$(".categories-slider").each(function () {
    const el = $(this);
    $(".categories-slider__items", el).slick({
        slidesToShow: 4,
        prevArrow: $(".categories-slider__arrow-prev", el),
        nextArrow: $(".categories-slider__arrow-next", el),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },
        ],
    });
});

$(".images-slider").each(function () {
    const el = $(this);
    $(".images-slider__slides", el).slick({
        slidesToShow: 1,
        dots: true,
        prevArrow: $(".images-slider__arrow-prev", el),
        nextArrow: $(".images-slider__arrow-next", el),
    });
});

$('.main-slider').slick({
    slidesToShow: 1,
    dots: true,
});

const overlay = $('.overlay');

$('.header__nav-catalog-link').click(function() {
    const el = $(this);
    el.toggleClass('active');
    $('.burger-menu', el).toggleClass('open');
    $('.dropdown-menu').toggleClass('visible');
    overlay.toggleClass('visible');
    return false;
});

$('.footer__subtitle').click(function() {
    $(this).parent().toggleClass('open');
});
