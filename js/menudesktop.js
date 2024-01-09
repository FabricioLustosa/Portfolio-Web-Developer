const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const menuDesk = document.querySelector(".menu-desktop");
  menuDesk.classList.toggle("active");

  menuDesk.addEventListener("click", function () {
    menuDesk.classList.remove("active");
  });
});
