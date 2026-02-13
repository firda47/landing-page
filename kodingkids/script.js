// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000);
});

// Navbar Sticky and Mobile Menu
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in-scroll class
const fadeElements = document.querySelectorAll('.fade-in-scroll');
fadeElements.forEach(el => observer.observe(el));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Set active menu based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const menuLinks = document.querySelectorAll('.nav-menu a');
menuLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Form Validation (for contact page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        if (name && email && phone && message) {
            alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
            contactForm.reset();
        } else {
            alert('Mohon lengkapi semua field yang tersedia.');
        }
    });
}

// Program Detail Query Parameter Handler
const urlParams = new URLSearchParams(window.location.search);
const programId = urlParams.get('id');

if (programId && document.getElementById('programDetail')) {
    const programs = {
        '1': {
            title: 'Coding Dasar untuk Anak',
            icon: '💻',
            description: 'Program ini dirancang khusus untuk anak-anak usia 8-12 tahun yang ingin memulai perjalanan coding mereka. Dengan pendekatan visual dan game-based learning, anak akan belajar logika pemrograman dengan cara yang menyenangkan.',
            duration: '3 Bulan',
            age: '8-12 tahun',
            method: 'Project-based learning dengan visual coding',
            schedule: '2x seminggu @ 90 menit',
            outcomes: [
                'Memahami konsep dasar pemrograman (variabel, loop, kondisi)',
                'Mampu berpikir logis dan sistematis',
                'Membuat mini project sederhana',
                'Menyelesaikan masalah dengan pendekatan komputasional'
            ],
            syllabus: [
                'Pengenalan Coding dan Algoritma',
                'Visual Programming dengan Scratch',
                'Konsep Variabel dan Tipe Data',
                'Struktur Kontrol (If-Else, Loop)',
                'Event dan Interaksi',
                'Project Akhir: Game Sederhana'
            ]
        },
        '2': {
            title: 'Game Development untuk Pemula',
            icon: '🎮',
            description: 'Anak-anak akan belajar membuat game mereka sendiri! Program ini menggunakan platform visual coding yang memudahkan anak untuk memahami logika game development tanpa harus menulis kode yang rumit.',
            duration: '4 Bulan',
            age: '10-15 tahun',
            method: 'Project-based learning dengan game engine ramah anak',
            schedule: '2x seminggu @ 90 menit',
            outcomes: [
                'Membuat game interaktif sederhana',
                'Memahami konsep game mechanics',
                'Mendesain level dan karakter',
                'Berpikir kreatif dalam problem solving'
            ],
            syllabus: [
                'Pengenalan Game Development',
                'Sprite dan Animasi',
                'Game Physics Dasar',
                'Scoring dan Level System',
                'Sound Effects dan Music',
                'Project Akhir: Game Platformer'
            ]
        },
        '3': {
            title: 'Website untuk Anak',
            icon: '🌐',
            description: 'Anak-anak akan belajar membuat website pertama mereka dengan HTML dan CSS. Program ini mengajarkan dasar-dasar web development dengan cara yang visual dan mudah dipahami.',
            duration: '3 Bulan',
            age: '11-15 tahun',
            method: 'Hands-on coding dengan project nyata',
            schedule: '2x seminggu @ 90 menit',
            outcomes: [
                'Membuat website sederhana dari nol',
                'Memahami struktur HTML dan styling CSS',
                'Mendesain layout yang menarik',
                'Membuat website yang responsive'
            ],
            syllabus: [
                'Pengenalan HTML dan CSS',
                'Struktur Website dan Tag HTML',
                'Styling dengan CSS',
                'Layout dan Positioning',
                'Responsive Design',
                'Project Akhir: Personal Website'
            ]
        },
        '4': {
            title: 'Robotika Dasar',
            icon: '🤖',
            description: 'Menggabungkan coding dengan hardware! Anak-anak akan belajar memprogram robot sederhana dan memahami bagaimana software mengontrol hardware.',
            duration: '4 Bulan',
            age: '9-14 tahun',
            method: 'Hands-on dengan robot kit dan visual programming',
            schedule: '2x seminggu @ 90 menit',
            outcomes: [
                'Memahami dasar-dasar robotika',
                'Memprogram robot untuk melakukan tugas tertentu',
                'Menggunakan sensor dan actuator',
                'Menyelesaikan challenge robotika'
            ],
            syllabus: [
                'Pengenalan Robotika dan Komponen',
                'Programming Robot dengan Block Coding',
                'Sensor dan Input',
                'Motor dan Movement',
                'Decision Making dan Automation',
                'Project Akhir: Robot Challenge'
            ]
        }
    };
    
    const program = programs[programId];
    if (program) {
        document.getElementById('programTitle').textContent = program.title;
        document.getElementById('programIcon').textContent = program.icon;
        document.getElementById('programDescription').textContent = program.description;
        document.getElementById('programDuration').textContent = program.duration;
        document.getElementById('programAge').textContent = program.age;
        document.getElementById('programMethod').textContent = program.method;
        document.getElementById('programSchedule').textContent = program.schedule;
        
        const outcomesList = document.getElementById('programOutcomes');
        outcomesList.innerHTML = '';
        program.outcomes.forEach(outcome => {
            const li = document.createElement('li');
            li.textContent = outcome;
            outcomesList.appendChild(li);
        });
        
        const syllabusList = document.getElementById('programSyllabus');
        syllabusList.innerHTML = '';
        program.syllabus.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            syllabusList.appendChild(li);
        });
    }
}

