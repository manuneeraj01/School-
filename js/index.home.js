// for main-navbar nd logo sticky
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".main-navbar");
  navbar.classList.toggle("active", window.scrollY > 0);

  const mainNavbarLogo = document.querySelector(".left-col");
  mainNavbarLogo.classList.toggle("active", window.scrollY > 0);
});

// for hiding content for navbar-side
window.addEventListener("scroll", function () {
  const midCol = document.querySelector(".mid-col");
  midCol.classList.toggle("active", window.scrollY > 0);
  const rightCol = document.querySelector(".right-col");
  rightCol.classList.toggle("active", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
  const newnav = document.querySelector(".newnav");
  newnav.classList.toggle('active');
}

//display navbar during responsive

