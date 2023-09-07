"use strict";

console.log("If you see this, JS is working");
var menuWrapper = document.querySelector(".menu__wrapper");
var menuContainer = document.querySelector(".menu__container");
var menuToggleBtn = document.querySelector(".nav__toggle-menu");
menuToggleBtn.addEventListener("click", function () {
  menuWrapper.classList.add("menu--activated");
  menuContainer.classList.add("menu-content--activated");
});
menuWrapper.addEventListener("click", function () {
  menuWrapper.classList.remove("menu--activated");
  menuContainer.classList.remove("menu-content--activated");
});