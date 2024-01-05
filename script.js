let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide1");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.opacity = '1';
    setTimeout(showSlides, 5000); 
}
document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.brand-slider');
  const slides = document.querySelectorAll('.brand-slider .slide');
  
  let totalWidth = 0;
  slides.forEach(slide => {
      totalWidth += slide.offsetWidth;
  });

  slider.style.width = `${totalWidth}px`;

  const keyframes = [
      { transform: 'translateX(0)' },
      { transform: `translateX(-${totalWidth / 3}px)` }
  ];

  const animation = slider.animate(keyframes, {
      duration: 20000,
      iterations: Infinity
  });
});

// var swiper = new Swiper(".brand-slider", {
//   spaceBetween: 20,
//   loop:true,
//   autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//   },
//   breakpoints: {
//       450: {
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 3,
//       },
//       991: {
//         slidesPerView: 4,
//       },
//       1200: {
//         slidesPerView: 5,
//       },
//     },
// });
