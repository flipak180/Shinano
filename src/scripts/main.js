import $ from "jquery";
import "slick-carousel";
import Masonry from 'masonry-layout';
import Inputmask from "inputmask";
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

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

$(".products__slider").each(function () {
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

$('.products__view-link').click(function() {
    const products = $(this).closest('.products');
    if ($(this).data('view') === 'grid') {
        products.removeClass('products-list_view')
    } else {
        products.addClass('products-list_view')
    }

    $('.products__slider').slick('refresh');
});

$('.filters__group-title').click(function() {
   $(this).closest('.filters__group').toggleClass('open');
});

$('.range').each(function() {
    const el = $(this);
    const slider = $('.range__slider', el)[0];
    const inputs = [$('input:eq(0)', el)[0], $('input:eq(1)', el)[0]];

    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
        step: 10,
    });

    slider.noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = values[handle];
    });

    inputs.forEach(function (input, handle) {
        input.addEventListener('change', function () {
            slider.noUiSlider.setHandle(handle, this.value);
        });

        input.addEventListener('keydown', function (e) {
            var values = slider.noUiSlider.get();
            var value = Number(values[handle]);
            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
            var steps = slider.noUiSlider.steps();
            // [down, up]
            var step = steps[handle];
            var position;

            // 13 is enter,
            // 38 is key up,
            // 40 is key down.
            switch (e.which) {
                case 13:
                    slider.noUiSlider.setHandle(handle, this.value);
                    break;
                case 38:
                    // Get step to go increase slider value (up)
                    position = step[1];
                    // false = no step is set
                    if (position === false) {
                        position = 1;
                    }
                    // null = edge of slider
                    if (position !== null) {
                        slider.noUiSlider.setHandle(handle, value + position);
                    }
                    break;
                case 40:
                    position = step[0];
                    if (position === false) {
                        position = 1;
                    }
                    if (position !== null) {
                        slider.noUiSlider.setHandle(handle, value - position);
                    }
                    break;
            }
        });
    });
});
