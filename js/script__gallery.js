const headerContentMenuBurger = document.querySelector(".header__content__menuBurger");
const headerMenuBurgerChilds = document.querySelectorAll(".header__menuBurger--line");
const headerMenuNav = document.querySelector(".header__menu--nav");

headerContentMenuBurger.addEventListener("click", () => {
  headerMenuNav.classList.toggle("header__menu--nav--toggle");
});

const arrowUp = document.querySelector(".arrow-up");

arrowUp.addEventListener("click", () => {
  console.log(scroll(0, 0));
});

const imagenes = document.querySelectorAll(".main__section__photo");
const containerLightbox = document.querySelector(".container__lightbox__disabled");
const imagenLightbox = document.querySelector(".imagen__lightbox");

imagenes.forEach(imagen => {
  imagen.addEventListener("click", () => {
    containerLightbox.classList.replace("container__lightbox__disabled", "container__lightbox__enabled")
    imagenLightbox.src = imagen.src;
  });
  containerLightbox.addEventListener("click", () => {
    containerLightbox.classList.replace("container__lightbox__enabled", "container__lightbox__disabled")
  })
});



let footerYear = document.querySelector(".footer__year");
footerYear.textContent = new Date().getFullYear();