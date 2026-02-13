# KodingKids - Website Company Profile

Website company profile untuk kelas coding anak-anak dengan konsep modern, ceria, profesional, interaktif, dan fully responsive.

## 🎨 Fitur Utama

### Tema & Tampilan
- **Gaya Visual**: Colorful, ramah anak, tetapi profesional
- **Warna Dominan**: Kombinasi biru (#667eea), ungu (#764ba2), kuning (#fbbf24), hijau (#48bb78)
- **Ilustrasi**: SVG ilustrasi anak belajar coding, laptop, robot, dan elemen pemrograman
- **Font**: Nunito - bulat, ramah anak, mudah dibaca
- **Animasi**: Subtle hover effects, scroll animations, loading screen

### Responsivitas
✅ Mobile (< 480px)
✅ Tablet (480px - 968px)
✅ Desktop (> 968px)

## 📁 Struktur Website

### 1. **index.html** - Halaman Utama
Berisi:
- Hero section dengan headline dan CTA buttons
- Section "Mengapa Belajar Coding?" (4 poin dengan ikon)
- Section "Program Kami" (4 kartu program)
- Section "Artikel Terbaru" (3 artikel nyata)
- CTA section
- Footer

### 2. **programs.html** - Halaman Program
Menampilkan 4 program lengkap:
- Coding Dasar untuk Anak (8-12 tahun, 3 bulan)
- Game Development untuk Pemula (10-15 tahun, 4 bulan)
- Website untuk Anak (11-15 tahun, 3 bulan)
- Robotika Dasar (9-14 tahun, 4 bulan)

Setiap program memiliki:
- Deskripsi lengkap
- Durasi, usia, metode, jadwal
- Link ke halaman detail

### 3. **program-detail.html** - Detail Program
Halaman terpisah untuk setiap program dengan:
- Header dengan ikon dan judul
- Info grid (durasi, usia, metode, jadwal)
- Hasil belajar yang akan dicapai
- Silabus pembelajaran lengkap
- CTA untuk pendaftaran

**Parameter**: Menggunakan query parameter `?id=1` (1-4)

### 4. **blog.html** - Halaman Blog
Daftar artikel dalam bentuk kartu:
- Grid layout untuk artikel
- Preview konten
- Meta information (tanggal, penulis)
- Newsletter subscription form

### 5. **article.html** - Detail Artikel
3 artikel lengkap dan nyata:

**Artikel 1**: "Kenapa Anak Perlu Belajar Coding Sejak Dini?"
- Mengembangkan kemampuan berpikir logis
- Meningkatkan kreativitas dan inovasi
- Melatih problem solving
- Mempersiapkan masa depan
- Meningkatkan kepercayaan diri

**Artikel 2**: "Manfaat Coding untuk Kreativitas Anak"
- Coding sebagai kanvas digital
- Menggabungkan seni dan logika
- Kebebasan bereksperimen
- Storytelling interaktif
- Kolaborasi dan sharing

**Artikel 3**: "Cara Belajar Coding yang Menyenangkan untuk Anak"
- Mulai dengan visual programming
- Belajar sambil membuat game
- Project-based learning
- Jangan takut dengan kesalahan
- Belajar dalam kelompok

**Parameter**: Menggunakan query parameter `?id=1` (1-3)

### 6. **about.html** - Tentang Kami
Berisi:
- Hero section
- Visi: Menciptakan generasi yang mampu berinovasi dengan teknologi
- Misi: 4 poin utama
- "Mengapa Memilih KodingKids?" (6 keunggulan)
- Tim kami (4 anggota)
- Statistik (500+ siswa, 1000+ project, 98% kepuasan, 4+ tahun)

### 7. **contact.html** - Kontak
Berisi:
- Form kontak (Nama, Email, WhatsApp, Pesan)
- Informasi kontak lengkap:
  - WhatsApp: +62 812-3456-7890
  - Email: info@kodingkids.com
  - Lokasi: Bogor, Indonesia
  - Jam operasional
- Social media links
- Map placeholder
- FAQ section (4 pertanyaan umum)

## 🎯 Fitur Interaktif

### Navbar
- ✅ Sticky saat scroll
- ✅ Hamburger menu untuk mobile
- ✅ Active state untuk halaman aktif
- ✅ Smooth transitions

### Animasi
- ✅ Loading screen saat pindah halaman
- ✅ Fade-in animation saat scroll (Intersection Observer)
- ✅ Hover effects pada buttons dan cards
- ✅ Floating animations pada ilustrasi

### Form
- ✅ Form validation
- ✅ Focus states
- ✅ Success alert
- ✅ Newsletter subscription

### Routing
- ✅ Multi-page website (bukan one-page)
- ✅ Artikel dibuka di halaman terpisah (bukan modal/popup)
- ✅ Program detail di halaman terpisah
- ✅ Query parameter untuk dynamic content

## 🚀 Cara Menggunakan

### Membuka Website
1. Buka file `index.html` di browser
2. Navigasi menggunakan menu di navbar
3. Semua halaman fully functional

### Navigasi Artikel
Klik artikel mana saja di:
- Homepage (section "Artikel Terbaru")
- Blog page (daftar lengkap)
- Related articles di bawah setiap artikel

### Navigasi Program
Klik program mana saja di:
- Homepage (section "Program Kami")
- Programs page (daftar lengkap)

## 📱 Responsive Breakpoints

```css
Mobile: < 480px
Tablet: 480px - 968px
Desktop: > 968px
```

### Mobile
- Hamburger menu
- Single column layout
- Touch-friendly buttons
- Optimized images

### Tablet
- 2 column layout untuk beberapa section
- Adjusted font sizes
- Optimized spacing

### Desktop
- Multi-column layouts
- Full navbar
- Maximum content width: 1200px
- Hover effects aktif

## 🎨 Color Palette

```css
Primary Blue: #667eea
Primary Purple: #764ba2
Primary Yellow: #fbbf24
Primary Green: #48bb78
Primary Pink: #ed64a6
Text Dark: #2d3748
Text Light: #718096
Background Light: #f7fafc
White: #ffffff
```

## 📦 File Structure

```
kodingkids/
├── index.html              # Homepage
├── programs.html           # Daftar program
├── program-detail.html     # Detail program (dynamic)
├── blog.html              # Daftar artikel
├── article.html           # Detail artikel (dynamic)
├── about.html             # Tentang kami
├── contact.html           # Kontak
├── styles.css             # Semua styling
├── script.js              # JavaScript interaktif
└── README.md              # Dokumentasi
```

## ✨ Highlights

✅ **Konten Nyata** - Semua artikel dan program berisi konten lengkap dan bermakna, bukan lorem ipsum
✅ **Multi-Page** - Setiap halaman terpisah, bukan one-page scroll
✅ **Artikel Terpisah** - Setiap artikel dibuka di halaman baru, bukan popup/modal
✅ **Fully Responsive** - Sempurna di semua device
✅ **Professional** - Desain modern namun ramah anak
✅ **Interactive** - Animasi smooth dan hover effects
✅ **SEO Friendly** - Semantic HTML structure
✅ **Fast Loading** - Optimized dengan inline SVG

## 🎓 Konten Edukasi

Website ini tidak hanya cantik secara visual, tetapi juga kaya konten edukatif:
- 3 artikel lengkap tentang coding untuk anak
- 4 program dengan silabus detail
- Tips dan informasi bermanfaat
- FAQ yang menjawab pertanyaan umum orang tua

## 📞 Kontak & Informasi

**KodingKids**
- Website: kodingkids.com (contoh)
- Email: info@kodingkids.com
- WhatsApp: +62 812-3456-7890
- Lokasi: Bogor, Jawa Barat, Indonesia

---

**Dibuat dengan ❤️ untuk anak-anak Indonesia**

© 2026 KodingKids. All rights reserved.
