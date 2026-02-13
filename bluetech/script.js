document.addEventListener('DOMContentLoaded', () => {

    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]'); // Hanya link internal
    const sections = document.querySelectorAll('main section');
    const navIndicator = document.querySelector('.nav-links .nav-indicator');
    
    // ====================================
    // 1. STICKY NAVBAR, ACTIVE LINK & ANIMATED UNDERLINE
    // ====================================

    function updateNavIndicator(activeLink) {
        if (!activeLink) {
            navIndicator.style.opacity = '0';
            return;
        }

        const linkRect = activeLink.getBoundingClientRect();
        const navRect = activeLink.closest('.nav-links').getBoundingClientRect();
        
        // Hitung posisi dan lebar relatif terhadap parent .nav-links
        const left = linkRect.left - navRect.left;
        const width = linkRect.width;

        navIndicator.style.width = `${width}px`;
        navIndicator.style.transform = `translateX(${left}px)`;
        navIndicator.style.opacity = '1';
    }

    function handleScroll() {
        const scrollY = window.scrollY;

        // Sticky Navbar: Tambah class 'scrolled' saat scroll ke bawah
        if (scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Link & Animated Underline
        let currentActiveLink = null;
        
        sections.forEach(current => {
            // Gunakan `header.offsetHeight` untuk offset yang akurat
            const sectionTop = current.offsetTop - header.offsetHeight - 50; 
            const sectionBottom = sectionTop + current.offsetHeight;
            const id = current.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                // Temukan link yang sesuai dengan section ID
                currentActiveLink = document.querySelector(`.nav-links a[href="#${id}"]`); 
            }
        });
        
        // Perbarui class active dan indicator hanya jika ada link yang aktif
        navLinks.forEach(link => link.classList.remove('active'));
        if (currentActiveLink) {
             currentActiveLink.classList.add('active');
        }

        updateNavIndicator(currentActiveLink);
    }

    // Panggil saat dimuat & scroll
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Update indicator saat resize
    handleScroll(); 
    
    // Panggil update indicator saat link diklik (agar langsung bergerak)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            updateNavIndicator(this);
        });
    });


    // ====================================
    // 2. SMOOTH SCROLLING (sudah bagus, hanya tambahkan offset header)
    // ====================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        // Tambahkan offset header agar konten tidak tertutup header sticky
                        top: targetSection.offsetTop - header.offsetHeight, 
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // ====================================
    // 3. SCROLL REVEAL ANIMATION (Intersection Observer)
    // ====================================
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        // Terapkan delay CSS untuk efek stagger/reveal bertahap pada Hero
        if (el.closest('.hero-content')) {
            const index = Array.from(el.parentElement.children).indexOf(el);
            el.style.transitionDelay = `${index * 0.15}s`;
        }
        observer.observe(el);
    });

    // ====================================
    // 4. PARALLAX RINGAN PADA HERO (Vanilla JS)
    // ====================================
    const heroSection = document.getElementById('home');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            // Pergeseran 20% dari scroll position
            heroSection.style.backgroundPositionY = `${-scrollPosition * 0.2}px`; 
        });
    }

    // ====================================
    // 5. COUNTER ANGKA BERJALAN (Tetap sama, sudah baik)
    // ====================================
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                
                counters.forEach(counter => {
                    if (!counter.hasAttribute('data-animated')) {
                        const target = +counter.getAttribute('data-target');
                        animateCounter(counter, target);
                        counter.setAttribute('data-animated', 'true');
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 
    });

    const statsSection = document.getElementById('statistik');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }
    
    function animateCounter(element, target) {
        let current = 0;
        const duration = 2000; 
        const startTimestamp = performance.now();

        function step(timestamp) {
            const progress = timestamp - startTimestamp;
            const percentage = Math.min(progress / duration, 1);
            current = Math.floor(percentage * target);
            
            // Tambahkan tanda '+' untuk angka besar, kecuali 7 (tahun pengalaman)
            const suffix = (target > 10 && current >= target) ? '+' : ''; 
            element.textContent = current + suffix;

            if (percentage < 1) {
                requestAnimationFrame(step);
            }
        }
        requestAnimationFrame(step);
    }
});