const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const dotsContainer = document.querySelector(".carousel-dots");

let index = 0;
let itemsPerView = getItemsPerView();

function getItemsPerView() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 4;
}

function updateDots() {
  dotsContainer.innerHTML = "";
  const totalPages = Math.ceil(slides.length / itemsPerView);
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === index) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }
}

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  const moveX = index * (slideWidth * itemsPerView);
  track.style.transform = `translateX(-${moveX}px)`;
  updateDots();
}

nextButton.addEventListener("click", () => {
  const totalPages = Math.ceil(slides.length / itemsPerView);
  index = (index + 1) % totalPages;
  updateCarousel();
});

prevButton.addEventListener("click", () => {
  const totalPages = Math.ceil(slides.length / itemsPerView);
  index = (index - 1 + totalPages) % totalPages;
  updateCarousel();
});

window.addEventListener("resize", () => {
  itemsPerView = getItemsPerView();
  index = 0;
  updateCarousel();
});

updateDots();
updateCarousel();


  const countdownDate = new Date("Dec 31, 2025 23:59:59").getTime();

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".deal-timer").innerHTML = "<p>Promoção Expirada</p>";
    }
  }, 1000);

