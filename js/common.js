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

document.querySelectorAll(".portfolio-item").forEach((item) => {
  const button = item.querySelector(".button-play");
  const img = item.querySelector(".portfolio-item__img");
  const video = item.querySelector(".portfolio-item__video");

  button.addEventListener("click", () => {
    button.style.display = "none";
    img.style.display = "none";
    video.style.display = "block";
    video.play();
  });
});
