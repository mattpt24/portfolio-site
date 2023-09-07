console.log("If you see this, JS is working");


const menuWrapper = document.querySelector(".menu__wrapper");
const menuContainer = document.querySelector(".menu__container");
const menuToggleBtn = document.querySelector(".nav__toggle-menu");

menuToggleBtn.addEventListener("click", () => {
    menuWrapper.classList.add("menu--activated");
    menuContainer.classList.add("menu-content--activated");
});


menuWrapper.addEventListener("click", () => {
    menuWrapper.classList.remove("menu--activated");
    menuContainer.classList.remove("menu-content--activated");
});