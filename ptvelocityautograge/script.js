/* ========================================
   VELOCITY AUTO GARAGE - MAIN JAVASCRIPT
   Professional Interactive Features
   ======================================== */

// ========== NAVIGATION SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========== MOBILE MENU TOGGLE ==========
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ========== ACTIVE NAV LINK ==========
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinksAll = document.querySelectorAll('.nav-link');

navLinksAll.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ========== ANIMATED COUNTER ==========
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for Counter Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                if (stat.textContent === '0') {
                    animateCounter(stat, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ========== SCROLL REVEAL ANIMATION ==========
const revealElements = document.querySelectorAll('.service-card, .testimonial-card, .why-item, .stat-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => {
    el.classList.add('fade-in');
    revealObserver.observe(el);
});

// ========== SCROLL TO TOP BUTTON ==========
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== FAQ ACCORDION (for services.html) ==========
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// ========== FORM VALIDATION (for booking.html & contact.html) ==========
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');

// Booking Form Validation
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const plate = document.getElementById('plate').value.trim();
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        
        // Validation
        if (!name || !phone || !plate || !service || !date) {
            showNotification('Mohon lengkapi semua field!', 'error');
            return;
        }
        
        // Phone number validation (Indonesian format)
        const phoneRegex = /^(\+62|62|0)[0-9]{9,12}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            showNotification('Format nomor telepon tidak valid!', 'error');
            return;
        }
        
        // Plate number validation (Indonesian format)
        const plateRegex = /^[A-Z]{1,2}\s?\d{1,4}\s?[A-Z]{1,3}$/i;
        if (!plateRegex.test(plate)) {
            showNotification('Format nomor polisi tidak valid! (Contoh: B 1234 ABC)', 'error');
            return;
        }
        
        // Date validation (must be future date)
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showNotification('Tanggal booking harus hari ini atau sesudahnya!', 'error');
            return;
        }
        
        // Success
        showNotification('Booking berhasil! Kami akan segera menghubungi Anda untuk konfirmasi.', 'success');
        bookingForm.reset();
        
        // Simulate WhatsApp redirect
        setTimeout(() => {
            const message = `Halo, saya ingin booking servis:\nNama: ${name}\nNo HP: ${phone}\nNo Polisi: ${plate}\nLayanan: ${service}\nTanggal: ${date}`;
            const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }, 2000);
    });
}

// Contact Form Validation
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            showNotification('Mohon lengkapi semua field!', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Format email tidak valid!', 'error');
            return;
        }
        
        // Success
        showNotification('Pesan Anda berhasil terkirim! Kami akan merespons dalam 1x24 jam.', 'success');
        contactForm.reset();
    });
}

// Notification System
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto hide after 5 seconds
    const autoHide = setTimeout(() => {
        hideNotification(notification);
    }, 5000);
    
    // Manual close
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        clearTimeout(autoHide);
        hideNotification(notification);
    });
}

function hideNotification(notification) {
    notification.classList.remove('show');
    setTimeout(() => {
        notification.remove();
    }, 300);
}

// ========== GALLERY MODAL (for gallery.html) ==========
const galleryItems = document.querySelectorAll('.gallery-item img');
let currentImageIndex = 0;
let galleryImages = [];

galleryItems.forEach((img, index) => {
    galleryImages.push(img.src);
    
    img.addEventListener('click', () => {
        currentImageIndex = index;
        openModal(img.src, img.alt);
    });
});

function openModal(src, alt) {
    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <button class="modal-prev"><i class="fas fa-chevron-left"></i></button>
            <img src="${src}" alt="${alt}">
            <button class="modal-next"><i class="fas fa-chevron-right"></i></button>
            <div class="modal-caption">${alt}</div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Close modal
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    [closeBtn, overlay].forEach(el => {
        el.addEventListener('click', () => closeModal(modal));
    });
    
    // Navigation
    const prevBtn = modal.querySelector('.modal-prev');
    const nextBtn = modal.querySelector('.modal-next');
    const modalImg = modal.querySelector('img');
    const caption = modal.querySelector('.modal-caption');
    
    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        modalImg.src = galleryImages[currentImageIndex];
        caption.textContent = galleryItems[currentImageIndex].alt;
    });
    
    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        modalImg.src = galleryImages[currentImageIndex];
        caption.textContent = galleryItems[currentImageIndex].alt;
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
    
    function handleKeyboard(e) {
        if (e.key === 'Escape') closeModal(modal);
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    }
    
    modal.addEventListener('remove', () => {
        document.removeEventListener('keydown', handleKeyboard);
    });
}

function closeModal(modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// ========== PRICE CALCULATOR (for pricing.html) ==========
const priceCards = document.querySelectorAll('.price-card');

priceCards.forEach(card => {
    const selectBtn = card.querySelector('.select-package');
    
    if (selectBtn) {
        selectBtn.addEventListener('click', () => {
            const packageName = card.querySelector('.package-name').textContent;
            const packagePrice = card.querySelector('.package-price').textContent;
            
            const message = `Halo, saya tertarik dengan paket ${packageName} (${packagePrice}). Mohon info lebih lanjut.`;
            const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});

// ========== SMOOTH SCROLL FOR ANCHOR LINKS ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ========== LAZY LOADING IMAGES ==========
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

// ========== DATE PICKER MIN DATE (for booking.html) ==========
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// ========== PAGE LOAD ANIMATION ==========
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========== CONSOLE MESSAGE ==========
console.log('%c🚗 Velocity Auto Garage', 'font-size: 20px; font-weight: bold; color: #2C74B3;');
console.log('%c✨ Professional Automotive Services', 'font-size: 14px; color: #64748B;');
console.log('%cWebsite by: Professional Web Development Team', 'font-size: 12px; color: #94A3B8;');
