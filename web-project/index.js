

'use stricts';


// Add event on element 

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

// Add navbar Toggle 

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");



const togglerNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", togglerNavbar);


const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);


//Headder active when scroll 
const header = document.querySelector("[data-header]");
const bactToTop = document.querySelector("[data-bact-top-btn]");

const activeElement = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        bactToTop.classList.add("active");
    }else {
        header.classList.remove("active");
        bactToTop.classList.remove("active");
    }
}


addEventOnElem(window, "scroll", activeElement);


//ScrollReveal animation
ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal(".title", {
  duration: 2000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});

ScrollReveal().reveal(".fade-in", {
  duration: 2000,
  move: 0
});

ScrollReveal().reveal(".scaleUp", {
  duration: 2000,
  scale: 0.85
});

ScrollReveal().reveal(".flip", {
  delay: 500,
  duration: 1000,
  rotate: {
    x: 20,
    z: 20
  }
});

