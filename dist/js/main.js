// Select DOM items
const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu_nav");
const menuBrand = document.querySelector(".menu_branding");
const navItems = document.querySelectorAll(".nav_item");

// Set init state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set menu state
    showMenu = false;
  }
}
