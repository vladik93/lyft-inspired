// Side Nav

function openSideNav() {
  let sideNav = document.querySelector(".header-side-nav");

  sideNav.classList.add("open");
}

function closeSideNav() {
  let sideNav = document.querySelector(".header-side-nav");

  sideNav.classList.remove("open");
}

// Testimonial Slides
let slideIndex = 0;

let btn = document.getElementById("testimonial-right-btn");
let testimonialItems = document.querySelectorAll(".testimonial-item");
let testimonialsContainer = document.getElementById("testimonials-container");
let indicatorsContainer = document.querySelector(".indicators");

btn.addEventListener("click", function () {
  slideIndex++;
  if (slideIndex < testimonialItems.length) {
    testimonialsContainer.style = `transform: translateX(${
      slideIndex * -100
    }%)`;
  } else {
    slideIndex = 0;

    testimonialsContainer.style = `transform: translateX(${
      slideIndex * -100
    }%)`;
  }
});

testimonialItems.forEach((item, index) => {
  let span = document.createElement("span");
  indicatorsContainer.appendChild(span);

  if (index === slideIndex) {
    span.style.backgroundColor = "red";
  }
});
