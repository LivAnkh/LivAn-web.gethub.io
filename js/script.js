const menuButton = document.querySelector(".bar-menu button");
const dropdown = document.querySelector(".dropdown-menu");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle?.querySelector("i");
const scrollTopButton = document.querySelector(".scroll-top");

const setTheme = (isLight) => {
  document.body.classList.toggle("light-theme", isLight);
  themeIcon?.classList.toggle("fa-moon", isLight);
  themeIcon?.classList.toggle("fa-sun", !isLight);
  themeToggle?.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
};

setTheme(localStorage.getItem("portfolio-theme") === "light");
themeToggle?.addEventListener("click", () => setTheme(!document.body.classList.contains("light-theme")));

menuButton?.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  dropdown.classList.toggle("show", !expanded);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".bar-menu")) {
    dropdown?.classList.remove("show");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("scroll", () => {
  scrollTopButton?.classList.toggle("show", window.scrollY > 350);
});

scrollTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
