let slideIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let autoSlideInterval;

function showSlide(index) {
  // Wrap around
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  // Hide all slides
  slides.forEach(slide => slide.style.display = "none");

  // Remove active class from dots
  dots.forEach(dot => dot.classList.remove("active"));

  // Show current slide and dot
  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

function autoPlay() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 3000);
}

function stopAutoPlay() {
  clearInterval(autoSlideInterval);
}

// Event listeners
next.addEventListener("click", () => {
  nextSlide();
  stopAutoPlay();
});

prev.addEventListener("click", () => {
  prevSlide();
  stopAutoPlay();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide(i);
    stopAutoPlay();
  });
});

// Keyboard navigation for accessibility
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    prevSlide();
    stopAutoPlay();
  } else if (e.key === "ArrowRight") {
    nextSlide();
    stopAutoPlay();
  }
});

// Initialize
showSlide(slideIndex);
autoPlay();
