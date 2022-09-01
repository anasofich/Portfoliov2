"use strict";

//LOADER
window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".loaderWrapper").style.top = "-100vh";
});

///////
document.addEventListener("DOMContentLoaded", start);

function start() {
  //console.log("start");
  fetchBlueLeo();
}

async function fetchBlueLeo() {
  //console.log("fetchBlueLeo");
  let response = await fetch("SVG/blueLeo.svg");
  let mySvgData = await response.text();
  document.querySelector(".blueLeoSvg").innerHTML = mySvgData;
}

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

//LOGO MOVE
window.addEventListener("scroll", (e) => {
  if (document.documentElement.scrollTop > 1) {
    document.querySelector(".logo").classList.remove("returnLogo");
    document.querySelector(".logo").classList.remove("logoAppear");
    document.querySelector(".logo").classList.add("moveLogo");
  } else {
    document.querySelector(".logo").classList.add("returnLogo");
  }
});

//INTRO IMAGE ON HOVER
document.querySelector("span.wavy").addEventListener("mousemove", (e) => {
  //console.log("wavymousemove");
  const hoverReveal2 = document.querySelector(".hoverReveal2");
  const linkImages2 = document.querySelector(".hiddenImg2");

  hoverReveal2.style.opacity = 1;
  hoverReveal2.style.transform = "translate(-50%, -50%) rotate(5deg)";
  linkImages2.style.transform = "scale(1,1)";
  hoverReveal2.style.left = "80vw";
  hoverReveal2.style.top = "50vh";
});

document.querySelector("span.wavy").addEventListener("mouseleave", (e) => {
  const hoverReveal2 = document.querySelector(".hoverReveal2");
  const linkImages2 = document.querySelector(".hiddenImg2");

  hoverReveal2.style.opacity = 0;
  hoverReveal2.style.transform = "translate(-130%, 40%) rotate(-5deg)";
  linkImages2.style.transform = "scale(0.8,0.8)";
});

//LEO ELEMENTS appearing
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

//EYES FOLLOWING CURSOR
const eyeballs = document.getElementsByClassName("eyeball");

document.onmousemove = function () {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    eyeballs[i].style.left = x;
    eyeballs[i].style.top = y;
    eyeballs[i].style.transform = "translate(-" + x + ", -" + y + ")";
  }
};

//SMOOTH SCROLLING ANCHOR
document.querySelector(`a[href^="#projectsSec"]`).addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
});

//PROJECT LIST ELEMENTS SLIDING UP
const faders = document.querySelectorAll(".fade-in");

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

//PROJECT LIST IMAGES ON HOVER
const link = document.querySelectorAll(".projectLi");
const hoverReveal = document.querySelectorAll(".hoverReveal");
const linkImages = document.querySelectorAll(".hiddenImg");

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mousemove", (e) => {
    hoverReveal[i].style.opacity = 1;
    hoverReveal[i].style.transform = "translate(-100%, -50%) rotate(5deg)";
    linkImages[i].style.transform = "scale(1,1)";
    hoverReveal[i].style.left = e.clientX + "px";
  });
  link[i].addEventListener("mouseleave", (e) => {
    hoverReveal[i].style.opacity = 0;
    hoverReveal[i].style.transform = "translate(-50%, -50%) rotate(-5deg)";
    linkImages[i].style.transform = "scale(0.8,0.8)";
  });
}
