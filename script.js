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
