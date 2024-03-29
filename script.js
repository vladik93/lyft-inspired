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
let currentPosition = 0;

let moveBy = 0;
let gap = 0;
let padding = 0;
let offset = 0;

carouselRight.addEventListener("click", function () {
  carouselLeft.disabled = false;

  let carouselItem = rideCarouselItems[currentIndex];
  let carouselItemRect = carouselItem.getBoundingClientRect();
  let carouselItemWidth = carouselItemRect.width;

  if (currentIndex === 0) {
    offset = 2.4;

    rideCarouselContainer.style = `transform: translateX(-${currentPosition}px) translateX(-${offset}rem)`;
  } else {
    offset = 2.4;
    rideCarouselContainer.style = `transform: translateX(-${currentPosition}px) translateX(-${offset}rem)`;
  }

  currentPosition += carouselItemWidth;
  currentIndex++;
});

carouselLeft.addEventListener("click", function () {
  currentIndex--;

  let carouselItem = rideCarouselItems[currentIndex];
  let carouselItemRect = carouselItem.getBoundingClientRect();
  let carouselItemWidth = carouselItemRect.width;

  currentPosition -= carouselItemWidth;

  rideCarouselContainer.style = `transform: translateX(-${currentPosition}px)`;
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

// BRANDS CAROUSEL
let brandsIndex = 0;

let brandRight = document.getElementById("brand-right-btn");
let brandLeft = document.getElementById("brand-left-btn");
let brandsCarouselContainer = document.getElementById("brands-carousel-items");
let brandsItems = document.querySelectorAll(".brands-carousel-item");

brandRight.addEventListener("click", () => {
  brandsIndex++;
  brandLeft.disabled = false;

  if (brandsIndex < brandsItems.length - 1) {
    brandsCarouselContainer.style = `transform: translateX(${
      brandsIndex * -100
    }%)`;
  } else {
    brandRight.disabled = true;

    brandsCarouselContainer.style = `transform: translateX(${
      brandsIndex * -100
    }%)`;
  }
  console.log(brandsIndex);
});

brandLeft.addEventListener("click", function () {
  brandsIndex--;
  brandRight.disabled = false;

  if (brandsIndex <= 0) {
    brandsCarouselContainer.style = `transform: translateX(${
      brandsIndex * -100
    }%)`;
    brandsIndex = 0;
    brandLeft.disabled = true;
  }
  brandsCarouselContainer.style = `transform: translateX(${
    brandsIndex * -100
  }%)`;
});

// COLLAPSIBLE NAV
const collapsibleBtns = document.querySelectorAll(".btn--collapsible");

collapsibleBtns.forEach((item, index) => {
  item.addEventListener("click", function () {
    item.nextElementSibling.classList.toggle("open");
  });
});
