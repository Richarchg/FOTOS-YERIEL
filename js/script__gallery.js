const headerContentMenuBurger = document.querySelector(".header__content__menuBurger");
const headerMenuBurgerChilds = document.querySelectorAll(".header__menuBurger--line");
const headerMenuNav = document.querySelector(".header__menu--nav");

const headerContentInformation = document.querySelector(".header__content__information");

const headerLogo = document.querySelector(".header__logo");
const headerMenuA = document.querySelectorAll(".header__menu--a");

headerContentMenuBurger.addEventListener("click", () => {
  headerMenuNav.classList.toggle("header__menu--nav--toggle");
});

let footerYear = document.querySelector(".footer__year");
footerYear.textContent = new Date().getFullYear();

addEventListener("DOMContentLoaded", () => {
  addEventListener("scroll", () => {
    headerMenuA.forEach(headerMenuA => {
      if (window.innerWidth > 1024) {
        if (window.scrollY > 100) {
          headerMenuA.classList.add("header__menu--a--withHover");
        } else {
          headerMenuA.classList.remove("header__menu--a--withHover");
          headerMenuA.classList.add("header__menu--a");
        }
      }
    })
  })
});

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", () => {
  console.log(scroll(0, 0));
});