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

// document.querySelectorAll(".button-play").forEach((button) => {
//   button.addEventListener("click", () => {
//     const container = button.closest(
//       ".value-prop__image, .portfolio-item__image"
//     );
//     const img = container.querySelector("img");
//     const video = container.querySelector("video");

//     button.style.display = "none";
//     img.style.display = "none";
//     video.style.display = "block";
//     video.play();

//     // Автоматическое возвращение в начальное состояние после окончания
//     video.addEventListener(
//       "ended",
//       () => {
//         video.style.display = "none";
//         img.style.display = "block";
//         button.style.display = "block";
//       },
//       { once: true }
//     );
//   });
// });
