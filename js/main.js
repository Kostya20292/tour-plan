const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.hotel-slider__button--next',
        prevEl: '.hotel-slider__button--prev',
    },
});

const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.reviews-slider__button--next',
        prevEl: '.reviews-slider__button--prev',
    },
});

$('.newsletter').parallax({ imageSrc: '../img/newsletter-bg.jpg' });

const menuButton = document.querySelector('.menu-button');
const modalButton = document.querySelectorAll('.modal__button--active');
const modalOverlay = document.querySelector('.modal__overlay');
const modalDialog = document.querySelector('.modal__dialog');
const modalClose = document.querySelector('.modal__close');

menuButton.addEventListener('click', () => {
    document
        .querySelector('.navbar-bottom')
        .classList.toggle('navbar-bottom--visible');
});

modalButton.forEach((modal) => {
    modal.addEventListener('click', () => {
        modalOverlay.classList.add('modal__overlay--visible');
        modalDialog.classList.add('modal__dialog--visible');
    });
});

modalClose.addEventListener('click', () => {
    modalOverlay.classList.remove('modal__overlay--visible');
    modalDialog.classList.remove('modal__dialog--visible');
});

modalClose.addEventListener('keypress', (e) => {
    console.log(e.key);
    if (e.key === 'Escape') {
        modalOverlay.classList.remove('modal__overlay--visible');
        modalDialog.classList.remove('modal__dialog--visible');
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalOverlay.classList.remove('modal__overlay--visible');
        modalDialog.classList.remove('modal__dialog--visible');
    }
});
