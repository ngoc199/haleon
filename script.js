const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".navbar__menu-btn");
const menu = document.querySelector(".navbar__menu");
const menuItems = document.querySelectorAll(".navbar__menu .menu__item");

/**
 * @see https://stackoverflow.com/questions/52637835/dynamically-change-background-color-on-scroll
 */
const changeNavbarBackground = () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 150;
  y = y < 1 ? 1 : y; // ensure y is always >= 1 (due to Safari's elastic scroll)
  if (y > 1) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
};

window.addEventListener("scroll", changeNavbarBackground);

const toggleMenu = () => {
  menuButton.classList.toggle("navbar__menu-btn--active");
  menu.classList.toggle("navbar__menu--active");
};

menuButton.addEventListener("click", toggleMenu);

const activeLink = (e) => {
  // Reset all menu item
  menuItems.forEach((item) => {
    item.classList.remove("menu__item--active");
  });

  // Active the clicked menu item
  e.target.parentNode.classList.add("menu__item--active");

  // Close the menu
  toggleMenu();
};

menuItems.forEach((item) => item.addEventListener("click", activeLink));
