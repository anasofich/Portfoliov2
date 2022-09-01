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
