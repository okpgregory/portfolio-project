let darkMode = localStorage.getItem("dark-mode");
const themeButton = document.getElementById("theme-button");

const enableDarkMode = () => {
  document.body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("dark-mode", null);
};

if (darkMode === "enabled") {
  enableDarkMode();
}

themeButton.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "enabled") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});
