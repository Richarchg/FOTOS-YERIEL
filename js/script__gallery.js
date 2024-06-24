const headerContentMenuBurger = document.querySelector(".header__content__menuBurger");
const headerMenuBurgerChilds = document.querySelectorAll(".header__menuBurger--line");
const headerMenuNav = document.querySelector(".header__menu--nav");

headerContentMenuBurger.addEventListener("click", () => {
  headerMenuNav.classList.toggle("header__menu--nav--toggle");
});

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", () => {
  console.log(scroll(0,0));
});