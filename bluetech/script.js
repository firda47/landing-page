// Navbar color change on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Console log sederhana untuk menunjukkan JS di-load
    console.log("Testimonial section loaded successfully. Responsive layout is handled by CSS Grid and Media Queries.");

    // Anda bisa menambahkan logika untuk slider testimonial di sini
    // jika jumlah kartunya lebih dari 3.
});

const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".card");

const cardsPerSlide = 3;
const totalCards = cards.length;

let index = 0;

function slideNext() {
    index += cardsPerSlide;

    if (index >= totalCards) {
        index = 0; // reset ke awal
    }

    const cardWidth = cards[0].offsetWidth + 25; // width + gap
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

setInterval(slideNext, 3000);

// simple autoplay carousel for testimonials
(function () {
    const wrapper = document.querySelector('.carousel-wrapper');
    if (!wrapper) return;

    const track = wrapper.querySelector('.carousel-track');
    const cards = Array.from(track.children);
    const dotsWrap = wrapper.querySelector('.carousel-dots');

    let slidesToShow = calcSlidesToShow();
    let index = 0; // leftmost visible index
    let autoplayInterval = 4200;
    let timer = null;
    const gap = 30;

    // create dots based on possible positions
    function buildDots() {
        dotsWrap.innerHTML = '';
        const positions = Math.max(1, cards.length - slidesToShow + 1);
        for (let i = 0; i < positions; i++) {
            const btn = document.createElement('button');
            btn.addEventListener('click', () => {
                goTo(i);
                resetTimer();
            });
            dotsWrap.appendChild(btn);
        }
        updateDots();
    }

    function calcSlidesToShow() {
        const w = window.innerWidth;
        if (w <= 900) return 1;
        if (w <= 1200) return 2;
        return 3;
    }

    function resizeCards() {
        slidesToShow = calcSlidesToShow();
        const wrapperWidth = wrapper.clientWidth;
        const totalGap = gap * (slidesToShow - 1);
        const cardW = (wrapperWidth - totalGap) / slidesToShow;
        cards.forEach(c => c.style.minWidth = cardW + 'px');
    }

    function updateTrack() {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const shift = (cardWidth + gap) * index;
        track.style.transform = `translateX(-${shift}px)`;
        updateActiveClass();
        updateDots();
    }

    function updateActiveClass() {
        // center card index relative to current index
        const centerPos = index + Math.floor(slidesToShow / 2);
        cards.forEach((c, i) => c.classList.toggle('active', i === centerPos));
    }

    function updateDots() {
        const buttons = Array.from(dotsWrap.children);
        const pos = Math.min(index, Math.max(0, cards.length - slidesToShow));
        buttons.forEach((b, i) => b.classList.toggle('active', i === pos));
    }

    function goTo(i) {
        index = Math.max(0, Math.min(i, cards.length - slidesToShow));
        updateTrack();
    }

    function next() {
        if (index < cards.length - slidesToShow) index++;
        else index = 0;
        updateTrack();
    }

    function resetTimer() {
        clearInterval(timer);
        timer = setInterval(next, autoplayInterval);
    }

    // init
    resizeCards();
    buildDots();
    updateTrack();
    resetTimer();

    // responsive
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            resizeCards();
            // adjust index if overflow after resize
            if (index > cards.length - slidesToShow) index = Math.max(0, cards.length - slidesToShow);
            updateTrack();
        }, 120);
    });

    // pause on hover
    wrapper.addEventListener('mouseenter', () => clearInterval(timer));
    wrapper.addEventListener('mouseleave', () => resetTimer());
})();

