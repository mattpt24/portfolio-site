"use strict";

var menuWrapper = document.querySelector(".menu__wrapper");
var menuContainer = document.querySelector(".menu__container");
var menuToggleBtn = document.querySelector(".nav__toggle-menu");
var navLink1 = document.querySelector(".nav-item-1");
var navLink2 = document.querySelector(".nav-item-2");
var navLink3 = document.querySelector(".nav-item-3");
var navLink4 = document.querySelector(".nav-item-4");
menuToggleBtn.addEventListener("click", function () {
  menuWrapper.classList.add("menu--activated");
  menuContainer.classList.add("menu-content--activated");
  navLink1.classList.add("entrance-1");
  navLink2.classList.add("entrance-2");
  navLink3.classList.add("entrance-3");
  navLink4.classList.add("entrance-4");
});
menuWrapper.addEventListener("click", function () {
  menuWrapper.classList.remove("menu--activated");
  menuContainer.classList.remove("menu-content--activated");
  navLink1.classList.remove("entrance-1");
  navLink2.classList.remove("entrance-2");
  navLink3.classList.remove("entrance-3");
  navLink4.classList.remove("entrance-4");
});
var pastSitesModal = document.querySelector(".past-sites__container");
var openPastSitesModal = document.querySelector(".past-site");
var closePastSitesModal = document.querySelector(".close-modal");
var site1 = document.querySelector(".site-1");
var site2 = document.querySelector(".site-2");
var site3 = document.querySelector(".site-3");
var site4 = document.querySelector(".site-4");
openPastSitesModal.addEventListener("click", function () {
  pastSitesModal.classList.add("past-sites--activated");
  site1.classList.add("entrance-1");
  site2.classList.add("entrance-2");
  site3.classList.add("entrance-3");
  site4.classList.add("entrance-4");
});
closePastSitesModal.addEventListener("click", function () {
  pastSitesModal.classList.remove("past-sites--activated");
  site1.classList.remove("entrance-1");
  site2.classList.remove("entrance-2");
  site3.classList.remove("entrance-3");
  site4.classList.remove("entrance-4");
});

// pastSitesModal.addEventListener("click", () => {
// pastSitesModal.classList.remove("past-sites--activated");
// site1.classList.remove("entrance-1");
// site2.classList.remove("entrance-2");
// site3.classList.remove("entrance-3");
// site4.classList.remove("entrance-4");
// });

var navbar = document.querySelector("header");
window.addEventListener("scroll", change);
function change() {
  var topOfPage = window.scrollY;
  if (topOfPage >= 100) {
    navbar.classList.add("changed");
  } else {
    navbar.classList.remove("changed");
  }
}
var parallax = document.querySelector(".pattern-section");
window.addEventListener("scroll", function () {
  var offset = window.scrollY;
  parallax.style.backgroundPositionY = offset * 0.5 + "px";
});
var parallax2 = document.querySelector("#projects");
window.addEventListener("scroll", function () {
  var offset2 = window.scrollY;
  parallax2.style.backgroundPositionY = offset2 * 0.5 + "px";
});