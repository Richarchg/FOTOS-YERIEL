const headerContentMenuBurger = document.querySelector(".header__content__menuBurger");
const headerMenuBurgerChilds = document.querySelectorAll(".header__menuBurger--line");
const headerMenuNav = document.querySelector(".header__menu--nav");

const headerContentInformation = document.querySelector(".header__content__information");

const headerLogo = document.querySelector(".header__logo");

headerContentMenuBurger.addEventListener("click", () => {
  headerMenuNav.classList.toggle("header__menu--nav--toggle");
});

addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    headerContentInformation.classList.add("header__content__information--white");

    headerLogo.classList.add("header__logo--gray");
    headerLogo.classList.remove("header__logo");

    headerMenuBurgerChilds.forEach(line => {
      line.style.background = "rgba(0,0,0,.6)";
    });

  } else {
    headerContentInformation.classList.remove("header__content__information--white");
    headerLogo.classList.add("header__logo");
    headerLogo.classList.remove("header__logo--gray");

    headerMenuBurgerChilds.forEach(line => {
      line.style.background = "#fff";
    });

  }
});
