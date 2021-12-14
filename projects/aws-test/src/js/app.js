const navBtn = document.querySelector(".header__navigation-btn");
const navMenu = document.querySelector(".nav-menu");
const humbIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times");
const searchBtn = document.querySelector(".search__btn");
const searchWrapper = document.querySelector(".search__wrapper");
const searchBtnMob = document.querySelector(".header__search-btn--mobile");
const searchIconMob = document.querySelector(".header__search-icon");
const searchIconCloseMob = document.querySelector(".header__search-icon-close");

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

// найти инпуты с атрибутом и проверять атрибут чек, если есть, добавить класс эктив

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
