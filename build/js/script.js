

const menuWrapper = document.querySelector(".menu__wrapper");
const menuContainer = document.querySelector(".menu__container");
const menuToggleBtn = document.querySelector(".nav__toggle-menu");
const navLink1 = document.querySelector(".nav-item-1");
const navLink2 = document.querySelector(".nav-item-2");
const navLink3 = document.querySelector(".nav-item-3");
const navLink4 = document.querySelector(".nav-item-4");


menuToggleBtn.addEventListener("click", () => {
    menuWrapper.classList.add("menu--activated");
    menuContainer.classList.add("menu-content--activated");
    navLink1.classList.add("entrance-1");
    navLink2.classList.add("entrance-2");
    navLink3.classList.add("entrance-3");
    navLink4.classList.add("entrance-4");
});


menuWrapper.addEventListener("click", () => {
    menuWrapper.classList.remove("menu--activated");
    menuContainer.classList.remove("menu-content--activated");
    navLink1.classList.remove("entrance-1");
    navLink2.classList.remove("entrance-2");
    navLink3.classList.remove("entrance-3");
    navLink4.classList.remove("entrance-4");
});



const pastSitesModal = document.querySelector(".past-sites__container");
const openPastSitesModal = document.querySelector(".past-site");
const closePastSitesModal = document.querySelector(".close-modal");
const site1 = document.querySelector(".site-1");
const site2 = document.querySelector(".site-2");
const site3 = document.querySelector(".site-3");
const site4 = document.querySelector(".site-4");



openPastSitesModal.addEventListener("click", () => {
pastSitesModal.classList.add("past-sites--activated");
site1.classList.add("entrance-1");
site2.classList.add("entrance-2");
site3.classList.add("entrance-3");
site4.classList.add("entrance-4");
});

closePastSitesModal.addEventListener("click", () => {
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


const parallax = document.querySelector(".pattern-section");
window.addEventListener("scroll", () => {
    let offset = window.scrollY;
        parallax.style.backgroundPositionY = offset * 0.5 + "px";
    });