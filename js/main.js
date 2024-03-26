$(document).ready(function () {
    var swiperFC = new Swiper(".flower__carousel", {
    slidesPerView: 1,
    spaceBetween: 10,
    
    navigation: {
    nextEl: '.flower__arrow_next',
    prevEl: '.flower__arrow_prev',
    },

    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      960: {
        slidesPerView: 5,
        spaceBetween: 45,
      },
      1200: {
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

  $("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'img/reviews-img/flowers-1.jpg',
      opts : {
        caption : 'First caption',
        thumb   : 'img/reviews-img/flowers-1.jpg'
      }
    },
    {
      src  : 'img/reviews-img/flowers-2.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : 'img/reviews-img/flowers-2.jpg'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
  
});