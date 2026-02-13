// ========== DOM Ready ==========
document.addEventListener('DOMContentLoaded', function() {
  
  // ========== Mobile Navigation Toggle ==========
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  
  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('open');
    mainNav.classList.toggle('open');
  });

  // Close nav when clicking on a link
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navToggle.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });

  // ========== Smooth Scroll ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = 80;
          const targetPosition = target.offsetTop - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // ========== Header Scroll Effect ==========
  const header = document.querySelector('.site-header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ========== Animated Counter for Stats ==========
  const stats = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  function animateStats() {
    stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target;
        }
      };

      updateCounter();
    });
  }

  // Trigger stats animation when in viewport
  const statsSection = document.querySelector('.stats-bar');
  
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        animateStats();
        statsAnimated = true;
      }
    });
  }, { threshold: 0.5 });

  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // ========== Testimonial Slider ==========
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const prevTestimonialBtn = document.getElementById('prevTestimonial');
  const nextTestimonialBtn = document.getElementById('nextTestimonial');
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
      item.classList.remove('active');
      if (i === index) {
        item.classList.add('active');
      }
    });
  }

  function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    showTestimonial(currentTestimonial);
  }

  function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length;
    showTestimonial(currentTestimonial);
  }

  if (prevTestimonialBtn && nextTestimonialBtn) {
    prevTestimonialBtn.addEventListener('click', prevTestimonial);
    nextTestimonialBtn.addEventListener('click', nextTestimonial);

    // Auto play testimonials
    let testimonialInterval = setInterval(nextTestimonial, 5000);

    // Pause on hover
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
      testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
      });

      testimonialSlider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(nextTestimonial, 5000);
      });
    }
  }

  // ========== FAQ Accordion ==========
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all items
      faqItems.forEach(faq => {
        faq.classList.remove('active');
      });
      
      // Open clicked item if it wasn't active
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // ========== Contact Form ==========
  const contactForm = document.getElementById('contactForm');
  const formNotice = document.getElementById('formNotice');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Show loading
      formNotice.textContent = 'Mengirim pesan...';
      formNotice.className = 'form-notice show';
      formNotice.style.background = '#dbeafe';
      formNotice.style.color = '#1e40af';

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        // Success
        formNotice.textContent = '✓ Terima kasih! Pesan Anda telah diterima. Tim kami akan menghubungi Anda segera.';
        formNotice.className = 'form-notice show success';
        
        // Reset form
        contactForm.reset();

        // Hide notice after 5 seconds
        setTimeout(() => {
          formNotice.classList.remove('show');
        }, 5000);
      }, 1500);
    });
  }

  // ========== Scroll Animations ==========
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Elements to animate on scroll
  const animatedElements = document.querySelectorAll(`
    .business-card,
    .portfolio-item,
    .news-card,
    .job-card,
    .about-content,
    .about-image,
    .section-header
  `);

  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // ========== Portfolio Lightbox (Optional Enhancement) ==========
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
      // You can add a lightbox/modal functionality here
      console.log('Portfolio item clicked');
    });
  });

  // ========== Read More News ==========
  
  
  readMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Add your news detail page navigation here
      console.log('Read more clicked');
    });
  });

  // ========== Back to Top Button (Optional) ==========
  // Create back to top button
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--yellow));
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    z-index: 999;
  `;
  
  document.body.appendChild(backToTop);

  // Show/hide back to top button
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
  });

  // Scroll to top on click
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ========== Lazy Loading Images (Optional) ==========
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });

  // ========== Dynamic Year in Footer ==========
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ========== Loading Animation (Optional) ==========
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });

  // ========== Performance Monitoring ==========
  console.log('🚀 PT Bumi Mekanika Website Loaded Successfully!');
  console.log('📊 Performance:', {
    loadTime: (performance.now() / 1000).toFixed(2) + 's',
    timestamp: new Date().toLocaleString('id-ID')
  });

  // ========== Accessibility Enhancements ==========
  // Add keyboard navigation for sliders
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      if (document.activeElement.closest('.testimonial-slider')) {
        prevTestimonial();
      }
    } else if (e.key === 'ArrowRight') {
      if (document.activeElement.closest('.testimonial-slider')) {
        nextTestimonial();
      }
    }
  });

  // ========== Google Analytics (Optional - Add your tracking ID) ==========
  /*
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-TRACKING-ID');
  */

  // ========== WhatsApp Float Button (Optional) ==========
  const whatsappBtn = document.createElement('a');
  whatsappBtn.href = 'https://wa.me/6281234567890'; // Ganti dengan nomor WA Anda
  whatsappBtn.target = '_blank';
  whatsappBtn.className = 'whatsapp-float';
  whatsappBtn.innerHTML = `
    <svg width="32" height="32" viewBox="0 0 32 32" fill="white">
      <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.737 5.482 2.023 7.784L0 32l8.377-2.138A15.926 15.926 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.404 0-4.662-.628-6.618-1.73l-.475-.282-4.762 1.213 1.237-4.669-.31-.492A13.253 13.253 0 012.667 16c0-7.364 5.97-13.333 13.333-13.333 7.364 0 13.333 5.97 13.333 13.333 0 7.364-5.97 13.333-13.333 13.333zm7.336-9.785c-.402-.2-2.382-1.175-2.751-1.31-.369-.134-.638-.201-.906.201-.268.402-1.04 1.31-1.275 1.578-.234.268-.469.302-.871.101-.402-.2-1.697-.625-3.233-1.994-1.195-1.065-2.001-2.38-2.235-2.782-.234-.402-.025-.619.176-.819.18-.18.402-.469.603-.704.2-.234.268-.402.402-.67.134-.268.067-.502-.033-.704-.101-.201-.906-2.185-1.242-2.993-.327-.785-.66-.679-.906-.692-.234-.012-.502-.015-.77-.015-.268 0-.704.1-1.073.502-.369.402-1.408 1.377-1.408 3.358 0 1.982 1.442 3.898 1.643 4.166.2.268 2.825 4.313 6.848 6.048.958.414 1.706.661 2.289.847.962.306 1.837.263 2.528.159.771-.115 2.382-.974 2.717-1.915.335-.94.335-1.747.234-1.915-.1-.168-.369-.268-.771-.469z"/>
    </svg>
  `;
  whatsappBtn.style.cssText = `
    position: fixed;
    bottom: 90px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #25D366;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
    z-index: 999;
    transition: all 0.3s ease;
    animation: pulse 2s infinite;
  `;
  
  document.body.appendChild(whatsappBtn);

  whatsappBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
  });

  whatsappBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });

  // ========== Print Styles Handler ==========
  window.addEventListener('beforeprint', function() {
    console.log('Preparing to print...');
  });

  // ========== Copy to Clipboard (for contact info) ==========
  const copyButtons = document.querySelectorAll('[data-copy]');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const textToCopy = this.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = this.textContent;
        this.textContent = '✓ Copied!';
        setTimeout(() => {
          this.textContent = originalText;
        }, 2000);
      });
    });
  });

  // ========== Service Worker Registration (Optional - for PWA) ==========
  /*
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.log('Service Worker registration failed', err));
  }
  */

  // ========== Analytics Event Tracking ==========
  function trackEvent(category, action, label) {
    console.log('Event:', { category, action, label });
    // Add your analytics tracking code here
    // gtag('event', action, { 'event_category': category, 'event_label': label });
  }

  // Track button clicks
  document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
    btn.addEventListener('click', function() {
      trackEvent('Button', 'Click', this.textContent.trim());
    });
  });

  // Track form submissions
  if (contactForm) {
    contactForm.addEventListener('submit', function() {
      trackEvent('Form', 'Submit', 'Contact Form');
    });
  }

  // ========== Console Welcome Message ==========
  console.log('%c👋 Welcome to PT Bumi Mekanika Indonesia!', 'font-size: 20px; font-weight: bold; color: #002f6c;');
  console.log('%c🚜 Solusi Alat Berat Terpercaya', 'font-size: 14px; color: #ffcc00;');
  console.log('%c💼 Interested in joining our team? Contact us at: careers@bumimekanika.co.id', 'font-size: 12px; color: #6b7280;');

});

// ========== Global Functions ==========

// Function to format number with thousands separator
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Function to validate email
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to validate phone number (Indonesia)
function isValidPhone(phone) {
  return /^(\+62|62|0)[0-9]{9,12}$/.test(phone);
}

// Export for use in other scripts if needed
window.BMI = {
  formatNumber,
  isValidEmail,
  isValidPhone
};