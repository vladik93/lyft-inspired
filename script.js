// Side Nav

function openSideNav() {
  let sideNav = document.querySelector(".header-side-nav");

  sideNav.classList.add("open");
  document.body.style = "overflow: hidden";
}

function closeSideNav() {
  let sideNav = document.querySelector(".header-side-nav");

  sideNav.classList.remove("open");
  document.body.style = "overflow: scroll";
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

// Ride Carousel Buttons

let rideCarouselContainer = document.getElementById("ride-carousel-container");
let rideCarouselItems = document.querySelectorAll(".ride-carousel-item");
let carouselRight = document.getElementById("ride-carousel-right");
let carouselLeft = document.getElementById("ride-carousel-left");

let currentIndex = 0;

let moveBy = 0;
let gap = 0;
let padding = 0;

carouselRight.addEventListener("click", function () {
  currentIndex++;
  carouselLeft.disabled = false;

  if (currentIndex < rideCarouselItems.length - 1) {
    moveBy += 75;
    gap += 0.8;
    padding = 3.2;

    rideCarouselContainer.style = `transform: 
    translateX(-${moveBy}%) 
    translateX(-${gap}rem)
    translateX(${padding}rem)`;
  } else {
    moveBy += 50;
    gap += 0.8;
    padding = 0;
    rideCarouselContainer.style = `transform: 
    translateX(-${moveBy}%) 
    translateX(-${gap}rem)
    translateX(-${padding}rem)`;
    carouselRight.classList.add("btn-complete");
    carouselRight.disabled = true;
  }
  console.log("RIGHT: " + moveBy + ", INDEX: " + currentIndex);
  console.log(
    "SIDE: RIGHT; " + "GAP: " + gap + "; " + "PADDING: " + padding + ";"
  );
});

carouselLeft.addEventListener("click", function () {
  currentIndex--;
  carouselRight.classList.remove("btn-complete");
  carouselRight.disabled = false;

  if (currentIndex == 0) {
    carouselLeft.disabled = true;
    moveBy -= 75;
    gap -= 0.8;
    padding = 0;
  } else if (currentIndex == rideCarouselItems.length - 2) {
    moveBy -= 50;
    gap -= 0.8;
    padding = 3.2;
  } else {
    moveBy -= 75;
    gap -= 0.8;
    padding = 3.2;
  }

  rideCarouselContainer.style = `transform:
  translateX(-${moveBy}%)
  translateX(-${gap}rem)
  translateX(${padding}rem)`;

  console.log("LEFT: " + moveBy + ", INDEX: " + currentIndex);
  console.log(
    "SIDE: LEFT; " + "GAP: " + gap + "; " + "PADDING: " + padding + ";"
  );
});

// KEYWORDS TRANSITIONS

let businessHeadings = document.querySelectorAll(".business-heading-keyword");
let businessIndex = 0;

let isActive = true;

document.addEventListener("visibilitychange", () => {
  isActive = document.visibilityState = "visible";
});

// WORKABLE HACK FOR 0 INDEX

setTimeout(
  () => {
    if (isActive) {
      businessHeadings[0].classList.add("slide");
    } else {
      businessHeadings[0].classList.add("slide");
    }
  },
  isActive ? 2650 : 3000
);

setInterval(() => {
  businessHeadings[0].classList.remove("slide");
  if (businessIndex < businessHeadings.length - 1) {
    setTimeout(
      () => {
        if (isActive) {
          businessHeadings[businessIndex].classList.add("slide");
        } else {
          businessHeadings[businessIndex].classList.add("slide");
        }
      },
      isActive ? 2650 : 3000
    );
    businessHeadings[businessIndex].classList.remove("slide");
    businessHeadings[businessIndex].classList.remove("show");
    businessIndex++;
    businessHeadings[businessIndex].classList.add("show");
  } else {
    setTimeout(
      () => {
        if (isActive) {
          businessHeadings[businessIndex].classList.add("slide");
        } else {
          businessHeadings[businessIndex].classList.add("slide");
        }
      },
      isActive ? 2650 : 3000
    );
    businessHeadings[businessIndex].classList.remove("slide");
    businessHeadings[businessIndex].classList.remove("show");
    businessIndex = 0;
    businessHeadings[businessIndex].classList.add("show");
  }
}, [3000]);
