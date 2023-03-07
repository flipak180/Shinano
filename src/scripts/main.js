import $ from "jquery";
import "slick-carousel";
import Masonry from 'masonry-layout';
import Inputmask from "inputmask";

$(".categories-slider").each(function () {
    const el = $(this);
    $(".categories-slider__items", el).slick({
        slidesToShow: 4,
        prevArrow: $(".categories-slider__arrow-prev", el),
        nextArrow: $(".categories-slider__arrow-next", el),
        responsive: [
            {
                breakpoint: 1724,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    centerMode: true,
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

$(".content-images-slider").each(function () {
    const el = $(this);
    $(".images-slider__slides", el).slick({
        slidesToShow: 3,
        prevArrow: $(".slider__arrow-prev", el),
        nextArrow: $(".slider__arrow-next", el),
    });
});

$('.main-slider').slick({
    slidesToShow: 1,
    dots: true,
});

$(".products-list__slider").each(function () {
    $(this).slick({
        slidesToShow: 1,
        dots: true,
    });
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


$('.toggle-search').click(function() {
    $('.header__search').toggleClass('visible');
});

if (document.querySelector('.images-grid')) {
    const masonry = new Masonry('.images-grid', {
        itemSelector: 'img',
        gutter: 23
    });
}

$('[data-popup]').each(function() {
    const el = $(this);
    el.click(function() {
        $(`#${el.data('popup')}`).addClass('visible');
    });
});

$('.popup__close').click(function() {
    $(this).closest('.popup').removeClass('visible');
});

$('.popup').click(function(e) {
    if ($(e.target).hasClass('popup')) {
        $(this).removeClass('visible');
    }
});

$('input[type="tel"]').each(function() {
    Inputmask({"mask": "+7 (999) 999-99-99"}).mask($(this)[0]);
});