// Article Detail Query Parameter Handler
const articleId = urlParams.get('id');

if (articleId && document.getElementById('articleDetail')) {
    const articles = {
        '1': {
            title: 'Kenapa Anak Perlu Belajar Coding Sejak Dini?',
            date: '5 Februari 2026',
            author: 'Tim KodingKids',
            content: `
                <p>Coding atau pemrograman komputer bukan lagi sekadar keterampilan teknis yang hanya dibutuhkan oleh profesional IT. Di era digital ini, coding telah menjadi literasi baru yang penting untuk dikuasai sejak dini, sama seperti membaca dan menulis.</p>
                
                <h3>Mengembangkan Kemampuan Berpikir Logis</h3>
                <p>Ketika anak belajar coding, mereka tidak hanya belajar tentang komputer. Mereka belajar cara berpikir secara sistematis dan logis. Setiap baris kode mengajarkan anak untuk memecah masalah besar menjadi langkah-langkah kecil yang terstruktur. Kemampuan ini sangat berguna tidak hanya dalam dunia teknologi, tetapi juga dalam kehidupan sehari-hari.</p>
                
                <h3>Meningkatkan Kreativitas dan Inovasi</h3>
                <p>Coding memberikan kebebasan kepada anak untuk menciptakan sesuatu dari nol. Mereka bisa membuat game, website, aplikasi, atau animasi sesuai dengan imajinasi mereka. Proses kreatif ini membantu anak mengekspresikan ide-ide mereka dengan cara yang unik dan inovatif.</p>
                
                <h3>Melatih Kemampuan Problem Solving</h3>
                <p>Dalam coding, bug atau error adalah hal yang lumrah. Anak-anak belajar untuk tidak takut dengan kesalahan, tetapi melihatnya sebagai peluang untuk belajar. Mereka akan terbiasa menganalisis masalah, mencari solusi, dan mencoba berbagai pendekatan hingga menemukan yang berhasil. Kemampuan problem solving ini adalah soft skill yang sangat berharga di masa depan.</p>
                
                <h3>Mempersiapkan Masa Depan</h3>
                <p>Teknologi terus berkembang pesat dan hampir semua industri kini membutuhkan orang yang paham teknologi. Dengan belajar coding sejak dini, anak-anak tidak hanya menjadi konsumen teknologi, tetapi juga pencipta teknologi. Mereka akan lebih siap menghadapi berbagai peluang karir di masa depan.</p>
                
                <h3>Meningkatkan Kepercayaan Diri</h3>
                <p>Ketika anak berhasil membuat project coding mereka sendiri, betapapun sederhananya, hal itu memberikan rasa pencapaian yang luar biasa. Mereka merasa bangga dan percaya diri bahwa mereka mampu menciptakan sesuatu yang berguna. Kepercayaan diri ini akan terbawa ke aspek-aspek lain dalam hidup mereka.</p>
                
                <h3>Kesimpulan</h3>
                <p>Belajar coding sejak dini bukan berarti memaksa anak menjadi programmer. Ini tentang memberikan mereka keterampilan fundamental yang akan membantu mereka sukses di era digital, apapun jalan yang mereka pilih di masa depan. Yang terpenting, dengan metode pembelajaran yang tepat, coding bisa menjadi aktivitas yang sangat menyenangkan dan memuaskan bagi anak-anak.</p>
            `
        },
        '2': {
            title: 'Manfaat Coding untuk Kreativitas Anak',
            date: '3 Februari 2026',
            author: 'Tim KodingKids',
            content: `
                <p>Banyak orang tua bertanya: "Apakah coding tidak terlalu teknis untuk anak? Bukankah ini akan membatasi kreativitas mereka?" Jawabannya adalah sebaliknya. Coding justru bisa menjadi medium yang sangat powerful untuk mengembangkan kreativitas anak.</p>
                
                <h3>Coding sebagai Kanvas Digital</h3>
                <p>Bayangkan coding sebagai kanvas digital yang tak terbatas. Jika melukis menggunakan cat dan kuas, coding menggunakan logika dan kode untuk menciptakan sesuatu. Anak-anak bisa membuat game, animasi, cerita interaktif, musik digital, dan masih banyak lagi. Tidak ada batasan selain imajinasi mereka sendiri.</p>
                
                <h3>Menggabungkan Seni dan Logika</h3>
                <p>Coding mengajarkan anak untuk menggabungkan dua hal yang sering dianggap bertolak belakang: seni dan logika. Mereka belajar bahwa untuk membuat sesuatu yang indah dan menarik, mereka perlu struktur dan logika yang kuat. Sebaliknya, logika tanpa kreativitas akan menghasilkan sesuatu yang kaku dan membosankan.</p>
                
                <h3>Kebebasan Bereksperimen</h3>
                <p>Salah satu hal terbaik dari coding adalah kemudahan untuk bereksperimen. Anak bisa mencoba berbagai ide, melihat hasilnya langsung, dan mengubahnya jika tidak sesuai harapan. Tidak ada kertas yang terbuang, tidak ada cat yang habis. Mereka bebas mencoba dan gagal tanpa konsekuensi yang berarti.</p>
                
                <h3>Storytelling dengan Interaktif</h3>
                <p>Coding memungkinkan anak untuk bercerita dengan cara yang lebih interaktif. Mereka tidak hanya menulis cerita, tetapi juga membuat pembaca menjadi bagian dari cerita tersebut. Mereka bisa membuat game petualangan di mana pemain membuat keputusan yang mempengaruhi alur cerita, atau membuat animasi yang merespon input dari pengguna.</p>
                
                <h3>Mengembangkan Style Unik</h3>
                <p>Setiap anak akan mengembangkan style coding mereka sendiri. Ada yang suka membuat game action, ada yang lebih suka puzzle game. Ada yang suka warna-warna cerah, ada yang lebih suka minimalis. Proses ini membantu anak memahami preferensi dan kekuatan mereka sendiri.</p>
                
                <h3>Kolaborasi dan Sharing</h3>
                <p>Platform coding untuk anak seperti Scratch memiliki komunitas global di mana anak-anak bisa berbagi project mereka, melihat karya orang lain, dan mendapat inspirasi. Mereka juga bisa berkolaborasi dengan teman-teman untuk membuat project yang lebih besar. Ini mengajarkan mereka tentang teamwork dan bagaimana ide-ide bisa berkembang melalui kolaborasi.</p>
                
                <h3>Kesimpulan</h3>
                <p>Coding dan kreativitas bukan dua hal yang bertolak belakang, tetapi saling melengkapi. Coding memberikan tools dan medium baru bagi anak untuk mengekspresikan kreativitas mereka. Dengan bimbingan yang tepat dan environment yang supportive, coding bisa menjadi salah satu cara paling efektif untuk mengembangkan kreativitas anak di era digital ini.</p>
            `
        },
        '3': {
            title: 'Cara Belajar Coding yang Menyenangkan untuk Anak',
            date: '1 Februari 2026',
            author: 'Tim KodingKids',
            content: `
                <p>Salah satu tantangan terbesar dalam mengajarkan coding kepada anak adalah menjaga agar mereka tetap tertarik dan termotivasi. Coding bisa terasa menakutkan jika didekati dengan cara yang salah. Berikut adalah beberapa strategi untuk membuat pembelajaran coding menjadi menyenangkan bagi anak.</p>
                
                <h3>1. Mulai dengan Visual Programming</h3>
                <p>Jangan langsung mulai dengan bahasa pemrograman berbasis teks yang rumit. Gunakan platform visual seperti Scratch, Blockly, atau Code.org yang menggunakan block-based programming. Anak-anak bisa drag and drop block kode untuk membuat program, mirip seperti menyusun puzzle. Ini membuat konsep coding lebih mudah dipahami tanpa terjebak dalam syntax yang rumit.</p>
                
                <h3>2. Belajar Sambil Membuat Game</h3>
                <p>Hampir semua anak suka bermain game. Manfaatkan minat ini dengan mengajarkan coding melalui pembuatan game. Ketika mereka membuat game mereka sendiri, mereka akan lebih termotivasi untuk belajar karena melihat hasil nyata dari usaha mereka. Mulai dari game sederhana seperti catch the ball, lalu bertahap ke game yang lebih kompleks.</p>
                
                <h3>3. Project-Based Learning</h3>
                <p>Daripada mengajarkan teori coding yang abstrak, gunakan pendekatan project-based learning. Berikan anak project yang menarik dan relevan dengan minat mereka. Misalnya, jika anak suka cerita, ajak mereka membuat interactive storytelling. Jika suka musik, buat program untuk membuat musik digital. Pembelajaran akan lebih bermakna ketika ada tujuan konkret.</p>
                
                <h3>4. Jangan Takut dengan Kesalahan</h3>
                <p>Dalam coding, error atau bug adalah hal yang normal dan merupakan bagian dari proses pembelajaran. Ajarkan anak untuk tidak frustrasi ketika program mereka tidak berjalan seperti yang diharapkan. Sebaliknya, ajak mereka melihat error sebagai puzzle yang perlu dipecahkan. Proses debugging ini sebenarnya melatih critical thinking yang sangat berharga.</p>
                
                <h3>5. Belajar dalam Kelompok</h3>
                <p>Coding tidak harus aktivitas soliter. Belajar bersama teman-teman bisa membuat prosesnya lebih menyenangkan. Mereka bisa saling membantu ketika menghadapi kesulitan, berbagi ide, dan bahkan berkompetisi secara sehat. Ini juga mengajarkan collaboration skills yang penting untuk masa depan.</p>
                
                <h3>6. Rayakan Setiap Pencapaian</h3>
                <p>Tidak peduli seberapa kecil progress yang dibuat, rayakan! Apakah mereka berhasil membuat karakter bergerak? Itu pencapaian! Berhasil menambahkan sound effect? Itu juga pencapaian! Positive reinforcement akan membuat anak lebih percaya diri dan termotivasi untuk terus belajar.</p>
                
                <h3>7. Berikan Waktu untuk Eksplorasi Bebas</h3>
                <p>Meskipun struktur pembelajaran itu penting, berikan juga waktu untuk anak bereksplorasi secara bebas. Biarkan mereka mencoba hal-hal baru, bereksperimen dengan fitur-fitur yang berbeda, atau membuat project sesuai keinginan mereka tanpa instruksi khusus. Kreativitas sering muncul ketika anak diberi kebebasan.</p>
                
                <h3>8. Gunakan Resources yang Menarik</h3>
                <p>Ada banyak resources online yang dirancang khusus untuk membuat coding menyenangkan bagi anak, seperti video tutorial yang engaging, coding games, atau aplikasi mobile. Variasikan metode pembelajaran agar tidak monoton.</p>
                
                <h3>Kesimpulan</h3>
                <p>Kunci membuat coding menyenangkan adalah dengan memahami bahwa setiap anak berbeda. Apa yang menarik bagi satu anak mungkin membosankan bagi anak lain. Amati minat dan kecepatan belajar anak, lalu sesuaikan pendekatan pembelajaran. Yang terpenting, jaga agar suasana belajar tetap positif, supportive, dan fun. Ketika anak menikmati prosesnya, mereka akan belajar lebih efektif dan hasilnya akan lebih optimal.</p>
            `
        }
    };
    
    const article = articles[articleId];
    if (article) {
        document.getElementById('articleTitle').textContent = article.title;
        document.getElementById('articleDate').textContent = article.date;
        document.getElementById('articleAuthor').textContent = article.author;
        document.getElementById('articleContent').innerHTML = article.content;
    }
}
