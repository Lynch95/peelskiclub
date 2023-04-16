
  const carouselContainer = document.querySelector('.carousel-container');
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  const slideWidth = carouselSlides[0].clientWidth;
  let currentSlide = 0;
  
  function autoSlide() {
      currentSlide = (currentSlide + 1) % carouselSlides.length;
      carouselContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }
  
  const interval = setInterval(autoSlide, 3000);
  
  carouselContainer.addEventListener('mouseenter', () => {
      clearInterval(interval);
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
      setInterval(autoSlide, 3000);
  });

  function slideTo(index) {
    currentSlide = index;
    carouselContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function slideLeft() {
    if (currentSlide === 0) {
        slideTo(carouselSlides.length - 1);
    } else {
        slideTo(currentSlide - 1);
    }
}

function slideRight() {
    if (currentSlide === carouselSlides.length - 1) {
        slideTo(0);
    } else {
        slideTo(currentSlide + 1);
    }
}

const arrowLeft = document.querySelector('.carousel-arrow-left');
const arrowRight = document.querySelector('.carousel-arrow-right');

arrowLeft.addEventListener('click', slideLeft);
arrowRight.addEventListener('click', slideRight);