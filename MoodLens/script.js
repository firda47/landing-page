const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const themeToggle = document.querySelector(".theme-toggle");

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);

  if (themeToggle) {
    themeToggle.setAttribute("aria-label", isDark ? "Aktifkan light mode" : "Aktifkan dark mode");
    themeToggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
}

const savedTheme = localStorage.getItem("moodlens-theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  applyTheme("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem("moodlens-theme", nextTheme);
  });
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open");
  });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const categorySelect = document.getElementById("filterCategory");
const conditionSelect = document.getElementById("filterCondition");
const budgetSelect = document.getElementById("filterBudget");
const productCards = document.querySelectorAll("#productsList .product-card");

function applyFilters() {
  if (!productCards.length) return;

  const selectedCategory = categorySelect ? categorySelect.value : "all";
  const selectedCondition = conditionSelect ? conditionSelect.value : "all";
  const selectedBudget = budgetSelect ? budgetSelect.value : "all";

  productCards.forEach((card) => {
    const matchCategory = selectedCategory === "all" || card.dataset.category === selectedCategory;
    const matchCondition = selectedCondition === "all" || card.dataset.condition === selectedCondition;
    const matchBudget = selectedBudget === "all" || card.dataset.budget === selectedBudget;
    card.style.display = matchCategory && matchCondition && matchBudget ? "block" : "none";
  });
}

[categorySelect, conditionSelect, budgetSelect].forEach((select) => {
  if (select) select.addEventListener("change", applyFilters);
});

applyFilters();

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  if (!button) return;

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    faqItems.forEach((node) => node.classList.remove("active"));
    if (!isActive) item.classList.add("active");
  });
});

const contactForm = document.querySelector(".contact-form");
const formNote = document.getElementById("formNote");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Pesan berhasil dikirim. Tim kami akan menghubungi kamu segera.";
    contactForm.reset();
  });
}

const countUpItems = document.querySelectorAll(".home-about-stats .count-up");

function formatCount(value, decimals) {
  if (decimals > 0) return value.toFixed(decimals);
  return Math.round(value).toLocaleString("id-ID");
}

function startCountUp(element) {
  if (element.dataset.animated === "true") return;
  element.dataset.animated = "true";

  const target = Number(element.dataset.target || 0);
  const decimals = Number(element.dataset.decimals || 0);
  const prefix = element.dataset.prefix || "";
  const suffix = element.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    element.textContent = `${prefix}${formatCount(current, decimals)}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = `${prefix}${formatCount(target, decimals)}${suffix}`;
    }
  }

  requestAnimationFrame(tick);
}

if (countUpItems.length) {
  if ("IntersectionObserver" in window) {
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCountUp(entry.target);
            countObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.55 }
    );

    countUpItems.forEach((item) => countObserver.observe(item));
  } else {
    countUpItems.forEach((item) => startCountUp(item));
  }
}
