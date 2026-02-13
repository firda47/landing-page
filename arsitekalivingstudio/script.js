/* ========================================
   ARSITEKA LIVING STUDIO - MAIN JAVASCRIPT
   Interactive Features & Animations
   ======================================== */

// === INITIALIZATION ===
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavbar();
    initScrollAnimations();
    initStatisticsCounter();
    initPortfolioFilter();
    initImageModal();
    initFAQAccordion();
    initContactForm();
    initNewsletterForm();
    setActiveNavLink();
});

// === NAVBAR FUNCTIONALITY ===
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });
    
    // Observe all cards with animations
    const animatedElements = document.querySelectorAll('.project-card, .service-card, .value-card, .team-member, .testimonial-card, .blog-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// === STATISTICS COUNTER ANIMATION ===
function initStatisticsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// === PORTFOLIO FILTER ===
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter items
            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    const itemCategory = item.getAttribute('data-category');
                    if (itemCategory === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// === IMAGE MODAL ===
function initImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (!modal) return;
    
    // Open modal when clicking on portfolio item
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('.portfolio-image img');
            const title = this.querySelector('.portfolio-info h3').textContent;
            const description = this.querySelector('.portfolio-info p').textContent;
            
            modal.style.display = 'block';
            modalImg.src = img.src;
            modalCaption.textContent = title + ' - ' + description;
        });
    });
    
    // Close modal
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// === FAQ ACCORDION ===
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// === CONTACT FORM VALIDATION ===
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Clear previous errors
        clearErrors();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // Validate name
        if (name === '') {
            showError('name', 'Nama lengkap harus diisi');
            isValid = false;
        } else if (name.length < 3) {
            showError('name', 'Nama minimal 3 karakter');
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            showError('email', 'Email harus diisi');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('email', 'Format email tidak valid');
            isValid = false;
        }
        
        // Validate phone
        if (phone === '') {
            showError('phone', 'No. telepon harus diisi');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            showError('phone', 'Format nomor telepon tidak valid');
            isValid = false;
        }
        
        // Validate service
        if (service === '') {
            showError('service', 'Pilih layanan yang diminati');
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            showError('message', 'Pesan harus diisi');
            isValid = false;
        } else if (message.length < 10) {
            showError('message', 'Pesan minimal 10 karakter');
            isValid = false;
        }
        
        // If valid, show success message
        if (isValid) {
            // Hide form, show success message
            contactForm.style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
            
            // In real application, you would send data to server here
            console.log('Form submitted:', { name, email, phone, service, message });
            
            // Reset form after 3 seconds and show it again
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'block';
                document.getElementById('formSuccess').style.display = 'none';
            }, 5000);
        }
    });
}

// === NEWSLETTER FORM ===
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (email === '') {
            alert('Masukkan alamat email Anda');
            return;
        }
        
        if (!isValidEmail(email)) {
            alert('Format email tidak valid');
            return;
        }
        
        // Show success message
        alert('Terima kasih! Anda telah berlangganan newsletter kami.');
        this.reset();
        
        // In real application, send to server
        console.log('Newsletter subscription:', email);
    });
}

// === HELPER FUNCTIONS ===

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone format
function isValidPhone(phone) {
    // Remove all non-numeric characters
    const cleanPhone = phone.replace(/\D/g, '');
    // Check if it's between 10-15 digits
    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
}

// Show error message
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorSpan = field.parentElement.querySelector('.error-message');
    
    field.style.borderColor = '#e74c3c';
    errorSpan.textContent = message;
}

// Clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.textContent = '';
    });
    
    const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    inputs.forEach(input => {
        input.style.borderColor = '#e5e5e0';
    });
}

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// === SMOOTH SCROLL FOR ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// === LAZY LOADING IMAGES ===
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// === PERFORMANCE OPTIMIZATION ===

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
window.addEventListener('scroll', debounce(function() {
    // Any scroll-based functionality can be added here
}, 100));

// === CONSOLE WELCOME MESSAGE ===
console.log('%c🏠 Arsiteka Living Studio', 'font-size: 20px; font-weight: bold; color: #8a9a7b;');
console.log('%cWelcome to our website!', 'font-size: 14px; color: #5a5a52;');
console.log('%cFor inquiries: info@arsiteka.studio', 'font-size: 12px; color: #b8b8b0;');
