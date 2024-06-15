const headerMenuBurger = document.querySelector(".header__menuBurger");
const headerMenuNav = document.querySelector(".header__menu--nav");

const headerContentInformation = document.querySelector(
  ".header__content__information"
);

const headerLogo = document.querySelector(".header__logo");

headerMenuBurger.addEventListener("click", () => {
  headerMenuNav.classList.toggle("header__menu--nav--toggle");
});

addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    headerContentInformation.classList.add(
      "header__content__information--white"
    );
    headerMenuBurger.src = "../icons/menu_gris.svg";
    headerLogo.classList.add("header__logo--gray");
  } else {
    headerContentInformation.classList.remove(
      "header__content__information--white"
    );
    headerMenuBurger.src = "../icons/menu.svg";
    headerLogo.classList.remove("header__logo--gray");
  }
});
