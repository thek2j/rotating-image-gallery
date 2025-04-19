const imgContainerEl = document.querySelector(".img-container");

const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");

let x = 0;
let timer = null;

prevEl.addEventListener("click", () => {
  x = x + 45;
  imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  imgContainerEl.style.transition = "transform 1s";
  clearInterval(timer);
  timer = setInterval(autoRotate, 3000);
});

nextEl.addEventListener("click", () => {
  x = x - 45;
  imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  imgContainerEl.style.transition = "transform 1s";
  clearInterval(timer);
  timer = setInterval(autoRotate, 3000);
});

function autoRotate() {
  x = x - 45;
  imgContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  imgContainerEl.style.transition = "transform 1s";
}
timer = setInterval(autoRotate, 3000);
