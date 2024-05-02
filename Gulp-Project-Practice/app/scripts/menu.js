const menuButton = document.querySelector(".header__button-menu");
const menu = document.querySelector('.header .menu');

menuButton.addEventListener("click", () => {
    menu.classList.toggle('menu--mobile');
})