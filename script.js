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
let indicators = document.querySelectorAll(".indicators span");

// Testimonial Right Button

btn.addEventListener("click", function () {
  testimonialItems[slideIndex].classList.remove("selected");
  indicators[slideIndex].classList.remove("selected");

  slideIndex++;
  if (slideIndex < testimonialItems.length) {
    testimonialsContainer.style = `transform: translateX(${
      slideIndex * -100
    }%)`;
    testimonialItems[slideIndex].classList.add("selected");
    indicators[slideIndex].classList.add("selected");
  } else {
    slideIndex = 0;

    testimonialsContainer.style = `transform: translateX(${
      slideIndex * -100
    }%)`;

    testimonialItems[slideIndex].classList.add("selected");
    indicators[slideIndex].classList.add("selected");
  }
});

// Testimonial Left Button

btn2.addEventListener("click", function () {
  testimonialItems[slideIndex].classList.remove("selected");
  indicators[slideIndex].classList.remove("selected");

  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = testimonialItems.length - 1;

    testimonialsContainer.style = `transform: translateX(${
      slideIndex * -100
    }%)`;
    testimonialItems[slideIndex].classList.add("selected");
    indicators[slideIndex].classList.add("selected");
  }
  testimonialsContainer.style = `transform: translateX(${slideIndex * -100}%)`;
  testimonialItems[slideIndex].classList.add("selected");
  indicators[slideIndex].classList.add("selected");
});

// Ride Carousel Button

let rideCarouselContainer = document.getElementById("ride-carousel-container");
let rideCarouselItems = document.querySelectorAll(".ride-carousel-item");
let carouselRight = document.getElementById("ride-carousel-right");

let currentIndex = 0;

let moveBy = 0;
let gap = 0;

carouselRight.addEventListener("click", function () {
  moveBy += 75;
  gap += 0.8;
  rideCarouselContainer.style = `transform: translateX(-${moveBy}%) translateX(-${gap}rem)`;
});
