// Плавное появление элементов сайта при полной его загрузке

document.querySelector(".body").onload = function() {
  document.querySelector(".body").classList.add("body-active");
};

// Плавный скролл на якоря
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// Скрыть и показать элементы страницы
let mode = "add";
const button = document.querySelector(".hide-button");
let ev = function(event) {
  if (mode == "add") {
    document.querySelector(".profile").classList.add("hidden");
    mode = "remove";
  } else if (mode == "remove") {
    document.querySelector(".profile").classList.remove("hidden");
    mode = "add";
  }
};
button.addEventListener("click", ev);

// Слайдер
let items = [
  '<div class="item green"></div>',
  '<div class="item red"></div>',
  '<div class="item blue"></div>',
  '<div class="item purple"></div>',
  '<div class="item orange"></div>'
];
let index = 0;
let sliderWrapper = document.querySelector(".slider-wrapper");
let sliderToLeft = document.querySelector(".left-button");
let sliderToRight = document.querySelector(".right-button");

sliderWrapper.innerHTML = items[index];

sliderToLeft.addEventListener("click", function(event) {
  if (index == 0) {
    index = items.length - 1;
    sliderWrapper.innerHTML = items[index];
  } else {
    index -= 1;
    sliderWrapper.innerHTML = items[index];
  }
});

sliderToRight.addEventListener("click", function(event) {
  if (index == items.length - 1) {
    index = 0;
    sliderWrapper.innerHTML = items[index];
  } else {
    index += 1;
    sliderWrapper.innerHTML = items[index];
  }
});