document.addEventListener('DOMContentLoaded', function() {
        // 1. Ambil semua elemen yang diperlukan berdasarkan ID
        const navToggle = document.getElementById('navToggle');
        const mobileNav = document.getElementById('mobileNav');
        const closeBtn = document.getElementById('closeBtn');
        const navOverlay = document.getElementById('navOverlay');
        const menuLinks = document.querySelectorAll('.mobile-nav ul .menu-link'); // Hanya link yang perlu menutup menu

        // 2. Class name yang digunakan
        const activeClass = 'active'; // Ganti dari 'open' ke 'active'

        // 3. Fungsi untuk membuka menu
        function openMenu() {
            // Tambahkan class 'active' untuk slide-in menu dan fade-in overlay
            mobileNav.classList.add(activeClass);
            navOverlay.classList.add(activeClass);
            
            // Nonaktifkan scroll halaman utama
            document.body.style.overflow = 'hidden'; 
            
            // Set ARIA untuk aksesibilitas
            navToggle.setAttribute('aria-expanded', 'true');
        }

        // 4. Fungsi untuk menutup menu
        function closeMenu() {
            // Hapus class 'active' untuk slide-out menu dan fade-out overlay
            mobileNav.classList.remove(activeClass);
            navOverlay.classList.remove(activeClass);
            
            // Aktifkan kembali scroll
            document.body.style.overflow = ''; 
            
            // Set ARIA untuk aksesibilitas
            navToggle.setAttribute('aria-expanded', 'false');
        }

        // 5. Event Listeners
        
        // A. Hamburger diklik -> Buka Menu
        if (navToggle) {
            navToggle.addEventListener('click', openMenu);
        }

        // B. Tombol Close (X) diklik -> Tutup Menu
        if (closeBtn) {
            closeBtn.addEventListener('click', closeMenu);
        }

        // C. Overlay diklik -> Tutup Menu
        if (navOverlay) {
            navOverlay.addEventListener('click', closeMenu);
        }

        // D. Link menu diklik -> Tutup Menu (untuk navigasi)
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Beri sedikit delay agar animasi penutupan menu terlihat sebelum navigasi
                setTimeout(closeMenu, 150); 
            });
        });
        
        // Peringatan jika elemen penting hilang (opsional, untuk debugging)
        if (!navToggle || !mobileNav || !closeBtn || !navOverlay) {
            console.warn("Salah satu elemen navigasi mobile (navToggle, mobileNav, closeBtn, atau navOverlay) tidak ditemukan. Pastikan ID sudah benar.");
        }
    });

 
    document.addEventListener("DOMContentLoaded", () => {
    const text = "Tentang BlueTech Solutions";
    const typingElement = document.getElementById("typing-text");
    let index = 0;
    let isTyped = false;

    const typeText = () => {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 120); // speed typing
        } else {
            typingElement.classList.add("typing-cursor");
        }
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isTyped) {
                isTyped = true;
                typeText();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(typingElement);
});


 
    document.addEventListener('DOMContentLoaded', function() {
        const slideshowContainer = document.getElementById('slideshowContainer');
        if (!slideshowContainer) return; // Keluar jika container tidak ditemukan

        // Daftar URL Gambar (Ganti dengan URL aktual Anda)
        const images = [
            'https://rumahproduksiindonesia.com/wp-content/uploads/2024/01/cara-buat-company-profile.jpg', // Gedung Kota Modern
            'https://bappedalitbang.kuburayakab.go.id/pub/images/1693975825-rapat-koord-prog-hibah-air-minum-perkotaan.jpg', // Visual Teknologi / Abstract tech
            'https://cdn.mos.cms.futurecdn.net/njuqY8bVEAK48uSGWiXxPi.jpg', // Tim profesional IT
            'https://contents.lspr.ac.id/2023/06/hubungan-internasional.png'  // Infrastruktur digital
        ];
        
        let currentIndex = 0;
        const transitionDuration = 1500; // 1.5 detik (milidetik)
        const intervalDuration = 5000; // 5 detik (milidetik)

        // 1. Inisialisasi slide
        const slides = slideshowContainer.querySelectorAll('.hero-slide');
        
        // Atur sumber gambar awal
        slides[0].src = images[currentIndex];
        slides[1].src = images[(currentIndex + 1) % images.length];

        // 2. Fungsi untuk memulai transisi gambar
        function startTransition() {
            // Tentukan slide yang saat ini aktif dan slide berikutnya
            let currentSlide = slides[0].classList.contains('active-slide') ? slides[0] : slides[1];
            let nextSlide = (currentSlide === slides[0]) ? slides[1] : slides[0];

            // Tentukan indeks gambar berikutnya
            currentIndex = (currentIndex + 1) % images.length;
            const nextImageIndex = (currentIndex + 1) % images.length;
            
            // 3. Persiapan transisi (Reset nextSlide dan set gambar baru)
            
            // Set gambar yang akan datang pada slide yang tidak aktif
            nextSlide.src = images[currentIndex];
            
            // Hapus kelas aktif/next dari semua slide
            slides.forEach(slide => {
                slide.classList.remove('active-slide', 'next-slide', 'fading-out');
            });

            // Persiapan kelas transisi: 
            // - currentSlide (gambar lama) akan fading-out
            // - nextSlide (gambar baru) akan menjadi active-slide
            currentSlide.classList.add('fading-out'); // Memberi waktu 1.5s untuk fade
            nextSlide.classList.add('active-slide'); 
            
            // Reset transform scale pada slide yang akan fade out
            currentSlide.style.transform = 'scale(1.0)';
            
            // Tunda set src dan reset transform pada slide yang baru menjadi 'currentSlide'
            // agar transisi crossfade dapat berjalan
            setTimeout(() => {
                currentSlide.classList.remove('fading-out');
                
                // Setelah transisi selesai, reset slide lama menjadi slide yang sedang menunggu
                // dan set gambar berikutnya agar bisa langsung dipersiapkan
                currentSlide.classList.add('next-slide'); 
                currentSlide.src = images[nextImageIndex]; 
                
                // Langsung set scale ke 1.1 pada slide baru untuk memulai zoom-out
                nextSlide.style.transform = 'scale(1.1)'; 

            }, transitionDuration); 

        }

        // 4. Mulai slideshow
        // Atur scale awal
        slides[0].style.transform = 'scale(1.1)';
        
        // Jalankan transisi pertama kali
        setTimeout(startTransition, intervalDuration - transitionDuration);
        
        // Loop otomatis
        setInterval(startTransition, intervalDuration);

    });


