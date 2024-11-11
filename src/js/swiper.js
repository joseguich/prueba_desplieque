const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000, // Tiempo en milisegundos entre deslizamientos automáticos
    disableOnInteraction: false,
  },
  effect: "slide", // Efecto de deslizamiento

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
