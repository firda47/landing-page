// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const bars = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translateY(8px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            bars.forEach(bar => { bar.style.transform = 'none'; bar.style.opacity = '1'; });
        }
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.querySelectorAll('span').forEach(bar => { bar.style.transform = 'none'; bar.style.opacity = '1'; });
        });
    });
}

// Smooth scroll with navbar offset
const navbar = document.querySelector('.navbar');
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', evt => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            evt.preventDefault();
            const offset = navbar ? navbar.offsetHeight - 6 : 0;
            window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        }
    });
});

// Scroll shadow on navbar
if (navbar) {
    const toggleShadow = () => {
        if (window.scrollY > 40) {
            navbar.style.boxShadow = '0 8px 30px rgba(45,31,22,0.12)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    };
    toggleShadow();
    window.addEventListener('scroll', toggleShadow);
}

// Intersection animations
const animated = document.querySelectorAll('.service-card, .feature-card, .process-step, .collection-card, .testimonial-card, .story-card, .contact-card');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

animated.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
});

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const button = item.querySelector('.faq-question');
    if (!button) return;
    button.addEventListener('click', () => {
        faqItems.forEach(other => { if (other !== item) other.classList.remove('active'); });
        item.classList.toggle('active');
    });
});

// Ripple effect
const buttons = document.querySelectorAll('.btn, .btn-link, .btn-outline');
buttons.forEach(btn => {
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.addEventListener('click', e => {
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        ripple.style.position = 'absolute';
        ripple.style.background = 'rgba(123, 75, 42, 0.18)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);
    });
});

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `@keyframes ripple { to { transform: scale(4); opacity: 0; } }`;
document.head.appendChild(rippleStyle);

// Page load fade
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

console.log('Alam Kayu site ready – crafted for local furniture.');
