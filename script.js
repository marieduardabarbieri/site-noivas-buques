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

// reveal scroll, reaparece quando desce ou sobe

// ===== Scroll Reveal Config =====
ScrollReveal({
  reset: false,           // repete animação ao voltar a rolar
  distance: '60px',      // distância do movimento
  duration: 2000,        // tempo da animação
  delay: 150             // atraso inicial
});

// ===== Aplicar efeito em cada seção =====

// Cabeçalho
ScrollReveal().reveal('.header', { origin: 'top' });

// Seção principal
ScrollReveal().reveal('.card2', { origin: 'left' });

// Cards de delivery (Free Shopping, etc)
ScrollReveal().reveal('.card3', { origin: 'bottom', interval: 200 });

// Produtos
ScrollReveal().reveal('.card4', { origin: 'right' });

// Ofertas e contagem regressiva
ScrollReveal().reveal('.deal-of-the-day', { origin: 'top' });
ScrollReveal().reveal('.deal-products', { origin: 'bottom', interval: 200 });

// Seção “Why choose our flowers”
ScrollReveal().reveal('.card6', { origin: 'left' });

// Coleções
ScrollReveal().reveal('.collections-section', { origin: 'top' });
ScrollReveal().reveal('.collections-carousel', { origin: 'bottom', interval: 150 });

// Depoimentos
ScrollReveal().reveal('.card8', { origin: 'right' });

// Rodapé
ScrollReveal().reveal('footer', { origin: 'bottom' });
