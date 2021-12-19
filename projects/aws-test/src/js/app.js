const navBtn = document.querySelector(".header__navigation-btn");
const navMenu = document.querySelector(".nav-menu");
const humbIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times");
const searchBtn = document.querySelector(".search__btn");
const searchWrapper = document.querySelector(".search__wrapper");
const searchBtnMob = document.querySelector(".header__search-btn--mobile");
const searchIconMob = document.querySelector(".header__search-icon");
const searchIconCloseMob = document.querySelector(".header__search-icon-close");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

/**
 * Header & navigation
 */
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
});

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu--active");
  closeIcon.classList.toggle("d-none");
  humbIcon.classList.toggle("d-none");
});

searchBtnMob.addEventListener("click", () => {
  searchWrapper.classList.toggle("search__wrapper--active");
  searchIconCloseMob.classList.toggle("d-none");
  searchIconMob.classList.toggle("d-none");
});

/**
 * Header sticky
 */

if (document.documentElement.clientWidth > 1200) {
  console.log("true");
  window.onscroll = function () {
    myFunction();
  };
}

let navbar = document.querySelector(".nav-menu");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("nav-menu--sticky");
  } else {
    navbar.classList.remove("nav-menu--sticky");
  }
}

/**
 * Footer sticky
 */
function isMainHasChild(elem) {
  if (elem.hasChildNodes()) {
    footer.classList.add("footer--sticky");
  }
}

isMainHasChild(main);

/**
 * Star rating
 */
const ratingStars = [...document.getElementsByClassName("star-rating__star")];

function executeRating(stars) {
  const starClassActive = "star-rating__star fas fa-star";
  const starClassInactive = "star-rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className === starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);

/**
 * Tiny Slider Config
 */
let slider = tns({
  container: ".carousel__main-carousel",
  items: 1,
  controlsContainer: ".custom-controls",
  mouseDrag: true,
  navContainer: ".thumbs__carousel-thumbs",
  navAsThumbnails: true,
  autoplay: false,
  autoplayButton: false,
  // autoplayTimeout: 1000,
  // autoplayButton: "#customize-toggle",
  swipeAngle: false,
  // speed: 400,
  controls: false,
  autoWidth: true,
  center: true,
  swipeAngle: false,
  fixedWidth: 300,
  gutter: 300,
  responsive: {
    992: {
      gutter: 510,
      controls: true,
      fixedWidth: 620,
      center: true,
    },
    1200: {
      fixedWidth: 760,
    },
  },
});
