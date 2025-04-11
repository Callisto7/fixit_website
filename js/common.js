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
  document.querySelector(".overlay").classList.remove("hidden");
}

function handleMouseLeave(event) {
  if (event.clientY < 0 && !hasShownModal) {
    hasShownModal = true;
    showModal();
  }
}

document.addEventListener("mouseout", handleMouseLeave);

// Закрытие модалки по кнопке или клику вне её
document.querySelector('.overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.add('hidden');
    }
});