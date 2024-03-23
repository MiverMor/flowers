var swiperFC = new Swiper(".flower__carousel", {
  slidesPerView: 1,
  spaceBetween: 10,
  
  navigation: {
  nextEl: '.flower__arrow_next',
  prevEl: '.flower__arrow_prev',
  },

  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

const reviewsSwiper = new Swiper(".reviews__swiper", {
  loop: true,

  navigation: {
    nextEl: ".reviews__button-next",
    prevEl: ".reviews__button-prev",
  },
});