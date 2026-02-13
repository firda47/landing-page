// ====== Drawer Mobile Menu ======
const toggleBtn = document.querySelector(".nav__toggle");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".drawer__close");

function openDrawer() {
  drawer.classList.add("show");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("show");
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

toggleBtn?.addEventListener("click", openDrawer);
closeBtn?.addEventListener("click", closeDrawer);
overlay?.addEventListener("click", closeDrawer);

drawer?.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => closeDrawer());
});

// ====== Smooth scroll helper ======
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll");
    if (!target) return;
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
  });
});

// ====== Active nav link on scroll ======
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".nav__links a");

function setActiveLink() {
  let current = "";
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 120;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) current = id;
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });
}
window.addEventListener("scroll", setActiveLink);
setActiveLink();

// ====== NAV shadow on scroll (menu tetap tampil) ======
const nav = document.getElementById("nav");
function handleNavOnScroll() {
  nav.classList.toggle("nav--scrolled", window.scrollY > 80);
}
window.addEventListener("scroll", handleNavOnScroll);
handleNavOnScroll();

// ====== Typing effect (judul berjalan) ======
const typeEl = document.getElementById("typeText");
const phrases = [
  "Connecting People",
  "Business & Opportunities",
  "Safe, On-time, Modern",
  "Your Trusted Airline",
];
const maxLen = Math.max(...phrases.map(p => p.length));
document.documentElement.style.setProperty("--type-w", `${maxLen}ch`);

let pIndex = 0;
let cIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typeEl) return;
  const current = phrases[pIndex];

  if (!deleting) {
    cIndex++;
    typeEl.textContent = current.slice(0, cIndex);
    if (cIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1100);
      return;
    }
  } else {
    cIndex--;
    typeEl.textContent = current.slice(0, cIndex);
    if (cIndex === 0) {
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 55);
}
typeLoop();

// ====== Reveal on scroll ======
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  },
  { threshold: 0.12 }
);
reveals.forEach((el) => io.observe(el));

// ====== Services Slider (prev/next + dots) ======
const slider = document.getElementById("servicesSlider");
const prevBtn = document.getElementById("srvPrev");
const nextBtn = document.getElementById("srvNext");
const dotsWrap = document.getElementById("srvDots");

function getCardWidth() {
  if (!slider) return 0;
  const first = slider.querySelector(".memories__card");
  if (!first) return 0;
  const gap = parseFloat(getComputedStyle(slider).gap || "0");
  return first.getBoundingClientRect().width + gap;
}

function scrollSlider(dir = 1) {
  if (!slider) return;
  slider.scrollBy({ left: getCardWidth() * dir, behavior: "smooth" });
}

prevBtn?.addEventListener("click", () => scrollSlider(-1));
nextBtn?.addEventListener("click", () => scrollSlider(1));

function buildDots() {
  if (!slider || !dotsWrap) return;
  dotsWrap.innerHTML = "";
  const cards = slider.querySelectorAll(".memories__card");
  const total = cards.length;
  for (let i = 0; i < total; i++) {
    const d = document.createElement("span");
    d.className = "dot" + (i === 0 ? " active" : "");
    d.addEventListener("click", () => {
      slider.scrollTo({ left: getCardWidth() * i, behavior: "smooth" });
    });
    dotsWrap.appendChild(d);
  }
}

function updateDots() {
  if (!slider || !dotsWrap) return;
  const dots = dotsWrap.querySelectorAll(".dot");
  const idx = Math.round(slider.scrollLeft / Math.max(getCardWidth(), 1));
  dots.forEach((d, i) => d.classList.toggle("active", i === idx));
}

buildDots();
slider?.addEventListener("scroll", () => {
  window.requestAnimationFrame(updateDots);
});

// ====== Contact form (frontend demo) ======
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    note.textContent = "Mohon lengkapi semua field terlebih dahulu.";
    return;
  }

  note.textContent =
    "Terima kasih! Pesan Anda sudah tersimpan";
  form.reset();
});
