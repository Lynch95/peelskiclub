
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