// FAQ accordion in Contact section
(function () {
    const questions = document.querySelectorAll('.faq-question');
    if (!questions.length) return;

    function closeAll() {
        questions.forEach(q => {
            q.setAttribute('aria-expanded', 'false');
            const ans = q.nextElementSibling;
            if (ans) ans.setAttribute('hidden', '');
        });
    }

    questions.forEach(q => {
        q.addEventListener('click', () => {
            const isOpen = q.getAttribute('aria-expanded') === 'true';
            closeAll();
            if (!isOpen) {
                q.setAttribute('aria-expanded', 'true');
                const ans = q.nextElementSibling;
                if (ans) ans.removeAttribute('hidden');
                // ensure the opened answer is visible inside the right-column scroll
                setTimeout(() => {
                    ans.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 80);
            }
        });
    });

    // allow opening first item optionally
    // keep all closed by default
})();

// Smooth scrolling for navigation links and active section highlight
(function () {
    const navLinks = document.querySelectorAll('header nav a, .mobile-nav a');
    let _activeScrollRaf = null;

    function cancelActiveScroll(){
        if (_activeScrollRaf) {
            cancelAnimationFrame(_activeScrollRaf);
            _activeScrollRaf = null;
        }
    }

    function smoothScrollTo(targetY, duration) {
        cancelActiveScroll();
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        if (distance === 0) return;
        const startTime = performance.now();
        // easing (cubic)
        function ease(t){ return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2,3)/2; }

        function step(now){
            const elapsed = now - startTime;
            const t = Math.min(1, elapsed / duration);
            const v = ease(t);
            window.scrollTo(0, startY + distance * v);
            if (t < 1) _activeScrollRaf = requestAnimationFrame(step);
            else _activeScrollRaf = null;
        }
        _activeScrollRaf = requestAnimationFrame(step);
    }

    navLinks.forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            const id = href.slice(1);
            const target = document.getElementById(id);
            if (target) {
                e.preventDefault();
                // compute offset for sticky navbar
                const navbar = document.querySelector('.navbar');
                const navHeight = navbar ? navbar.getBoundingClientRect().height : 0;
                const targetY = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
                // duration based on distance for comfortable feel
                const distance = Math.abs(targetY - window.pageYOffset);
                const duration = Math.min(1100, Math.max(520, distance / 1.1));
                smoothScrollTo(targetY, duration);
                // push state so URL reflects section (without default jump)
                if (history.replaceState) history.replaceState(null, '', `#${id}`);
                // mark clicked link active immediately for instant feedback
                navLinks.forEach(n => n.classList.remove('active'));
                a.classList.add('active');

                // close mobile nav if open
                const mobileNav = document.querySelector('.mobile-nav');
                const overlay = document.querySelector('.nav-overlay');
                const navToggle = document.querySelector('.nav-toggle');
                if (mobileNav && mobileNav.classList.contains('open')) {
                    mobileNav.classList.remove('open');
                    overlay.classList.remove('open');
                    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // highlight section in nav based on scroll using IntersectionObserver
    const sections = Array.from(document.querySelectorAll('section[id]'));
    if (!sections.length) return;

    const sectionObserver = new IntersectionObserver((entries) => {
        // pick entry with largest intersectionRatio that's intersecting
        const visible = entries.filter(e => e.isIntersecting);
        if (!visible.length) return;
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0].target;
        const id = top.getAttribute('id');
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    }, { threshold: [0.35, 0.55], rootMargin: '0px 0px -10% 0px' });

    sections.forEach(s => sectionObserver.observe(s));
})();

// Reveal-on-scroll animations (fade / slide)
(function () {
    const revealSelectors = ['.feature-box', '.feature-box-why', '.feature-card', '.testimonial-card', '.about-box', '.hero-content', '.contact-info', '.footer-col'];
    const elems = Array.from(document.querySelectorAll(revealSelectors.join(','))).filter(Boolean);
    if (!elems.length) return;

    elems.forEach((el, i) => {
        el.classList.add('reveal');
        if (el.matches('.feature-box, .feature-box-why')) el.classList.add('slide-up');
        else if (el.matches('.testimonial-card')) el.classList.add(i % 2 === 0 ? 'slide-left' : 'slide-right');
        else el.classList.add('fade');
    });

    const revealObserver = new IntersectionObserver((entries, obs) => {
        // stagger if multiple entries appear at once
        const visible = entries.filter(e => e.isIntersecting).sort((a,b)=> b.intersectionRatio - a.intersectionRatio);
        visible.forEach((entry, idx) => {
            const delay = idx * 90; // ms
            entry.target.style.setProperty('--reveal-delay', `${delay}ms`);
            setTimeout(()=>{
                entry.target.classList.add('in-view');
                obs.unobserve(entry.target);
            }, delay);
        });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

    elems.forEach(e => revealObserver.observe(e));

    // If some elements are already in the viewport on load, reveal them immediately
    setTimeout(() => {
        elems.forEach((el, idx) => {
            const r = el.getBoundingClientRect();
            if (r.top < window.innerHeight * 0.9 && r.bottom > 0) {
                // apply a small stagger based on index to keep consistent feel
                const delay = idx * 160;
                el.style.setProperty('--reveal-delay', `${delay}ms`);
                setTimeout(() => el.classList.add('in-view'), delay);
                // unobserve if it was observed
                try { revealObserver.unobserve(el); } catch (e) {}
            }
        });
    }, 40);
})();

document.addEventListener('DOMContentLoaded', () => {

    // ====================================
    // COUNTER ANGKA BERJALAN (Vanilla JS)
    // ====================================

    // Fungsi utama untuk animasi counter
    function animateCounter(element, target) {
        let current = 0;
        const duration = 2000; // Durasi animasi 2 detik
        const startTimestamp = performance.now();

        function step(timestamp) {
            const progress = timestamp - startTimestamp;
            // Hitung persentase kemajuan (dibatasi hingga 1)
            const percentage = Math.min(progress / duration, 1);
            // Hitung nilai saat ini berdasarkan persentase
            current = Math.floor(percentage * target);

            // Tambahkan tanda '+' jika sudah mencapai target
            let displayValue = current;
            if (percentage === 1 && target > 0) {
                 // Hanya tambahkan '+' jika target > 0
                displayValue = `${target}+`;
            } else {
                 displayValue = current;
            }
            
            element.textContent = displayValue;

            // Lanjutkan animasi jika belum selesai
            if (percentage < 1) {
                requestAnimationFrame(step);
            }
        }

        // Mulai perulangan animasi
        requestAnimationFrame(step);
    }
    
    // Intersection Observer untuk mendeteksi bagian statistik
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Jika bagian statistik terlihat
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                
                counters.forEach(counter => {
                    // Cek apakah counter belum pernah dimulai
                    if (!counter.hasAttribute('data-animated')) {
                        const target = +counter.getAttribute('data-target');
                        animateCounter(counter, target);
                        // Tandai sudah dianimasikan
                        counter.setAttribute('data-animated', 'true');
                    }
                });
                // Hentikan pengamatan setelah animasi dimulai
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Mulai hitung saat 50% section terlihat
    });

    // Temukan section statistik dan mulai pengamatan
    const statsSection = document.getElementById('statistik');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }
    
    // ====================================
    // BONUS: Scroll Reveal untuk item Stat
    // ====================================
    const revealElements = document.querySelectorAll('.reveal');

    const generalObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Tidak perlu unobserve jika elemen lain perlu animasi berulang, 
                // tapi untuk efek sekali jalan, unobserve itu efisien:
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });

    revealElements.forEach(el => {
        generalObserver.observe(el);
    });

});

