document.addEventListener("DOMContentLoaded", function () {
  const navbarHeight = document.querySelector("header").offsetHeight;

  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelectorAll("nav ul li a").forEach((otherAnchor) => {
        otherAnchor.classList.remove("active");
      });
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        anchor.classList.add("active");
        const offset = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: offset,
          behavior: "smooth",
        });
      }
    });
  });
});
