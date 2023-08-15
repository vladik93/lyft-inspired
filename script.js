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
let btn2 = document.getElementById("testimonial-left-btn");
let testimonialItems = document.querySelectorAll(".testimonial-item");
let testimonialsContainer = document.getElementById("testimonials-container");
let indicatorsContainer = document.querySelector(".indicators");

// Testimonial Right Button

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

// Testimonial Left Button

btn2.addEventListener("click", function () {
  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = testimonialItems.length - 1;

    testimonialsContainer.style = `transform: translateX(${
      slideIndex * -100
    }%)`;
  }

  testimonialsContainer.style = `transform: translateX(${slideIndex * -100}%)`;
});
