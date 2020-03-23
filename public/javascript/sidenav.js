window.addEventListener("click", e => {
  const navBar = document.getElementById("sidenav");

  if (navBar.offsetWidth > 100 && e.offsetX > navBar.offsetWidth)
    navBar.setAttribute("class", "sidenavClosed");
});

const openNavBar = () => {
  const navBar = document.getElementById("sidenav");

  navBar.setAttribute("class", "sidenavOpen");
};
