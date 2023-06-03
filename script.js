const navbarToggleBtn = document.getElementById("navbar-toggle-btn");
const navbarMenu = document.getElementsByClassName("navbar-menu")[0];
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});


