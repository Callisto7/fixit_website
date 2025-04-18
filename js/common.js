const phrases = [
  "упустить продажи",
  "слить бюджет",
  "отстать от конкурентов",
  "переплатить Wildberries",
  "выгореть и все бросить",
];

const rotatingText = document.querySelector(".rotating-text");
let index = 0;

setInterval(() => {
  // Плавно скрываем
  rotatingText.classList.add("hidden");

  setTimeout(() => {
    // Меняем текст и показываем
    index = (index + 1) % phrases.length;
    rotatingText.textContent = phrases[index];
    rotatingText.classList.remove("hidden");
  }, 500);
}, 3000);

let hasShownModal = false;

function showModal() {
  document.querySelector(".overlay").classList.remove("hidden-modal");
}

function handleMouseLeave(event) {
  if (event.clientY < 0 && !hasShownModal) {
    hasShownModal = true;
    showModal();
  }
}

document.addEventListener("mouseout", handleMouseLeave);

// Закрытие модалки по кнопке или клику вне её
document.querySelector(".overlay").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.add("hidden-modal");
  }
});

const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modal-video");
const kinescopeUrl = "https://kinescope.io/embed/rX7yrRh8rFgHGQtcGtkxyK";

function openModal() {
  modal.classList.add("open");
  modalVideo.src = kinescopeUrl + "?autoplay=1";
}

function closeModal() {
  modal.classList.remove("open");
  modalVideo.src = ""; // Сброс — останавливает видео
}
modal.addEventListener("click", closeModal);

const slider = document.getElementById("portfolioSlider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active"); // можно использовать для визуального эффекта
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5; // чувствительность скролла
  slider.scrollLeft = scrollLeft - walk;
});
