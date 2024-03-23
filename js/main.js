// const swiperFC = new Swiper('.flower-carousel', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button_next',
//     prevEl: '.swiper-button_prev',
//   },

// });

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