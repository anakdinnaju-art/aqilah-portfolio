document.getElementById('year').textContent = new Date().getFullYear();

new Swiper('.work-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: '.work-next',
    prevEl: '.work-prev',
  },
  breakpoints: {
    561: { slidesPerView: 2 },
    861: { slidesPerView: 3 },
  },
});
