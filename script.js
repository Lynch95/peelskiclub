document.addEventListener('DOMContentLoaded', function() {
    const carouselArrowLeft = document.querySelector('.carousel-arrow-left');
    const carouselArrowRight = document.querySelector('.carousel-arrow-right');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    let currentSlideIndex = 0;
  
    function updateSlides() {
      carouselSlides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
    }
  
    function prevSlide() {
      currentSlideIndex--;
      if (currentSlideIndex < 0) {
        currentSlideIndex = carouselSlides.length - 1;
      }
      updateSlides();
    }
  
    function nextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= carouselSlides.length) {
        currentSlideIndex = 0;
      }
      updateSlides();
    }
  
    carouselArrowLeft.addEventListener('click', prevSlide);
    carouselArrowRight.addEventListener('click', nextSlide);
  
    updateSlides();
  });
  