const slidesContainer = document.querySelector('.slides');
  const textCursor = document.querySelector('.text-cursor');
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slidesContainer.children.length;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    slidesContainer.style.transform = 'translateX(' + translateValue + ')';
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds