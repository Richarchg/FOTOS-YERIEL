const headerMenuBurger = document.querySelector(".header__menuBurger");
const headerMenuNav = document.querySelector(".header__menu--nav");

headerMenuBurger.addEventListener("click",()=> {
    headerMenuNav.classList.toggle("header__menu--nav--toggle");
});