// MOBILE NAVIGATION
const burgerBtn = document.getElementById("burger-btn");
const navList = document.getElementById("nav-list");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");

// OPEN & CLOSE MOBILE NAV - BURGER CLICK
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  navList.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("locked");
});

// CLOSE NAV - LINK CLICKED
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveClasses();
  });
});

// CLOSE NAV - CLICK OUTSIDE OF NAV
overlay.addEventListener("click", (e) => {
  if (e.target == overlay) {
    removeActiveClasses();
  }
});

// REMOVE ACTIVE CLASSES
function removeActiveClasses() {
  burgerBtn.classList.remove("active");
  navList.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("locked");
}
