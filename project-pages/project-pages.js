"use strict";

//LOADER
window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loaderWrapper").style.top = "-100vh";
});

//MENU
const menu = document.querySelector("#menuSec nav");

function closeMenu() {
  menu.style.top = "-100vh";
}

function openMenu() {
  menu.style.top = "0";
}

//SCROLL ELEMENT
const text = document.querySelector(".scrollText p");
text.innerHTML = text.innerText
  .split("")
  .map((char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`)
  .join("");

//SMOOTH SCROLLING ANCHOR
document.querySelector(`a[href^="#projectDoc"]`).addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});

//ELEMENTS SLIDING UP/FADING IN
const faders = document.querySelectorAll(".fade-in3");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const faders2 = document.querySelectorAll(".fade-in2");

const appearOptions2 = {
  threshold: 0,
  rootMargin: "0px 0px -10px 0px",
};

const appearOnScroll2 = new IntersectionObserver(function (entries, appearOnScroll2) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll2.unobserve(entry.target);
    }
  });
}, appearOptions2);

faders2.forEach((fader) => {
  appearOnScroll2.observe(fader);
});

//PREVIUOS/NEXT ELEMENTS APPEARING
//slider left
const sliderLeft = document.querySelectorAll(".sliderLeft");

const appearOptionsLeo = {
  threshold: 0,
  rootMargin: "0px 0px -130px 0px",
};

const appearOnScrollLeo = new IntersectionObserver(function (entries, appearOnScrollLeo) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slideInLeft");
      appearOnScrollLeo.unobserve(entry.target);
    }
  });
}, appearOptionsLeo);

sliderLeft.forEach((slider) => {
  appearOnScrollLeo.observe(slider);
});

//slider right
const sliderRight = document.querySelectorAll(".sliderRight");

const appearOnScrollLeo2 = new IntersectionObserver(function (entries, appearOnScrollLeo2) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("slideInRight");
      appearOnScrollLeo2.unobserve(entry.target);
    }
  });
}, appearOptionsLeo);

sliderRight.forEach((slider) => {
  appearOnScrollLeo2.observe(slider);
});
