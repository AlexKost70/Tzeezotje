const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});