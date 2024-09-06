// THEME SWITCHER

const prefersDarkScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

let darkMode = localStorage.getItem("dark-mode");

if (darkMode === null) {
  if (prefersDarkScheme) {
    localStorage.setItem("dark-mode", "enabled");
  }
}

const themeButtons = document.getElementsByClassName("theme-button");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

for (let i = 0; i < themeButtons.length; i++) {
  themeButtons[i].addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode === "enabled") {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
}

// MOBILE MENU

const isMenuOpen = false;

const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const mobileMenuOpenButton = document.querySelector(".hamburger-menu");
const mobileMenuCloseButton = document.querySelector(".close-button");

const openMenu = () => {
  mobileMenu.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  mobileMenu.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
};

closeMenu();

mobileMenuOpenButton.addEventListener("click", openMenu);
mobileMenuCloseButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);
