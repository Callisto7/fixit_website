const phrases = [
  "упустить продажи",
  "слить бюджет",
  "отстать от конкурентов",
  "переплатить маркетплейсам",
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
