document.addEventListener("DOMContentLoaded", function () {
  const navbarHeight = document.querySelector("header").offsetHeight;

  const links = document.querySelectorAll("nav ul li a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        link.classList.add("active");
        const offset = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
      links.forEach((otherLink) => {
        otherLink.classList.remove("active");
      });
    });
  });
});
