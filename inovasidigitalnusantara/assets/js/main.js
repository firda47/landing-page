document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const header = document.querySelector("header");
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 10);
    });
  }

  if (toggle && links) {
    const setAria = (expanded) => {
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    };

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      setAria(isOpen);
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 900) {
          links.classList.remove("open");
          toggle.classList.remove("open");
          setAria(false);
        }
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        links.classList.remove("open");
        toggle.classList.remove("open");
        setAria(false);
      }
    });
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    if (link.target === "_blank" || link.hasAttribute("download")) return;

    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }

    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (url.pathname === window.location.pathname && url.hash) return;

    event.preventDefault();
    document.body.classList.remove("loaded");
    document.body.classList.add("fade-out");

    window.setTimeout(() => {
      window.location.href = url.href;
    }, 220);
  });
});
