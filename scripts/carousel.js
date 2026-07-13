// Carousel
const initCarousel = () => {
  const slides = [...document.querySelectorAll('.carousel-embed')];
  if (slides.length === 0) {
    return;
  }

  let currentSlide = 0;

  const showSlide = (index) => {
    // Loop around logic: (index + length) % length
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.style.display = i === currentSlide ? 'block' : 'none';
    });
  };

  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));
  }

  // Initialize the first slide
  showSlide(0);
};

document.addEventListener('DOMContentLoaded', initCarousel);