// Navbar slide animation
$(document).ready(function () {
  $("#navToogle").click(function () {
      $("ul").toggleClass("show");
    });
});

// Swiper
const swiper = new Swiper('.swiper', {
  // // Responsive
  slidesPerView: 1,
  spaceBetween: 30,

  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 3,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});