function scrollToSolutions() {
  document.getElementById("solutions").scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});


// Scroll progress bar, parallax, back-to-top, and testimonial tilt
(function(){
    const progressBar = document.querySelector('.scroll-progress__bar');
    const backBtn = document.querySelector('.back-to-top');
    const heroContent = document.querySelector('.hero .hero-content');
    const mapBox = document.querySelector('.site-footer .map-box');
    const testimonialCards = Array.from(document.querySelectorAll('.testimonial-card'));

    let ticking = false;

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateProgress();
                updateParallax();
                toggleBackToTop();
                ticking = false;
            });
            ticking = true;
        }
    }

    function updateProgress(){
        if (!progressBar) return;
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docH ? (window.scrollY / docH) * 100 : 0;
        progressBar.style.width = Math.min(100, Math.max(0, pct)) + '%';
    }

    function updateParallax(){
        const sy = window.scrollY;
        if (heroContent) {
            const translate = Math.min(60, sy * 0.16);
            heroContent.style.transform = `translateY(${translate}px)`;
        }
        if (mapBox) {
            const rect = mapBox.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (inView) {
                const offset = (window.innerHeight - rect.top) * 0.06; // subtle
                mapBox.style.transform = `translateY(${offset}px)`;
            }
        }
    }

    function toggleBackToTop(){
        if (!backBtn) return;
        if (window.scrollY > 520) backBtn.classList.add('show'); else backBtn.classList.remove('show');
    }

    // Back to top click
    if (backBtn) backBtn.addEventListener('click', ()=> window.scrollTo({ top:0, behavior:'smooth' }));

    // Testimonial tilt on mousemove
    testimonialCards.forEach(card => {
        card.addEventListener('mousemove', (ev) => {
            const rect = card.getBoundingClientRect();
            const cx = rect.left + rect.width/2;
            const cy = rect.top + rect.height/2;
            const dx = ev.clientX - cx;
            const dy = ev.clientY - cy;
            const rx = (-dy / rect.height) * 6; // rotateX
            const ry = (dx / rect.width) * 6; // rotateY
            card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
        });
        card.addEventListener('mouseleave', ()=> { card.style.transform = ''; });
    });

    window.addEventListener('scroll', onScroll, { passive: true });
    // do initial
    updateProgress(); updateParallax(); toggleBackToTop();
})();

const vmCards = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  vmCards.forEach(card => {
    const windowHeight = window.innerHeight;
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < windowHeight - 100) {
      card.classList.add("active");
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
        // Observer untuk animasi Scroll Reveal
        const revealElements = document.querySelectorAll('.reveal');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Mulai animasi ketika 10% elemen terlihat
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Hentikan observasi setelah muncul
                }
            });
        }, observerOptions);

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    });
