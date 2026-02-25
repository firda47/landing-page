document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  if (navbarCollapse && navLinks.length) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const toggler = document.querySelector(".navbar-toggler");
        const isMobile = toggler && window.getComputedStyle(toggler).display !== "none";
        if (isMobile) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) ||
            new bootstrap.Collapse(navbarCollapse, { toggle: false });
          bsCollapse.hide();
        }
      });
    });
  }
});
