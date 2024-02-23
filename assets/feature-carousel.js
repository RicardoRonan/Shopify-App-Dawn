document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const slides = document.querySelector(".feature-slides");
  const slideWidth = document.querySelector(".feature-card").offsetWidth;
  let slideIndex = 0;

  function showSlides() {
    if (slideIndex === slides.children.length - 1) {
      slides.style.transition = "transform 0.5s ease-in-out";
      slideIndex = 0;
    } else {
      slides.style.transition = "transform 0.5s ease-in-out";
      slideIndex++;
    }
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }

  function nextSlide() {
    showSlides();
  }

  function prevSlide() {
    if (slideIndex === 0) {
      slides.style.transition = "transform 0.5s ease-in-out";
      slideIndex = slides.children.length - 1;
    } else {
      slides.style.transition = "transform 0.5s ease-in-out";
      slideIndex--;
    }
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  setInterval(nextSlide, 5000); 
});
