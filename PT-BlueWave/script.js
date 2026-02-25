// ===== BlueWave Studio - Main Script =====

document.addEventListener('DOMContentLoaded', () => {

  // ===== PAGE TRANSITION - ZOOM SUBTLE =====
  const style = document.createElement('style');
  style.textContent = `
    @keyframes zoomIn  { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
    @keyframes zoomOut { from { opacity: 1; transform: scale(1); }    to { opacity: 0; transform: scale(1.03); } }
    body { animation: zoomIn 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }
    body.leaving { animation: zoomOut 0.2s cubic-bezier(0.55, 0, 1, 0.45) both; pointer-events: none; }
  `;
  document.head.appendChild(style);

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel') && !link.hasAttribute('target')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.add('leaving');
        setTimeout(() => { window.location.href = href; }, 180);
      });
    }
  });

  // ===== SCROLL PROGRESS BAR =====
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.querySelector('.navbar');
  const isSolidNav = navbar && navbar.classList.contains('navbar-solid');

  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        if (!isSolidNav) {
          navbar.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // ===== ACTIVE NAV LINK =====
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ===== HAMBURGER MENU =====
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuClose = document.getElementById('menuClose');

  const openMenu = () => {
    hamburger && hamburger.classList.add('open');
    mobileMenu && mobileMenu.classList.add('open');
    if (menuOverlay) {
      menuOverlay.style.display = 'block';
      requestAnimationFrame(() => menuOverlay.classList.add('show'));
    }
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    hamburger && hamburger.classList.remove('open');
    mobileMenu && mobileMenu.classList.remove('open');
    if (menuOverlay) {
      menuOverlay.classList.remove('show');
      setTimeout(() => { menuOverlay.style.display = ''; }, 300);
    }
    document.body.style.overflow = '';
  };

  if (hamburger && mobileMenu) {
    hamburger.style.position = 'relative';
    hamburger.style.zIndex = '2000';
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });
    mobileMenu.querySelectorAll('a:not(.mobile-menu-logo)').forEach(link => {
      link.addEventListener('click', () => closeMenu());
    });
    menuOverlay && menuOverlay.addEventListener('click', () => closeMenu());
    menuClose && menuClose.addEventListener('click', () => closeMenu());
  }

  // ===== COUNT-UP ANIMATION =====
  const countUpElements = document.querySelectorAll('.count-up');
  if (countUpElements.length > 0) {
    const countUp = (el) => {
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current);
      }, 16);
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          countUp(entry.target);
        }
      });
    }, { threshold: 0.5 });
    countUpElements.forEach(el => observer.observe(el));
  }

  // ===== PORTFOLIO FILTER =====
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item[data-category]');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        portfolioItems.forEach(item => {
          item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) ? 'block' : 'none';
        });
      });
    });
  }

  // ===== CONTACT FORM =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.innerHTML = '✅ Pesan Terkirim!';
      btn.disabled = true;
      btn.style.background = '#28a745';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.disabled = false;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // ===== INIT AOS =====
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 900, once: true, offset: 80, easing: 'ease-out-cubic' });
  }

  // ===== HERO TYPING EFFECT =====
  const typingEl = document.querySelector('.hero-typing');
  if (typingEl) {
    const words = ['Digital Brands', 'Experiences', 'Solutions', 'Identities'];
    let wordIndex = 0, charIndex = 0, isDeleting = false;
    const type = () => {
      const word = words[wordIndex];
      if (!isDeleting) {
        typingEl.textContent = word.slice(0, ++charIndex);
        if (charIndex === word.length) { isDeleting = true; setTimeout(type, 1500); return; }
      } else {
        typingEl.textContent = word.slice(0, --charIndex);
        if (charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; }
      }
      setTimeout(type, isDeleting ? 60 : 100);
    };
    type();
  }

  // ===== NEWSLETTER =====
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const input = form.querySelector('input');
      btn.textContent = 'Subscribed! ✓';
      btn.style.background = '#28a745';
      input.value = '';
      setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
    });
  });

});